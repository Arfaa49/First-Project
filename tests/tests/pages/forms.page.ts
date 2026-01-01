import { Page } from '@playwright/test';

export class FormsPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openPracticeForm() {
    await this.page.getByText('Practice Form').click();
  }

  async fillForm() {
    await this.page.locator('#firstName').fill('Arfa');
    await this.page.locator('#lastName').fill('Saleem');
    await this.page.locator('#userEmail').fill('arfa@example.com');
    await this.page.locator('#userNumber').fill('0322');

    await this.page.locator('#gender-radio-1').click({ force: true });

    await this.page.locator('#dateOfBirthInput').fill('24 Dec 2025');

    await this.page.locator('#subjectsContainer').getByRole('textbox').fill('QA');
    await this.page.keyboard.press('Enter');

    await this.page.locator('#hobbies-checkbox-1').check({ force: true });

    await this.page.setInputFiles(
      '#uploadPicture',
      '/Users/mac/Desktop/practice test/tests/Qawwali Invitation.png'
    );

    await this.page.locator('#currentAddress').fill('Lahore');

    await this.page.getByText('Select State').click();
    await this.page.getByText('NCR').click();

    await this.page.locator('#submit').click();
  }
}
