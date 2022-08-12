import Anonymous from '../../pageobjects/login/anonymous';

const VALID_PHONE_NUMBER = '0977585797';

describe('TEST ANONYMOUS LOGIN FLOWS', async () => {
    it('should disable login button', async () => {
        await Anonymous.open('https://sb.halome.dev/welcome');
        await browser.pause(2000)
        // await expect(Anonymous.btnStartLogin).toBeDisabled();
    });

    // it('should enable login button after enter phone number', async () => {
    //     await Anonymous.enterPhoneNumber(VALID_PHONE_NUMBER);
    //     await expect(Anonymous.btnStartLogin).not.toBeDisabled();
    // });
    //
    // it('should process to verification step', async () => {
    //     await Anonymous.startLogin();
    //     await expect(Anonymous.titleLoginVerify).toBeExisting();
    // });
});
