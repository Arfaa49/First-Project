import {test , expect} from '@playwright/test'

test.only('test1' , async ({page}) => {
  await page.goto('https://oceanwp.org/demos/')
  await expect(page).toHaveTitle('Demos | OceanWP')
  await page.locator('.opl-link').click()
  await page.getByRole('link', { name: 'Sign up', exact: true}).click()
  await page.locator('#opl_register_login').fill('Arfaa')
  await page.locator('#opl_register_email').fill('abc@gmail.com')
  await page.locator('#opl_register_pass').fill('Arfa1234@')
  await page.locator('#opl_register_pass2').fill('Arfa1jjj234@')
  await page.locator('#register_button').click()

});