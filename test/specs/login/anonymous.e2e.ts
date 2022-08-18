import { INVALID_NUMBER, VALID_NUMBER } from '../../data/login-anonymous/data.e2e';
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

    it('should enable login button after enter phone number', async () => {
        await Anonymous.enterPhoneNumber(VALID_NUMBER.phone);
        await expect(Anonymous.btnStartLogin).not.toBeDisabled();
    });

    it('should process to verification step', async () => {
        await Anonymous.startLogin();
        await expect(Anonymous.titleLoginVerify).toBeExisting();
    });
    it('should show modal stop the verification process', async () => {
        await Anonymous.showModal();
        await expect(Anonymous.btnVerifyBack).toBeExisting();
    });
    it('should title modal stop verify', async () => {
        await expect(Anonymous.modalVerify).toBeExisting();
    });
    it('should click close modal stop verify', async () => {
        await Anonymous.clickModalCancel();
    });
    it('should show modal stop the verification process', async () => {
        await Anonymous.showModal();
        await expect(Anonymous.btnVerifyBack).toBeExisting();
    });
    it('should title modal stop verify', async () => {
        await expect(Anonymous.modalVerify).toBeExisting();
    });
    it('should back page welcome', async () => {
        await Anonymous.clickModalOk();
    });
    it('should disable login button', async () => {
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });

    it('should enable login button after enter phone number ', async () => {
        await Anonymous.enterPhoneNumber(VALID_NUMBER.phone);
        await expect(Anonymous.btnStartLogin).not.toBeDisabled();
    });

    it('should process to verification step', async () => {
        await Anonymous.startLogin();
        await expect(Anonymous.titleLoginVerify).toBeExisting();
    });
    it('should enable sms otp', async () => {
        await Anonymous.startSendSms();
        await expect(Anonymous.titleLoginVerify).toBeExisting();
    });

    it('should input otp sms false', async () => {
        await Anonymous.enterVerification(INVALID_NUMBER.falseOtp);
    });

    it('should process to verification step', async () => {
        await expect(Anonymous.loginVerifyError).toBeExisting();
    });

    it('should input otp sms success', async () => {
        await Anonymous.enterVerification(VALID_NUMBER.otp);
        await expect(Anonymous.showLogoHalome).toBeExisting();
    });
    //Logout
    it('should click avatar in left sidebar and show profile ', async () => {
        await Anonymous.clickAbProfile();
        await expect(Anonymous.avatarProfile).toBeExisting();
    });
    it('should show modal logout and back profile after click cancel', async () => {
        await Anonymous.clickLogout();
        await expect(Anonymous.modalVerify).toBeExisting();
        await Anonymous.clickModalCancel();
        await expect(Anonymous.avatarProfile).toBeExisting();
    });
    it('should start logout and back page welcome', async () => {
        await Anonymous.clickLogout();
        await expect(Anonymous.modalVerify).toBeExisting();
        await Anonymous.clickModalOk();
        await expect(Anonymous.pageWelcome).toBeExisting();
    });
});
