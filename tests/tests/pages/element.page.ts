import { Page } from '@playwright/test';

export class ElementsPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async textBoxFill() {
    await this.page.getByText('Text Box').click();
    await this.page.getByRole('textbox', { name: 'Full Name' }).fill('Arfa');
    await this.page.getByRole('textbox', { name: 'name@example.com' }).fill('arfa@example.com');
    await this.page.getByRole('textbox', { name: 'Current Address' }).fill('abc');
    await this.page.locator('#permanentAddress').fill('abcd');
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }

  async buttonsClick() {
    await this.page.getByText('Buttons').click();
    await this.page.locator('#doubleClickBtn').dblclick();
    await this.page.locator('#rightClickBtn').click();
    await this.page.getByRole('button', { name: 'Click Me', exact: true }).click();
  }
}
