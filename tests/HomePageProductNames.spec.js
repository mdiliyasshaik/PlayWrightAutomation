import{test,expect} from '@playwright/test'

test('Product Names', async ({page})=>{

    await page.goto('https://www.demoblaze.com/')

    //Get product names
    await page.waitForSelector("//div[@id='tbodyid']//h4/a");
    const products = await page.$$("//div[@id='tbodyid']//h4/a")

    for(const product of products)
    {
        const ProductName= await product.textContent();
        console.log(ProductName)
    }

    page.close();


})