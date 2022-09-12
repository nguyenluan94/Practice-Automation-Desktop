import { INVALID_NUMBER, VALID_ANONYMOUS_FIRST_TIME, VALID_NUMBER } from '../../../../data/login/halome';
import LeftSideBar from '../../../../element/left-side-bar/left-side-bar';
import loginByPhone from '../../../../pageobjects/account/login/halome/login-by-phone';

describe('TEST ANONYMOUS FIRST TIME LOGIN FLOWS', async () => {
    it('should disable login button', async () => {
        await expect(loginByPhone.btnStartLogin).toBeDisabled();
    });
    it('should disable button login after enter letter', async () => {
        await loginByPhone.enterPhoneNumber(INVALID_NUMBER.letter);
        await expect(loginByPhone.btnStartLogin).toBeDisabled();
    });
    it('should disable button login after enter special character', async () => {
        await loginByPhone.enterPhoneNumber(INVALID_NUMBER.specialCharacter);
        await expect(loginByPhone.btnStartLogin).toBeDisabled();
    });

    it('should enable button login after enter phone number', async () => {
        await loginByPhone.enterPhoneNumber(VALID_ANONYMOUS_FIRST_TIME.phone);
        await expect(loginByPhone.btnStartLogin).not.toBeDisabled();
    });

    it('should process to verification step', async () => {
        await loginByPhone.startLogin();
        await expect(loginByPhone.titleLoginVerify).toBeExisting();
    });
    it('should login success after input valid otp', async () => {
        await loginByPhone.enterVerification(VALID_NUMBER.otp);
    });
    it('should button Continue enable when input name empty', async () => {
        await expect(loginByPhone.btnContinue).not.toBeDisabled();
    });
    it('should input name success', async () => {
        await loginByPhone.enterInputName(VALID_NUMBER.name);
    });
    it('should login success after click button continue', async () => {
        await loginByPhone.clickBtnContinue();
        await expect(LeftSideBar.appbarProfile).toBeExisting();
    });
});
