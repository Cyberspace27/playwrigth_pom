import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page';


test('User should be able to log in', async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo('https://the-internet.herokuapp.com/login');
    await loginPage.login('username', 'password');
    // Add assertions as needed
});