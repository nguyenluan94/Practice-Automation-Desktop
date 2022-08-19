import Page from '../page';

class Hahalolo extends Page {
  get errorSetOtp() {
    return $('#otp-form-set-error');
  }
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
  get otpHahalolo() {
    return $('#otp-form-need-input-1');
  }
  get showLogoHalome() {
    return $('#appbar-logo');
  }
  get changeAccount() {
    return $('#halo-login-form-button-logout');
  }
  get errorOtp() {
    return $('#otp-form-need-error');
  }
  get forgotOtp() {
    return $('#otp-form-need-button-forgot');
  }
  get titleForgotOtp() {
    return $('#otp-form-otp-title');
  }
  get btnConfirm() {
    return $('button[id="otp-form-otp-confirm"]');
  }
  get inputForgotOtp() {
    return $('#otp-form-otp-input-1');
  }
  get titleSetOtp() {
    return $('#otp-form-set-title');
  }
  get otpinput() {
    return $('#otp-input-1');
  }
  get otpConfirm() {
    return $('#pin-confirm-pin-1');
  }
  get btnSave() {
    return $('#halo-login-form-button-ok');
  }
  get btnCancel() {
    return $('#otp-form-otp-cancel');
  }
  get errorPincode() {
    return $('#otp-form-need-error');
  }
  async clickBtnCancel() {
    return this.btnCancel.click();
  }
  async inputSetOtp(setOtp: string) {
    return this.otpinput.setValue(setOtp);
  }
  async inputConfirmOtp(setOtp: string) {
    return this.otpConfirm.setValue(setOtp);
  }
  async clickBtnSave() {
    return this.btnSave.click();
  }
  async inputFgOtp(otp: string) {
    return this.inputForgotOtp.setValue(otp);
  }
  async clickBtnConfirm() {
    return this.btnConfirm.click();
  }

  async clickForgotOtp() {
    return this.forgotOtp.click();
  }
  async buttonChange() {
    return this.changeAccount.click();
  }
  async inputOtp(otp: string) {
    return this.otpHahalolo.setValue(otp);
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