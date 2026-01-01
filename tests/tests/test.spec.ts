import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  //await page.goto('https://demoqa.com/', { waitUntil: 'networkidle' });
  await expect(page).toHaveTitle(/DEMOQA/);
  await page.getByRole('heading', { name: 'Elements' }).click()
  await page.waitForTimeout(5000)
  await page.getByRole('listitem').filter({ hasText: 'Text Box' }).click()
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Arfa')
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('arfa@example.com')
  await page.getByRole('textbox', { name: 'Current Address' }).fill('abc')
  await page.locator('#permanentAddress').fill('abcd')
  await page.getByRole('button', { name: 'Submit' }).click()
  await page.getByText('Check Box').click()
  await page.getByRole('button', { name: 'Toggle' }).click()
  await page.locator('.rct-icon.rct-icon-uncheck').first().click()
  await page.locator('.rct-node.rct-node-parent.rct-node-collapsed > .rct-text > label > .rct-checkbox > .rct-icon > path').first().click()
  await page.getByText('Radio Button').click()
  await page.getByText('Yes').click()
  await page.getByText('Impressive').click()
  await page.getByText('Web Tables').click()
  await page.getByRole('button', { name: 'Add' }).click()
  await page.getByRole('textbox', { name: 'First Name' }).fill('arfa')
  await expect(page.getByRole('textbox', { name: 'First Name' })).not.toBeEmpty()
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Saleem')
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('arfa@example.com')
  await page.getByRole('textbox', { name: 'Age' }).fill('22')
  await page.locator('#salary').fill('5000')
  await page.getByPlaceholder('Department').fill('QA')
  await page.locator('#submit').click()
  
});

test('navigate to demoqa and check title', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  //await page.goto('https://demoqa.com/', { waitUntil: 'networkidle' });
  await expect(page).toHaveTitle(/DEMOQA/);
  await page.getByRole('heading', { name: 'Elements' }).click()
  await page.getByText('Buttons').click()
  await page.locator('#doubleClickBtn').dblclick()
  await page.locator('#rightClickBtn').click()
await page.getByRole('button', { name: 'Click Me', exact: true }).click()
//await page.locator('#P0mgF').click();
});


test(' check title', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  //await page.goto('https://demoqa.com/', { waitUntil: 'networkidle' });
  await expect(page).toHaveTitle(/DEMOQA/);
await page.getByRole('heading', { name: 'Forms' }).click()
await page.getByText('Practice Form').click()
await page.locator('#firstName').fill('Arfa')
await page.locator('#lastName').fill('Saleem')
await page.locator('#userEmail').fill('arfa@example.com')
await page.locator('#userNumber').fill('0322')
  await page.locator('#gender-radio-1').click({ force: true })
    await page.locator('#gender-radio-2').click({ force: true })
      await page.locator('#gender-radio-3').click({ force: true })
  await page.locator('#dateOfBirthInput').fill('24 Dec 2025')
await page.locator('#subjectsContainer').getByRole('textbox').fill('qa')
await page.locator('#hobbies-checkbox-1').check({ force: true })
await page.locator('')
await page.locator('#hobbies-checkbox-2').check({ force: true })
await page.locator('#hobbies-checkbox-3').check({ force: true })
await page.locator('#hobbies-checkbox-1').check({ force: false })
await page.locator('#uploadPicture').click()

await page.setInputFiles('input[type="file"]', '/Users/mac/Desktop/practice test/tests/Qawwali Invitation.png');
//await expect( page.getByText('Qawwali Invitation.png')).toBeVisible();

await page.locator('#currentAddress').fill('lahore')
await page.getByText('Select State').click();
await page.getByText('NCR' , { exact: true }).click();
await page.locator('#submit').click()


});






// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
