//To provide objects & methods related to login page

import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    //***************Objects/Elements************ */
    private static textbox_loginname = "//input[@name='txtUserName']";  
    private static textbox_password = "//input[@name='txtPassword']";
    private static button_login = "//input[@value='Login']";

    //***************Methods/Functions*********** */
    static async login(username: string, password: string) {
        await this.page.locator(this.textbox_loginname).fill(username);
        await this.page.locator(this.textbox_password).fill(password);
        await this.page.locator(this.button_login).click();
        console.log("Login Completed");
    }

}