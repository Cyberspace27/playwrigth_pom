    import { Page } from '@playwright/test';
    import { BasePage } from '../base/base-pages';
    
    export class LoginPage extends BasePage {
        private usernameField = this.page.getByLabel('Username');
        private passwordField = this.page.getByLabel('Password');
        private loginButton = this.page.getByRole('button', { name: 'Login' });

        constructor(page: Page) {
            super(page);
        }

        async login(username: string, password: string) {
            await this.usernameField.fill(username);
            await this.passwordField.fill(password);
            await this.loginButton.click();

        }


        
    }