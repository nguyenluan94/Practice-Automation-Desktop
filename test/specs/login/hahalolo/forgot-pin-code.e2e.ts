import { INVALID_NUMBER, VALID_NUMBER } from '../../../data/login/hahalolo';
import Hahalolo from '../../../pageobjects/login/hahalolo/forgot-pin-code';

let windows;
describe('TEST FORGOT PIN CODE FLOWS', async () => {
    it('should click button login hahalolo in page welcome', async () => {
        await expect(Hahalolo.pageWelcome).toBeExisting();
        await Hahalolo.clickBtnLoginHalo();
        windows = await browser.getWindowHandles();
        await browser.switchToWindow(windows[1]);
    });
    it('should input account and password', async () => {
        await expect(Hahalolo.pageLoginHalo).toBeExisting();
        await Hahalolo.inputAccount(VALID_NUMBER.account);
        await Hahalolo.inputPassword(VALID_NUMBER.password);
        await Hahalolo.starLogin();
    });
    it('should login hahalolo success', async () => {
        await browser.switchToWindow(windows[0]);
        await expect(Hahalolo.tittleLoginHalo).toBeExisting();
    });
    it('should login success', async () => {
        await expect(Hahalolo.tittleLoginHalo).toBeExisting();
        await Hahalolo.clickBtnCont();
        await expect(Hahalolo.tittleOtp).toBeExisting();
    });
    it('should click forgot pin code', async () => {
        await Hahalolo.clickForgotPin();
        await expect(Hahalolo.titleForgotOtp).toBeExisting();
    });
    it('should disable button confirm when input letter', async () => {
        await Hahalolo.inputOtpForgot(INVALID_NUMBER.letter);
        await expect(Hahalolo.btnConfirm).toBeDisabled();
    });
    it('should disable button confirm when input special character', async () => {
        await Hahalolo.inputOtpForgot(INVALID_NUMBER.specialCharacter);
        await expect(Hahalolo.btnConfirm).toBeDisabled();
    });
    it('should input otp false', async () => {
        await Hahalolo.inputOtpForgot(INVALID_NUMBER.otp);
        await Hahalolo.clickBtnConfirm();
        await expect(Hahalolo.errorForgotPin).toBeExisting();
    });
    it('should input otp success', async () => {
        await Hahalolo.inputOtpForgot(VALID_NUMBER.pin);
        await Hahalolo.clickBtnConfirm();
        await expect(Hahalolo.titleResetPin).toBeExisting();
    });
    it('should click back and go back page login Pin', async () => {
        await Hahalolo.clickBtnBack();
        await expect(Hahalolo.tittleOtp).toBeExisting();
    });
    it('should cancel 3 times and show error sent too many requests', async () => {
        await Hahalolo.clickForgotPin();
        await expect(Hahalolo.titleForgotOtp).toBeExisting();
        await Hahalolo.clickBtnCancel();
        await expect(Hahalolo.tittleOtp).toBeExisting();
        await Hahalolo.clickForgotPin();
        await expect(Hahalolo.titleForgotOtp).toBeExisting();
        await Hahalolo.clickBtnCancel();
        await expect(Hahalolo.tittleOtp).toBeExisting();
        await Hahalolo.clickForgotPin();
        await expect(Hahalolo.titleForgotOtp).toBeExisting();
        await Hahalolo.clickBtnCancel();
        await expect(Hahalolo.tittleOtp).toBeExisting();
        await Hahalolo.clickForgotPin();
        await expect(Hahalolo.errorRequest).toBeExisting();
    });
    it('should input pin code and login success', async () => {
        await Hahalolo.inputPinCode(VALID_NUMBER.otp);
        await expect(Hahalolo.logoHalome).toBeExisting();
    });
});
