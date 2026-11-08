// Actual automation script

import {test} from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { LoginPage } from '../pages/LoginPage';
import { VerifyPage } from '../pages/VerifyPage';
import { Logoutpage } from '../pages/LogoutPage';   

test("TC001: Login Functionality", async({page}) =>{
    BasePage.page = page;
    await BasePage.openApplication("https://ctcorphyd.com/SureshIT/login.php");
    await LoginPage.login("sureshit", "sureshit");
    await VerifyPage.verifyTitle("SureshIT");
    await Logoutpage.logout();
}
);