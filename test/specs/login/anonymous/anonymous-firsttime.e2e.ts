import { INVALID_NUMBER, VALID_ANONYMOUS_FIRST_TIME, VALID_NUMBER } from '../../../data/login/anonymous';
import Anonymous from '../../../pageobjects/login/anonymous';

describe('TEST ANONYMOUS FIRST TIME LOGIN FLOWS', async () => {
    it('should disable login button', async () => {
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });
    it('should disable button login after enter letter', async () => {
        await Anonymous.enterPhoneNumber(INVALID_NUMBER.letter);
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });
    it('should disable button login after enter special character', async () => {
        await Anonymous.enterPhoneNumber(INVALID_NUMBER.specialCharacter);
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });

    it('should enable button login after enter phone number', async () => {
        await Anonymous.enterPhoneNumber(VALID_ANONYMOUS_FIRST_TIME.phone);
        await expect(Anonymous.btnStartLogin).not.toBeDisabled();
    });

    it('should process to verification step', async () => {
        await Anonymous.startLogin();
        await expect(Anonymous.titleLoginVerify).toBeExisting();
    });

    it('should login false after input invalid otp', async () => {
        await Anonymous.enterVerification(INVALID_NUMBER.otp);
    });

    it('should show login verify error', async () => {
        await expect(Anonymous.loginVerifyError).toBeExisting();
    });
    it('should login success after input valid otp', async () => {
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
