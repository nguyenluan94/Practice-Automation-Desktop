import { INVALID_NUMBER, VALID_NUMBER } from '../../data/login/anonymous';
import LeftSideBar from '../../element/left-side-bar/left-side-bar';
import modal from '../../element/modal/modal';
import Anonymous from '../../pageobjects/login/anonymous';

describe('TEST ANONYMOUS LOGIN FLOWS', async () => {
    it('should disable login button ', async () => {
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });

    it('should disable login button after enter letter ', async () => {
        await Anonymous.enterPhoneNumber(INVALID_NUMBER.letter);
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });
    it('should disable login button after enter special character', async () => {
        await Anonymous.enterPhoneNumber(INVALID_NUMBER.specialCharacter);
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });
    it('should disable login button after enter space', async () => {
        await Anonymous.enterPhoneNumber(INVALID_NUMBER.space);
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });
    it('should enable login button after enter phone number', async () => {
        await Anonymous.enterPhoneNumber(VALID_NUMBER.phone);
        await expect(Anonymous.btnStartLogin).not.toBeDisabled();
    });

    it('should process to verification step', async () => {
        await Anonymous.startLogin();
        await expect(Anonymous.titleLoginVerify).toBeExisting();
    });
    it('should show modal stop the verification process after click back', async () => {
        await Anonymous.clickBtnBack();
        await expect(modal.titleModal).toBeExisting();
        await expect(modal.btnOk).toBeExisting();
        await expect(modal.btnCancel).toBeExisting();
    });
    it('should click close modal stop verify after click (x)', async () => {
        await modal.clickBtnClose();
    });
    it('should click close modal stop verify after click cancel', async () => {
        await Anonymous.clickBtnBack();
        await modal.clickBtnCancel();
    });
    it('should back page welcome after click button Ok', async () => {
        await Anonymous.clickBtnBack();
        await modal.clickBtnOk();
        await expect(Anonymous.pageWelcome).toBeExisting();
    });
    it('should input otp sms and login success', async () => {
        await Anonymous.enterPhoneNumber(VALID_NUMBER.phone);
        await Anonymous.startLogin();
        await Anonymous.startSendSms();
        await Anonymous.enterVerification(VALID_NUMBER.otp);
        await expect(LeftSideBar.logo).toBeExisting();
    });
});
