//To provide objects & methods related to logout page

import { BasePage } from "./BasePage";

export class Logoutpage extends BasePage {
    //********************Objects/Elements***************** */
    private static link_logout = "//a[text()='Logout']";

    //********************Methods/Functions**************** */
    static async logout() {
        await this.page.locator(this.link_logout).click();
        console.log("Logout Completed");
    }
}