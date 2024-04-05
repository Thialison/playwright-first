import { type Page, expect } from "@playwright/test";

export class SauceCartPage {
	readonly page: Page;

	readonly elements = {
		secondaryHeader: ".header_secondary_container",
		btnCheckout: "#checkout"
	};

	constructor(page: Page) {
		this.page = page;
	}

	async visit(): Promise<void> {
		await this.page.goto("");
	}

	async isInCartPage(): Promise<void> {
		await expect(this.page.locator(this.elements.secondaryHeader)
			.filter({ hasText: "Your Cart" }))
			.toBeVisible();
	}

	async accessCheckout(): Promise<void> {
		await this.page.locator(this.elements.btnCheckout).click();
	}
}