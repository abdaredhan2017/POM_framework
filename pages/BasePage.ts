import {Page} from '@playwright/test';

export class BasePage {        //Class is maintain as export so in any of the class we can import
    public static page : Page; //Page is applicable to whole project so define as public & we define the whole framework as static
                             //So make a page object as static i.e. without creating an object using classname we can access it
static async openApplication(url : string) {    //Static method
    await this.page.goto(url);
    console.log("Application Opened");
}
}
