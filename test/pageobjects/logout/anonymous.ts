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
    get modalVerify() {
        return $('#modal-body-content');
    }
    get btnClose() {
        return $('#modal-icon-close');
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
    async clickModalOk() {
        return this.btnModalOk.click();
    }

    async clickModalCancel() {
        return this.btnModalCancel.click();
    }
    async clickBtnClose() {
        return this.btnClose.click();
    }
}

export default new Anonymous();
