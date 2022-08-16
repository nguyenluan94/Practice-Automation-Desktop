import Anonymous from '../../pageobjects/login/anonymous';
// import { VALID_PHONE_NUMBER } from "../../data/login-anonymous/data";

const VALID_PHONE_NUMBER = '0822016873';
const INVALID_CHAR_PHONE_NUMBER = 'abcdef';
const INVALID_SPECHAR_PHONE_NUMBER = '@#$%&';
const FALSE_VERIFY_CODE = '175206';
const VERIFY_CODE = '000000';

describe('TEST ANONYMOUS LOGIN FLOWS', async () => {
    it('should disable login button', async () => {
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });

    it('should disable login button after enter letter', async () => {
        await Anonymous.enterPhoneNumber(INVALID_CHAR_PHONE_NUMBER);
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });
    it('should disable login button after enter special character', async () => {
        await Anonymous.enterPhoneNumber(INVALID_SPECHAR_PHONE_NUMBER);
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });

    it('should enable login button after enter phone number', async () => {
        await Anonymous.enterPhoneNumber(VALID_PHONE_NUMBER);
        await expect(Anonymous.btnStartLogin).not.toBeDisabled();
    });

    it('should process to verification step', async () => {
        await Anonymous.startLogin();
        await expect(Anonymous.titleLoginVerify).toBeExisting();
    });
    //Quay lại
    it('should show modal stop the verification process', async () => {
        await Anonymous.showModal();
        await expect(Anonymous.btnVerifyBack).toBeExisting();
    });
    it('should title modal stop verify', async () => {
        await expect(Anonymous.modalVerify).toBeExisting();
    });
    it('should close modal stopverify', async () => {
        await Anonymous.showModalCancel();
    });
    it('should show modal stop the verification process', async () => {
        await Anonymous.showModal();
        await expect(Anonymous.btnVerifyBack).toBeExisting();
    });
    it('should title modal stop verify', async () => {
        await expect(Anonymous.modalVerify).toBeExisting();
    });
    it('should back welcome', async () => {
        await Anonymous.showModalOk();
    });
    it('should disable login button', async () => {
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });

    it('should cant input', async () => {
        await Anonymous.enterPhoneNumber(INVALID_CHAR_PHONE_NUMBER);
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });
    it('should cant input', async () => {
        await Anonymous.enterPhoneNumber(INVALID_SPECHAR_PHONE_NUMBER);
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });

    it('should enable login button after enter phone number', async () => {
        await Anonymous.enterPhoneNumber(VALID_PHONE_NUMBER);
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

    it('should show modal stop the verification process', async () => {
        await Anonymous.showModal();
        await expect(Anonymous.btnVerifyBack).toBeExisting();
    });
    it('should title modal stop verify', async () => {
        await expect(Anonymous.modalVerify).toBeExisting();
    });
    it('should close modal stopverify', async () => {
        await Anonymous.showModalCancel();
    });
    it('should show modal stop the verification process', async () => {
        await Anonymous.showModal();
        await expect(Anonymous.btnVerifyBack).toBeExisting();
    });
    it('should title modal stop verify', async () => {
        await expect(Anonymous.modalVerify).toBeExisting();
    });
    it('should back welcome', async () => {
        await Anonymous.showModalOk();
    });
    it('should disable login button', async () => {
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });

    it('should cant input', async () => {
        await Anonymous.enterPhoneNumber(INVALID_CHAR_PHONE_NUMBER);
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });
    it('should cant input', async () => {
        await Anonymous.enterPhoneNumber(INVALID_SPECHAR_PHONE_NUMBER);
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });

    it('should enable login button after enter phone number', async () => {
        await Anonymous.enterPhoneNumber(VALID_PHONE_NUMBER);
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

    it('should input otp sms ', async () => {
        await Anonymous.enterVerification(FALSE_VERIFY_CODE);
    });

    it('should process to verification step', async () => {
        await expect(Anonymous.loginVerifyError).toBeExisting();
    });

    it('should input otp sms ', async () => {
        await Anonymous.enterVerification(VERIFY_CODE);
    });
});
