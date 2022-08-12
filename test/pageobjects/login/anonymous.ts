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

    async enterPhoneNumber(phone: string) {
        return this.inputPhoneNumber.setValue(phone);
    }

    async startLogin() {
        return this.btnStartLogin.click();
    }
}

export default new Anonymous();
