import { VALID_NUMBER } from '../../data/login/anonymous';
import Anonymous from '../../pageobjects/logout/anonymous';

describe('TEST ANONYMOUS LOGOUT FLOWS', async () => {
    it('should enable login button after enter phone number', async () => {
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
    it('should input otp sms success', async () => {
        await Anonymous.enterVerification(VALID_NUMBER.otp);
        await expect(Anonymous.showLogoHalome).toBeExisting();
    });
    it('should click avatar in left sidebar and show profile ', async () => {
        await Anonymous.clickAbProfile();
        await expect(Anonymous.avatarProfile).toBeExisting();
    });
    it('should show modal logout and back profile after click cancel and click close', async () => {
        await Anonymous.clickLogout();
        await expect(Anonymous.modalVerify).toBeExisting();
        await Anonymous.clickBtnClose();
        await expect(Anonymous.avatarProfile).toBeExisting();
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
