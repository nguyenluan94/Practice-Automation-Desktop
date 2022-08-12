import Anonymous from '../../pageobjects/login/anonymous';

const VALID_PHONE_NUMBER = '0977585797';
const UNVALID_CHAR_PHONE_NUMBER = 'abcdef';
const UNVALID_SPECHAR_PHONE_NUMBER = '@#$%&';
const FALSE_VERIFI_CODE = '175206';
const VERIFI_CODE = '000000';

describe('TEST ANONYMOUS LOGIN FLOWS', async () => {
    //Kiểm tra button Đăng nhập có disable hay không
    it('should disable login button', async () => {
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });

    it('should cant input', async () => {
        await Anonymous.enterPhoneNumber(UNVALID_CHAR_PHONE_NUMBER);
        // await expect(Anonymous.btnStartLogin).not.toBeDisabled();
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });
    it('should cant input', async () => {
        await Anonymous.enterPhoneNumber(UNVALID_SPECHAR_PHONE_NUMBER);
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
        await Anonymous.enterPhoneNumber(UNVALID_CHAR_PHONE_NUMBER);
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });
    it('should cant input', async () => {
        await Anonymous.enterPhoneNumber(UNVALID_SPECHAR_PHONE_NUMBER);
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
        await Anonymous.enterPhoneNumber(UNVALID_CHAR_PHONE_NUMBER);
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });
    it('should cant input', async () => {
        await Anonymous.enterPhoneNumber(UNVALID_SPECHAR_PHONE_NUMBER);
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
        await Anonymous.enterVerification(FALSE_VERIFI_CODE);
    });

    it('should process to verification step', async () => {
        await expect(Anonymous.loginVerifyError).toBeExisting();
    });

    it('should input otp sms ', async () => {
        await Anonymous.enterVerification(VERIFI_CODE);
    });
});
