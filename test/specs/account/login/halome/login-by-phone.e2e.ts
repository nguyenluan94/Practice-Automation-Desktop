import { INVALID_NUMBER, VALID_NUMBER } from '../../../../data/login/halome';
import LeftSideBar from '../../../../element/left-side-bar/left-side-bar';
import modal from '../../../../element/modal/modal';
import LoginByPhone from '../../../../pageobjects/account/login/halome/login-by-phone';

describe('TEST ANONYMOUS LOGIN FLOWS', async () => {
    it('should disable login button ', async () => {
        await expect(LoginByPhone.btnStartLogin).toBeDisabled();
    });
    it('should disable login button after enter letter ', async () => {
        await LoginByPhone.enterPhoneNumber(INVALID_NUMBER.letter);
        await expect(LoginByPhone.btnStartLogin).toBeDisabled();
    });
    it('should disable login button after enter special character', async () => {
        await LoginByPhone.enterPhoneNumber(INVALID_NUMBER.specialCharacter);
        await expect(LoginByPhone.btnStartLogin).toBeDisabled();
    });
    it('should disable login button after enter space', async () => {
        await LoginByPhone.enterPhoneNumber(INVALID_NUMBER.space);
        await expect(LoginByPhone.btnStartLogin).toBeDisabled();
    });
    it('should enable login button after enter phone number', async () => {
        await LoginByPhone.enterPhoneNumber(VALID_NUMBER.phone);
        await expect(LoginByPhone.btnStartLogin).not.toBeDisabled();
    });

    it('should process to verification step', async () => {
        await LoginByPhone.startLogin();
        await expect(LoginByPhone.titleLoginVerify).toBeExisting();
    });
    it('should show modal stop the verification process after click back', async () => {
        await LoginByPhone.clickBtnBack();
        await expect(modal.titleModal).toBeExisting();
        await expect(modal.btnOk).toBeExisting();
        await expect(modal.btnCancel).toBeExisting();
    });
    it('should close modal stop verify after click (x)', async () => {
        await modal.clickBtnClose();
    });
    it('should close modal stop verify after click cancel', async () => {
        await LoginByPhone.clickBtnBack();
        await modal.clickBtnCancel();
    });
    it('should back page welcome after click button Ok', async () => {
        await LoginByPhone.clickBtnBack();
        await modal.clickBtnOk();
        await expect(LoginByPhone.pageWelcome).toBeExisting();
    });
    it('should input otp sms and login success', async () => {
        await LoginByPhone.enterPhoneNumber(VALID_NUMBER.phone);
        await LoginByPhone.startLogin();
        await LoginByPhone.startSendSms();
        await LoginByPhone.enterVerification(VALID_NUMBER.otp);
        await expect(LeftSideBar.logo).toBeExisting();
    });
});
