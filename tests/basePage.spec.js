const {test, expect }=require('@playwright/test')
const { describe } = require('node:test')


test('should work', async ({page}) =>{
   page.headless = true
   await page.goto('https://google.com')
   let res = await page.title()
   console.log('My test : '+ res);

   let pageHttp = await page.url()
   console.log(pageHttp);
})

describe('should work with multiple',async()=>{

   test('fill and click', async ({page})=>{
      await page.goto('https://google.com')
      await page.click('[name="q"]')
      //or
      //await page.locator('name=q').click()
      await page.fill('[name="q"]', 'Playwith')
      //or
      //await page.locator('id=name').click()
   })
   test('multiple locators', async ({page})=>{
      await page.goto('https://google.com')
      let locators = await page.$$('//a')
         for(const locator of locators){
            let locatorId = await locator.textContent()
            console.log(locatorId);
         }
   })
})