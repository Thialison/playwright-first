import { test } from "@playwright/test";
import { PlaywrightPage } from "../pages/playwright.page";

test.describe("Example", () => {
	test.beforeEach(async({ page }) => {
		await new PlaywrightPage(page).visit();
	});

	test("has title", async({ page }) => {
		await new PlaywrightPage(page).hasTitle();
	});

	test("get started link", async({ page }) => {
		const playwrightDev = new PlaywrightPage(page); 
	
		// Click the get started link.
		await playwrightDev.accessGetStarted();

		// Expects page to have a heading with the name of Installation.
		await playwrightDev.hasStartedLink();
	});

	test.afterAll("Ending", () => {
		// eslint-disable-next-line no-console
		console.log("All done!");
	});
});