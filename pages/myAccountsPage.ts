import { Page,Locator } from "@playwright/test";


export class myAccountPage{
    readonly page: Page;
    readonly userName: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;
    readonly rememberMe: Locator;


    constructor(page:Page){
        this.page = page;
        this.userName = page.locator("#username")
        this.password = page.locator("#password")
        this.loginBtn = page.getByRole('button', { name: 'Login' })
        this.rememberMe = page.locator("#rememberme")
    }

    async login(name: string, pass:string){
     await this.userName.fill(name)
     await this.password.fill(pass)
     await this.loginBtn.click()
    }
}