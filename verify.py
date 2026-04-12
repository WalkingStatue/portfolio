from playwright.sync_api import sync_playwright
import time

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Wait a bit for server to start
        time.sleep(3)

        print("Navigating to localhost:3000...")
        page.goto("http://localhost:3000")

        # 1. Verify ThemeSwitcher accessibility
        print("\nChecking ThemeSwitcher accessibility...")
        toggle_button = page.locator("button[aria-label='Toggle Execution Mode']")
        toggle_button.wait_for()

        has_popup = toggle_button.get_attribute("aria-haspopup")
        is_expanded = toggle_button.get_attribute("aria-expanded")

        print(f"aria-haspopup: {has_popup}")
        print(f"aria-expanded: {is_expanded}")
        assert has_popup == "menu"
        assert is_expanded == "false"

        # Click to open
        toggle_button.click()

        # Wait for menu to appear
        menu = page.locator("div[role='menu']")
        menu.wait_for()

        # Check if presentation and menuitem roles are present
        presentation = page.locator("div[role='presentation']").count()
        menuitems = page.locator("button[role='menuitem']").count()

        print(f"Presentation items: {presentation}")
        print(f"Menu items: {menuitems}")
        assert presentation > 0
        assert menuitems > 0

        is_expanded_after = toggle_button.get_attribute("aria-expanded")
        print(f"aria-expanded after click: {is_expanded_after}")
        assert is_expanded_after == "true"

        # 2. Verify MagneticButton rendering
        print("\nChecking MagneticButton rendering...")
        # Find the MagneticButton in the footer (LET'S TALK) which is inside an h2
        # It's an anchor wrapped in the motion div directly now
        footer_links = page.locator("footer h2 a").count()
        print(f"Found {footer_links} links inside footer heading")

        # Let's check there's no nested button/a invalid HTML
        nested_invalid = page.evaluate('''() => {
            const buttons = document.querySelectorAll('button a');
            const anchors = document.querySelectorAll('a button');
            return buttons.length > 0 || anchors.length > 0;
        }''')
        print(f"Has invalid nested a/button tags: {nested_invalid}")
        assert not nested_invalid

        print("\nAll verifications passed!")
        browser.close()

if __name__ == "__main__":
    verify()
