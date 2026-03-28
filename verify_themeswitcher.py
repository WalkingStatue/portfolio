from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:5173")
    page.wait_for_timeout(2000) # wait for preloader to finish

    # Open the theme switcher menu
    page.get_by_role("button", name="Toggle Execution Mode").click()
    page.wait_for_timeout(1000)

    # Verify the dropdown has role="menu" and options have role="menuitem"
    menu = page.get_by_role("menu")
    menu.wait_for(state="visible")

    # Click the "Focus" theme option
    page.get_by_role("menuitem", name="Focus").click()
    page.wait_for_timeout(1000)

    # Open the menu again to check aria-current on the selected item
    page.get_by_role("button", name="Toggle Execution Mode").click()
    page.wait_for_timeout(1000)

    # Take screenshot at the key moment showing the open menu and active item
    page.screenshot(path="/home/jules/verification/screenshots/verification.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    import os
    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
    os.makedirs("/home/jules/verification/videos", exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()