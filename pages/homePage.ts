import { Page, Locator } from "@playwright/test";

export class homePage{
    readonly page: Page;
    readonly loggedInUser: Locator


    constructor(page:Page){
        this.page = page
        this.loggedInUser = page.locator("//strong[text()='marwabasuony']")
    }

    async isUserLoggedInSuccessfully()
    {
        return await this.loggedInUser.isVisible()
    }

}