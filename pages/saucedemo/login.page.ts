import { type Page, type Locator } from "@playwright/test";

export class SauceLoginPage {

	readonly page: Page;
	readonly url = "https://www.saucedemo.com/";
	readonly inputUserName: Locator;
	readonly inputPassword: Locator;
	readonly btnLogin: Locator;

	constructor(page: Page) {
		this.page = page;
		this.inputUserName = page.locator("#user-name");
		this.inputPassword = page.locator("#password");
		this.btnLogin = page.locator("#login-button");
	}

	async visit(): Promise<void> {
		await this.page.goto(this.url);
	}

	async entry(username: string, password: string): Promise<void> {
		await this.inputUserName.fill(username);
		await this.inputPassword.fill(password);
		await this.btnLogin.click();
	}
}