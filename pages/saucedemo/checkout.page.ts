import { type Page, expect } from "@playwright/test";

export class SauceCheckoutPage {
	readonly page: Page;

	readonly elements = {
		inputFirstName: "#first-name",
		inputLastName: "#last-name",
		inputPostalCode: "#postal-code",
		appLogo: ".app_logo",
		btnContinue: "#continue",
		btnFinish: "#finish"
	};

	constructor(page: Page) {
		this.page = page;
	}

	async visit(): Promise<void> {
		await this.page.goto("");
	}

	async confirmBuy(): Promise<void> {
		const confirmationText = this.page.getByText(/Checkout: Your Information/);
		await expect(confirmationText).toHaveCount(1);

		await expect(this.page.locator(this.elements.appLogo)
			.filter({ hasText: "Swag Labs" })).toBeVisible();

		await this.page.locator(this.elements.inputFirstName).fill("Francisca");
		await this.page.locator(this.elements.inputLastName).fill("Soares");
		await this.page.locator(this.elements.inputPostalCode).fill("007827162");

		await this.page.locator(this.elements.btnContinue).click();

		await this.page.locator(this.elements.btnFinish).click();
	}

	async validatePurchase():Promise<void> {
		await expect(this.page.getByText("Thank you for your order!")).toBeVisible();
	}
}