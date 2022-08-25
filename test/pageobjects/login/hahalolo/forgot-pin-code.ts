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
    get tittleOtp() {
        return $('#otp-form-need-title');
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
    get errorForgotPin() {
        return $('#otp-form-otp-error');
    }
    get titleResetPin() {
        return $('#otp-form-set-title');
    }
    get btnBack() {
        return $('.text-base');
    }
    get errorRequest() {
        return $('#otp-form-need-error');
    }
    get btnCancel() {
        return $('#otp-form-otp-cancel');
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
    async clickBtnCancel() {
        return this.btnCancel.click();
    }
    async clickBtnBack() {
        return this.btnBack.click();
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
