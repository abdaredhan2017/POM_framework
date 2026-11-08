//All the verification methods related to whole application

import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class VerifyPage extends BasePage {
    //********************Methods/Functions**************** */
    public static async verifyTitle(expectedTitle : string) {
        await expect(this.page).toHaveTitle(expectedTitle);
        console.log("Title verification completed");
    }
}