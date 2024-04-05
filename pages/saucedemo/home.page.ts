import { type Page, type Locator, expect } from "@playwright/test";

export class SauceHomePage {

	readonly page: Page;
	readonly mainTitle = /Swag Labs/;
	readonly secondaryTitle: Locator;
	readonly backPackSelect: Locator;
	readonly shoppingCart: Locator;

	constructor(page: Page) {
		this.page = page;
		this.secondaryTitle = page.locator(".header_secondary_container")
			.filter({ hasText: "Products" });
		this.backPackSelect = page.locator("#add-to-cart-sauce-labs-backpack");
		this.shoppingCart = page.locator(".shopping_cart_link");
	}

	async visit(): Promise<void> {
		await this.page.goto("https://www.saucedemo.com/inventory.html");
	}

	async isInSauceHomePage(): Promise<void> {
		await expect(this.page).toHaveTitle(this.mainTitle);
		await expect(this.secondaryTitle).toBeVisible();
	}

	async chooseProduct(): Promise<void> {
		await this.backPackSelect.click();
		await this.shoppingCart.click();
	}

}