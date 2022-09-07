import { INVALID_NUMBER, VALID_ANONYMOUS_FIRST_TIME, VALID_NUMBER } from '../../../../data/login/halome';
import LeftSideBar from '../../../../element/left-side-bar/left-side-bar';
import modal from '../../../../element/modal/modal';
import profile from '../../../../element/profile/profile';
import loginByPhone from '../../../../pageobjects/account/login/halome/login-by-phone';

describe('TEST ENTER VERIFICATION CODE FLOWS', async () => {
    it('should enable button login after enter phone number', async () => {
        await loginByPhone.enterPhoneNumber(VALID_NUMBER.phone);
        await expect(loginByPhone.btnStartLogin).not.toBeDisabled();
    });

    it('should process to verification step', async () => {
        await loginByPhone.startLogin();
        await expect(loginByPhone.titleLoginVerify).toBeExisting();
    });
    it('should click Send verification code via SMS', async () => {
        await loginByPhone.startSendSms();
        await expect(loginByPhone.titleLoginVerify).toBeExisting();
    });
    it('should login false after input false otp', async () => {
        await loginByPhone.enterVerification(INVALID_NUMBER.otp);
        await expect(loginByPhone.titleVerifyError).toBeExisting();
    });
    it('should login false after enter letter in OTP input', async () => {
        await loginByPhone.enterVerification(INVALID_NUMBER.letter);
        await expect(loginByPhone.titleLoginVerify).toBeExisting();
    });
    it('should login false after enter special character in OTP input', async () => {
        await loginByPhone.enterVerification(INVALID_NUMBER.specialCharacter);
        await expect(loginByPhone.titleLoginVerify).toBeExisting();
    });
    it('should login false after enter space in OTP input', async () => {
        await loginByPhone.enterVerification(INVALID_NUMBER.space);
        await expect(loginByPhone.titleLoginVerify).toBeExisting();
    });
    it('should login false after enter in OTP input < 6 number', async () => {
        await loginByPhone.enterVerification(INVALID_NUMBER.otpFalseLength);
        await expect(loginByPhone.titleLoginVerify).toBeExisting();
    });
    it('should login success', async () => {
        await loginByPhone.enterVerification(VALID_NUMBER.otp);
        await LeftSideBar.clickAppbarProfile();
        await expect(profile.avatarProfile).toBeExisting();
    });
});
