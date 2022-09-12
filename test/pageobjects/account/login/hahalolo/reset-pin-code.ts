import Page from '../../../page';

class ResetPINCode extends Page {
    get titleResetPIN() {
        return $('#otp-form-set-title');
    }

    get btnSave() {
        return $('#halo-login-form-button-ok');
    }

    get inputPIN() {
        return $('#otp-input-1');
    }

    get inputPINConfirm() {
        return $('#pin-confirm-pin-1');
    }

    get errorNoticeSetPIN() {
        return $('#otp-form-set-error');
    }

    async clickSave() {
        return this.btnSave.click();
    }

    async enterPIN(pin: string) {
        await this.inputPIN.waitForClickable({ timeout: 10000 });
        await this.inputPIN.click();
        await this.backspace();
        await this.inputPIN.setValue(pin);
    }

    async reEnterPIN(pin: string) {
        await this.inputPINConfirm.waitForClickable({ timeout: 10000 });
        await this.backspace();
        return this.inputPINConfirm.setValue(pin);
    }
}
export default new ResetPINCode();
