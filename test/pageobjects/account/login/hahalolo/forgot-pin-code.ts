import Page from '../../../page';

class ForgotPINCode extends Page {
    get btnForgotPIN() {
        return $('#otp-form-need-button-forgot');
    }

    get titleOtp() {
        return $('#otp-form-otp-title');
    }

    get inputOtp() {
        return $('#otp-form-otp-input-1');
    }

    get btnResend() {
        return $('.cursor-pointer#otp-form-otp-resend');
    }

    get btnResendDisable() {
        return $('.text-gray-30#otp-form-otp-resend');
    }

    get resendOtpAndTimer() {
        return $('#otp-form-otp-resend-timer');
    }

    get btnConfirm() {
        return $('#otp-form-otp-confirm');
    }

    get btnCancel() {
        return $('#otp-form-otp-cancel');
    }

    get errorNoticeOtp() {
        return $('#otp-form-otp-error');
    }

    get errorNoticeManyRequests() {
        return $('#otp-form-need-error');
    }

    async clickForgotPIN() {
        return this.btnForgotPIN.click();
    }

    async clickCancel() {
        await this.btnCancel.click();
    }

    async clickConfirm() {
        await this.btnConfirm.click();
    }

    async enterOtp(otp: string) {
        await this.inputOtp.click();
        await this.backspace();
        await this.inputOtp.setValue(otp);
    }
}

export default new ForgotPINCode();
