import { test } from "@playwright/test";
import { SauceLoginPage } from "../pages/saucedemo/login.page";
import { SauceHomePage } from "../pages/saucedemo/home.page";
import { SauceCartPage } from "../pages/saucedemo/cart.page";
import { SauceCheckoutPage } from "../pages/saucedemo/checkout.page";

test.describe("Sauce Demo", () => {
    
	test.beforeEach("Login in Sauce Demo", async({ page }) => {
		const login = new SauceLoginPage(page);
		await login.visit();

		await login.entry("standard_user", "secret_sauce");
	});

	test("User is Login in Sauce Demo HomePage", async({ page }) => {
		new SauceHomePage(page).isInSauceHomePage();
	});

	test("Buy Product", async({ page }) => {
		await new SauceHomePage(page).chooseProduct();

		const cart = new SauceCartPage(page);

		await cart.isInCartPage();
		await cart.accessCheckout();

		const checkout = new SauceCheckoutPage(page);

		await checkout.confirmBuy();

		await checkout.validatePurchase();
	});

	test.afterEach("Status check", async({ page }) => {
		// eslint-disable-next-line no-console
		console.log(`${test.info().status?.toUpperCase()} Scenario: "${test.info().title}"`);
		
		// eslint-disable-next-line playwright/no-conditional-in-test
		if (test.info().status !== test.info().expectedStatus) {
			// eslint-disable-next-line no-console
			console.log(`Did not run as expected, ended up at ${page.url()}`);
		}
	});
});