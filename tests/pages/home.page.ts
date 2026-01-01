import { Page, expect } from '@playwright/test';

export class HomePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openWebsite() {
    await this.page.goto('https://demoqa.com/');
    await expect(this.page).toHaveTitle(/DEMOQA/);
  }

  async clickElements() {
    await this.page.getByRole('heading', { name: 'Elements' }).click();
  }

  async clickForms() {
    await this.page.getByRole('heading', { name: 'Forms' }).click();
  }
}
