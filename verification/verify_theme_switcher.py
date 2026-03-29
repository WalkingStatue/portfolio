from playwright.sync_api import sync_playwright
import time

def run_cuj(page):
    print("Navigating to local server...")
    page.goto("http://localhost:5173")
    page.wait_for_timeout(2000)

    print("Finding theme switcher button...")
    theme_btn = page.locator('button[aria-label="Toggle Execution Mode"]')

    # Assert initial state
    assert theme_btn.get_attribute("aria-expanded") == "false"
    assert theme_btn.get_attribute("aria-haspopup") == "menu"

    print("Opening theme menu...")
    theme_btn.click()
    page.wait_for_timeout(1000)

    # Assert opened state
    assert theme_btn.get_attribute("aria-expanded") == "true"

    print("Verifying menu roles...")
    menu = page.locator('div[role="menu"]')
    assert menu.is_visible()

    header = page.locator('div[role="presentation"]')
    assert header.is_visible()

    menuitems = page.locator('button[role="menuitem"]')
    assert menuitems.count() == 4

    print("Taking screenshot of open menu...")
    page.screenshot(path="verification/screenshots/theme_menu_open.png")

    print("Selecting a new theme (Focus)...")
    focus_btn = menuitems.filter(has_text="Focus")
    focus_btn.click()
    page.wait_for_timeout(1000)

    # Verify DOM class was updated
    html_class = page.evaluate("document.documentElement.className")
    assert "theme-focus" in html_class, f"Expected 'theme-focus' in HTML class, got: {html_class}"
    print("Theme applied successfully.")

    # Re-open to check aria-current
    theme_btn.click()
    page.wait_for_timeout(1000)

    new_focus_btn = page.locator('button[role="menuitem"]').filter(has_text="Focus")
    assert new_focus_btn.get_attribute("aria-current") == "true"

    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
            print("CUJ completed successfully.")
        except Exception as e:
            print(f"Test failed: {e}")
            raise
        finally:
            context.close()
            browser.close()
