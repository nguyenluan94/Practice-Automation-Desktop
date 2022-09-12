import { VALID_LOGIN_HAHALOLO } from '../../../../data/login/hahalolo';
import Page from '../../../page';

class Hahalolo extends Page {
    get btnStartLogin() {
        return $('#platforms-halo');
    }

    get inputUsername() {
        return $('#accountId');
    }

    get pageLoginHahalolo() {
        return $('#app');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnLoginHalo() {
        return $('button[type="submit"]');
    }

    get titleLoginHahalolo() {
        return $('#halo-login-form-title');
    }

    get btnContinue() {
        return $('#halo-login-form-button-ok');
    }

    get titleEnterPIN() {
        return $('#otp-form-need-title');
    }

    get inputPIN() {
        return $('#otp-form-need-input-1');
    }

    get btnChangeAccount() {
        return $('#halo-login-form-button-logout');
    }

    get errorPIN() {
        return $('#otp-form-need-error');
    }
    get loginHaloError() {
        return $('.MuiAlert-standardError');
    }
    get btnBack() {
        return $('#login-button-back');
    }
    async clickBack() {
        return this.btnBack.click();
    }

    async startLogin() {
        return this.btnStartLogin.click();
    }

    async enterUsername(username) {
        await this.inputUsername.setValue(username);
    }

    async enterPassword(password) {
        await this.inputPassword.setValue(password);
    }

    async clickLoginHalo() {
        return this.btnLoginHalo.click();
    }

    async clickChangeAccount() {
        return this.btnChangeAccount.click();
    }

    async clickContinue() {
        await this.btnContinue.waitForClickable({ timeout: 15000 });
        return this.btnContinue.click();
    }

    async enterPIN(pin: string) {
        await this.inputPIN.setValue(pin);
    }
    async loginHahalolo(PIN = true) {
        await this.startLogin();
        const windows = await this.getAllWindows();
        await browser.switchToWindow(windows[1]);
        await this.enterUsername(VALID_LOGIN_HAHALOLO.username);
        await this.enterPassword(VALID_LOGIN_HAHALOLO.password);
        await this.clickLoginHalo();
        await browser.switchToWindow(windows[0]);
        await this.clickContinue();
        if (PIN) {
            await this.enterPIN(VALID_LOGIN_HAHALOLO.pin);
        }
    }
}
export default new Hahalolo();
