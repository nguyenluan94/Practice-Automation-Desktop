import Page from '../page';

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
        return $('#otp-form-need-sub-title');
    }
    get loginError() {
        return $('.MuiAlert-message');
    }
    get logoutAccount() {
        return $('#halo-login-form-button-logout');
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

    async clickChangeAcc() {
        return this.logoutAccount.click();
    }
}

export default new Hahalolo();
