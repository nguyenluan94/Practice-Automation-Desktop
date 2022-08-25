import { INVALID_NUMBER, VALID_NUMBER } from '../../../data/login/hahalolo';
import Hahalolo from '../../../pageobjects/login/hahalolo/reset-pin-code';

let windows;
describe('TEST RESET PIN CODE FLOWS', async () => {
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
        await expect(Hahalolo.titleOtp).toBeExisting();
    });
    it('should click forgot pin code', async () => {
        await Hahalolo.clickForgotPin();
        await expect(Hahalolo.titleForgotOtp).toBeExisting();
    });
    it('should input otp success', async () => {
        await Hahalolo.inputOtpForgot(VALID_NUMBER.pin);
        await Hahalolo.clickBtnConfirm();
        await expect(Hahalolo.titleResetPin).toBeExisting();
    });
    it('should button save disable when empty input', async () => {
        await expect(Hahalolo.btnSave).toBeDisabled();
    });
    it('should button save disable when input letter', async () => {
        await Hahalolo.inputResetPin(INVALID_NUMBER.letter);
        await Hahalolo.inputConfirmResetPin(INVALID_NUMBER.letter);
        await expect(Hahalolo.btnSave).toBeDisabled();
    });
    it('should button save disable when input special character', async () => {
        await Hahalolo.inputResetPin(INVALID_NUMBER.specialCharacter);
        await Hahalolo.inputConfirmResetPin(INVALID_NUMBER.specialCharacter);
        await expect(Hahalolo.btnSave).toBeDisabled();
    });
    it('should button save disable when enter PIN less than 6', async () => {
        await Hahalolo.inputResetPin(INVALID_NUMBER.lenghtfalse);
        await Hahalolo.inputConfirmResetPin(VALID_NUMBER.otp);
        await expect(Hahalolo.btnSave).toBeDisabled();
    });
    it('should show The PIN entered is incorrect ', async () => {
        await Hahalolo.inputResetPin(VALID_NUMBER.otp);
        await Hahalolo.inputConfirmResetPin(INVALID_NUMBER.confotp);
        await expect(Hahalolo.btnSave).toBeDisabled();
        await expect(Hahalolo.errorResetPin).toBeExisting();
    });
    it('should reset pin code success', async () => {
        await Hahalolo.inputResetPin(VALID_NUMBER.otp);
        await Hahalolo.inputConfirmResetPin(VALID_NUMBER.otp);
        await Hahalolo.clickBtnSave();
        await expect(Hahalolo.titleOtp).toBeExisting();
    });
    it('should login success', async () => {
        await Hahalolo.inputPinCode(VALID_NUMBER.otp);
        await expect(Hahalolo.logoHalome).toBeExisting();
    });
});
