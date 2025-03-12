import{test, expect} from '@playwright/test'

test('Login', async ({page})=>{

    //Open website
    await page.goto('https://www.demoblaze.com/');

    //Click on Login link
    await page.click('id=login2')

    //Enter Login id
    await page.fill('#loginusername','pavanol')

    //Enter password
    await page.fill("input[id='loginpassword']",'test@123')

    //Click Login button
    await page.click("//button[normalize-space()='Log in']")

    //Verify the successgul Login
    const logoutlink= await page.locator("//a[@id='logout2']")
    await expect(logoutlink).toBeVisible();

    await page.close();







})
