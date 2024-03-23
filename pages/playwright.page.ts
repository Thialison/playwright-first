import { expect, type Page, type Locator } from "@playwright/test";

export class PlaywrightPage {

	readonly page: Page;
	readonly getStartedLink: Locator;
	readonly url = "https://playwright.dev/";
	readonly PageText = /Playwright/;
	readonly instalationHeading: Locator;


	constructor(page: Page) {
		this.page = page;
		this.getStartedLink = page.locator("a", { hasText: "Get started" });
		this.instalationHeading = page.locator("h1", { hasText: "Installation" });
	}

	async visit() {
		await this.page.goto(this.url);
	}

	async hasTitle() {
		await expect(this.page).toHaveTitle(this.PageText);
	}

	async accessGetStarted() {
		await this.getStartedLink.first().click();
	}

	async hasStartedLink() {
		await expect(this.instalationHeading).toBeVisible();
	}
}