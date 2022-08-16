import { INVALID_NUMBER } from '../../data/login-anonymous/data';
import { VALID_NUMBER } from '../../data/login-anonymous/data';
import Anonymous from '../../pageobjects/login/anonymous';

describe('TEST ANONYMOUS LOGIN FLOWS', async () => {
    it('should disable login button', async () => {
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });

    it('should disable login button after enter letter', async () => {
        await Anonymous.enterPhoneNumber(INVALID_NUMBER.letter);
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });
    it('should disable login button after enter special character', async () => {
        await Anonymous.enterPhoneNumber(INVALID_NUMBER.specialCharacter);
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });

    it('should enable login button after enter phone number', async () => {
        await Anonymous.enterPhoneNumber(VALID_NUMBER.randomNumber);
        await expect(Anonymous.btnStartLogin).not.toBeDisabled();
    });

    it('should process to verification step', async () => {
        await Anonymous.startLogin();
        await expect(Anonymous.titleLoginVerify).toBeExisting();
    });

    it('should input otp sms false', async () => {
        await Anonymous.enterVerification(INVALID_NUMBER.falseOtp);
    });

    it('should show login verify error', async () => {
        await expect(Anonymous.loginVerifyError).toBeExisting();
    });
    it('should input otp sms success', async () => {
        await Anonymous.enterVerification(VALID_NUMBER.otp);
    });
    it('should input name success', async () => {
        await Anonymous.enterInputName(VALID_NUMBER.name);
    });
    it('should login success after click button continue', async () => {
        await Anonymous.clickBtnContinue();
        await expect(Anonymous.showLogoHalome).toBeExisting();
    });
});
