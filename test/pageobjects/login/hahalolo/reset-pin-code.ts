import Page from '../../page';

class Hahalolo extends Page {
    get btnLoginHalo() {
        return $('button[id="platforms-halo"]');
    }
    get pageWelcome() {
        return $('#welcome-title');
    }
    get pageLoginHalo() {
        return $('.jss7');
    }
    get password() {
        return $('#password');
    }
    get account() {
        return $('#accountId');
    }
    get btnLogin() {
        return $('[type="submit"]');
    }
    get tittleLoginHalo() {
        return $('#halo-login-form-title');
    }
    get btnContinue() {
        return $('#halo-login-form-button-ok');
    }
    get titleForgotOtp() {
        return $('#otp-form-otp-title');
    }
    get btnConfirm() {
        return $('button[id="otp-form-otp-confirm"]');
    }
    get btnForgotPin() {
        return $('#otp-form-need-button-forgot');
    }
    get otpForgot() {
        return $('#otp-form-otp-input-1');
    }
    get titleResetPin() {
        return $('#otp-form-set-title');
    }
    get btnSave() {
        return $('#halo-login-form-button-ok');
    }
    get enterResetPin() {
        return $('#otp-input-1');
    }
    get reEnterResetPin() {
        return $('#pin-confirm-pin-1');
    }
    get errorResetPin() {
        return $('#otp-form-set-error');
    }
    get titleOtp() {
        return $('#otp-form-need-title');
    }
    get logoHalome() {
        return $('#appbar-logo');
    }
    get pinCode() {
        return $('#otp-form-need-input-1');
    }
    async inputPinCode(otp: string) {
        return this.pinCode.setValue(otp);
    }
    async inputConfirmResetPin(confpin: string) {
        await this.reEnterResetPin.waitForClickable({ timeout: 10000 });
        await this.reEnterResetPin.click();
        await this.pressBackspace();
        return this.reEnterResetPin.setValue(confpin);
    }
    async inputResetPin(rspin: string) {
        await this.enterResetPin.waitForClickable({ timeout: 10000 });
        await this.enterResetPin.click();
        await this.pressBackspace();
        return this.enterResetPin.setValue(rspin);
    }
    async clickBtnSave() {
        return this.btnSave.click();
    }
    async clickBtnConfirm() {
        return this.btnConfirm.click();
    }
    async inputOtpForgot(pin: string) {
        return this.otpForgot.setValue(pin);
    }
    async clickForgotPin() {
        return this.btnForgotPin.click();
    }
    async clickBtnCont() {
        return this.btnContinue.click();
    }
    async clickBtnLoginHalo() {
        return this.btnLoginHalo.click();
    }
    async inputAccount(account: string) {
        return this.account.setValue(account);
    }
    async inputPassword(password: string) {
        return this.password.setValue(password);
    }
    async starLogin() {
        return this.btnLogin.click();
    }
}

export default new Hahalolo();
