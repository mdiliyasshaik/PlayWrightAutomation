/*page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.*/


import{test,expect} from '@playwright/test'

test('Built in Locators', async ({page}) => {

    /*page.getByRole() to locate by explicit and implicit accessibility attributes.*/
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible()

    /*page.getByPlaceholder() to locate an input by placeholder.*/

    await page.getByPlaceholder('Username').fill("Admin")
    await page.getByPlaceholder('Password').fill("admin123")

    /*page.getByRole() to locate by explicit and implicit accessibility attributes.*/

    await page.getByRole('button', {type : 'submit'}).click()

    /*page.getByText() to locate by text content.*/

    const username=await page.locator('//p[@class="oxd-userdropdown-name"]').textContent()
    await page.getByText(username).isVisible











})