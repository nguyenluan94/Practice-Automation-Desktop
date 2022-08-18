import Page from '../page';

class Anonymous extends Page {
    get inputPhoneNumber() {
        return $('input[id="anonymous-input"]');
    }

    get btnStartLogin() {
        return $('button[id="anonymous-button-ok"]');
    }

    get titleLoginVerify() {
        return $('#login-verify-title');
    }

    get btnSendSmsOtp() {
        return $('#login-verify-send-sms-otp');
    }

    get inputVerification() {
        return $('input[id="phone-verify-form-input-1"]');
    }

    get loginVerifyError() {
        return $('#login-verify-error');
    }

    get modalVerify() {
        return $('#modal-body-content');
    }

    get btnVerifyBack() {
        return $('#login-verify-go-back');
    }
    get btnClose() {
        return $('[id="modal-icon-close"]');
    }

    get btnModalOk() {
        return $('button[id="modal-button-ok"]');
    }

    get btnModalCancel() {
        return $('button[id="modal-button-cancel"]');
    }
    get showLogoHalome() {
        return $('#appbar-logo');
    }
    get btnContinue() {
        return $('button[id="register-continue-button"]');
    }
    get inputName() {
        return $('input');
    }
    get appbarProfile() {
        return $('#appbar-profile');
    }
    get avatarProfile() {
        return $('#profile-content-button-avatar');
    }
    get pageWelcome() {
        return $('#welcome-title');
    }
    get btnLogout() {
        return $('#profile-content-button-logout');
    }
    async clickLogout() {
        return this.btnLogout.click();
    }
    async clickAbProfile() {
        return this.appbarProfile.click();
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

    async showModal() {
        return this.btnVerifyBack.click();
    }

    async clickModalOk() {
        return this.btnModalOk.click();
    }

    async clickModalCancel() {
        return this.btnModalCancel.click();
    }
    async clickBtnClose() {
        return this.btnClose.click();
    }
    async clickBtnContinue() {
        return this.btnContinue.click();
    }
    async enterInputName(name: string) {
        return this.inputName.setValue(name);
    }
}

export default new Anonymous();
