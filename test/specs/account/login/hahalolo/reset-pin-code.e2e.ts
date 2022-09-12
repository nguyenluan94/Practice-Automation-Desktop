import { INVALID_PIN, VALID_LOGIN_HAHALOLO } from '../../../../data/login/hahalolo';
import { VALID_NUMBER } from '../../../../data/login/halome';
import leftSideBar from '../../../../element/left-side-bar/left-side-bar';
import forgotPinCode from '../../../../pageobjects/account/login/hahalolo/forgot-pin-code';
import loginByHahalolo from '../../../../pageobjects/account/login/hahalolo/login-by-hahalolo';
import resetPinCode from '../../../../pageobjects/account/login/hahalolo/reset-pin-code';

describe('TEST RESET PIN FLOWS', async () => {
    before(async () => {
        await loginByHahalolo.loginHahalolo(false);
        await forgotPinCode.clickForgotPIN();
        await forgotPinCode.enterOtp(VALID_NUMBER.otp);
        await forgotPinCode.clickConfirm();
    });

    it('should open Reset PIN page', async () => {
        await expect(resetPinCode.titleResetPIN).toBeExisting();
    });

    it('should save button disable ', async () => {
        await expect(resetPinCode.btnSave).toBeDisabled();
    });

    it('should save button disable when enter letter in the input PIN', async () => {
        await resetPinCode.enterPIN(INVALID_PIN.letter);
        await expect(resetPinCode.btnSave).toBeDisabled();
    });

    it('should save button disable when enter letter in the input confirm PIN', async () => {
        await resetPinCode.reEnterPIN(INVALID_PIN.letter);
        await expect(resetPinCode.btnSave).toBeDisabled();
    });
    it('should save button disable when enter space in the input PIN', async () => {
        await resetPinCode.enterPIN(INVALID_PIN.space);
        await expect(resetPinCode.btnSave).toBeDisabled();
    });

    it('should save button disable when enter space in the input confirm PIN', async () => {
        await resetPinCode.reEnterPIN(INVALID_PIN.space);
        await expect(resetPinCode.btnSave).toBeDisabled();
    });

    it('should disable save button when enter special characters in the input PIN', async () => {
        await resetPinCode.enterPIN(INVALID_PIN.specialCharacter);
        await expect(resetPinCode.btnSave).toBeDisabled();
    });

    it('should disable save button when enter special characters in the input confirm PIN', async () => {
        await resetPinCode.reEnterPIN(INVALID_PIN.specialCharacter);
        await expect(resetPinCode.btnSave).toBeDisabled();
    });

    it('should show error notice when the PIN is different from the confirmation PIN', async () => {
        await resetPinCode.enterPIN(VALID_LOGIN_HAHALOLO.pin);
        await resetPinCode.reEnterPIN(INVALID_PIN.pin);
        await expect(resetPinCode.btnSave).toBeDisabled();
        await expect(resetPinCode.errorNoticeSetPIN).toBeExisting();
    });

    it('should disable save button when enter PIN less than 6', async () => {
        await resetPinCode.enterPIN(INVALID_PIN.pinFalseLength);
        await resetPinCode.reEnterPIN(INVALID_PIN.pin);
        await expect(resetPinCode.btnSave).toBeDisabled();
    });

    it('should enable save button when the PIN same as confirmation PIN', async () => {
        await resetPinCode.enterPIN(VALID_LOGIN_HAHALOLO.pin);
        await resetPinCode.reEnterPIN(VALID_LOGIN_HAHALOLO.pin);
        await expect(resetPinCode.btnSave).toBeEnabled();
    });

    it('should open Enter PIN page', async () => {
        await resetPinCode.clickSave();
        await expect(loginByHahalolo.titleEnterPIN).toBeExisting();
    });

    it('should login success', async () => {
        await loginByHahalolo.enterPIN(VALID_LOGIN_HAHALOLO.pin);
        await expect(leftSideBar.logo).toBeExisting();
    });
});
