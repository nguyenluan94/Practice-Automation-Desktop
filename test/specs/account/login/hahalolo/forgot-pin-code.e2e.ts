import { INVALID_PIN, VALID_LOGIN_HAHALOLO } from '../../../../data/login/hahalolo';
import leftSideBar from '../../../../element/left-side-bar/left-side-bar';
import forgotPinCode from '../../../../pageobjects/account/login/hahalolo/forgot-pin-code';
import loginByHahalolo from '../../../../pageobjects/account/login/hahalolo/login-by-hahalolo';
import logout from '../../../../pageobjects/account/logout/logout';

describe('TEST FORGOT PIN CODE FLOWS', async () => {
    before(async () => {
        await loginByHahalolo.loginHahalolo();
        await logout.logout();
        await loginByHahalolo.startLogin();
        await loginByHahalolo.clickContinue();
    });

    it('should open Enter PIN Code page ', async () => {
        await expect(loginByHahalolo.titleEnterPIN).toBeExisting();
    });

    it('should comeback Enter PIN page after click Back', async () => {
        await forgotPinCode.clickForgotPIN();
        await expect(forgotPinCode.btnConfirm).toBeExisting();
        await loginByHahalolo.clickBack();
        await expect(loginByHahalolo.titleEnterPIN).toBeExisting();
    });

    it('should show error sent too many requests after click Forgot PIN 4 times)', async () => {
        await forgotPinCode.clickForgotPIN();
        await forgotPinCode.clickCancel();

        await forgotPinCode.clickForgotPIN();
        await forgotPinCode.clickCancel();

        await forgotPinCode.clickForgotPIN();
        await expect(forgotPinCode.errorNoticeManyRequests).toBeExisting();
        await loginByHahalolo.enterPIN(VALID_LOGIN_HAHALOLO.pin);
        await expect(leftSideBar.logo).toBeExisting();
        await logout.logout();
        await loginByHahalolo.startLogin();
        await loginByHahalolo.clickContinue();
    });

    it('should open Enter verification code after click Forgot PIN ', async () => {
        await forgotPinCode.clickForgotPIN();
        await expect(forgotPinCode.titleOtp).toBeExisting();
        await expect(forgotPinCode.btnResend).not.toBeExisting();
        await expect(forgotPinCode.btnResendDisable).toBeExisting();
        await expect(forgotPinCode.resendOtpAndTimer).toBeExisting();
    });

    it('should disable button confirm ', async () => {
        await expect(forgotPinCode.btnConfirm).toBeDisabled();
    });

    it('should comeback Enter PIN page after click Cancel', async () => {
        await forgotPinCode.clickCancel();
        await expect(loginByHahalolo.titleEnterPIN).toBeExisting();
    });

    it('should disable confirm button after enter special characters into input OTP', async () => {
        await forgotPinCode.clickForgotPIN();
        await forgotPinCode.enterOtp(INVALID_PIN.specialCharacter);
        await expect(forgotPinCode.btnConfirm).toBeDisabled();
    });

    it('should disable confirm button after enter letter into input OTP', async () => {
        await forgotPinCode.enterOtp(INVALID_PIN.letter);
        await expect(forgotPinCode.btnConfirm).toBeDisabled();
    });

    it('should disable confirm button after enter space into input OTP', async () => {
        await forgotPinCode.enterOtp(INVALID_PIN.space);
        await expect(forgotPinCode.btnConfirm).toBeDisabled();
    });

    it('should show error notice after enter OTP false', async () => {
        await forgotPinCode.enterOtp(INVALID_PIN.pin);
        await expect(forgotPinCode.btnConfirm).toBeEnabled();
        await forgotPinCode.clickConfirm();
        await expect(forgotPinCode.errorNoticeOtp).toBeExisting();
    });

    it('should open Reset PIN page after enter OTP true', async () => {
        await forgotPinCode.enterOtp(INVALID_PIN.pin);
        await expect(forgotPinCode.btnConfirm).toBeEnabled();
        await forgotPinCode.clickConfirm();
    });

    it('should login success', async () => {
        await loginByHahalolo.clickBack();
        await loginByHahalolo.enterPIN(VALID_LOGIN_HAHALOLO.pin);
        await expect(leftSideBar.logo).toBeExisting();
    });
});
