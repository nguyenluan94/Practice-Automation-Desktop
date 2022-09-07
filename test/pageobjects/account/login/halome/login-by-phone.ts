import { VALID_NUMBER } from '../../../../data/login/halome';
import Page from '../../../page';

class LoginByPhone extends Page {
    get inputPhoneNumber() {
        return $('input[id="anonymous-input"]');
    }

    get btnStartLogin() {
        return $('button[id="anonymous-button-ok"]');
    }

    get titleLoginVerify() {
        return $('#login-verify-title');
    }
    get titleVerifyError() {
        return $('#login-verify-error');
    }

    get btnSendSmsOtp() {
        return $('#login-verify-send-sms-otp');
    }

    get inputVerification() {
        return $('input[id="phone-verify-form-input-1"]');
    }
    get btnBack() {
        return $('#login-button-back');
    }
    get btnContinue() {
        return $('button[id="first-login-continue-button"]');
    }
    get inputName() {
        return $('input');
    }

    get pageWelcome() {
        return $('#welcome-title');
    }

    async enterPhoneNumber(phone: number | string) {
        return this.inputPhoneNumber.setValue(phone);
    }

    async startLogin() {
        return this.btnStartLogin.click();
    }

    async startSendSms() {
        return this.btnSendSmsOtp.click();
    }

    async enterVerification(code: string) {
        return this.inputVerification.setValue(code);
    }

    async clickBtnBack() {
        return this.btnBack.click();
    }
    async clickBtnContinue() {
        return this.btnContinue.click();
    }
    async enterInputName(name: string) {
        return this.inputName.setValue(name);
    }
    async loginHalome() {
        await this.enterPhoneNumber(VALID_NUMBER.phone);
        await this.startLogin();
        await this.startSendSms();
        await this.enterVerification(VALID_NUMBER.otp);
    }
}

export default new LoginByPhone();
