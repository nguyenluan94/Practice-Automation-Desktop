import { INVALID_NUMBER, VALID_NUMBER } from '../../../data/login/hahalolo';
import Hahalolo from '../../../pageobjects/login/hahalolo/hahalolo';

let windows;
describe('TEST HAHALOLO LOGIN FLOWS', async () => {
    it('should click button login hahalolo in page welcome', async () => {
        await expect(Hahalolo.pageWelcome).toBeExisting();
        await Hahalolo.clickBtnLoginHalo();
        windows = await browser.getWindowHandles();
        await browser.switchToWindow(windows[1]);
    });
    it('should input account and password false', async () => {
        await expect(Hahalolo.pageLoginHalo).toBeExisting();
        await Hahalolo.inputAccount(INVALID_NUMBER.account);
        await Hahalolo.inputPassword(INVALID_NUMBER.password);
        await Hahalolo.starLogin();
        await expect(Hahalolo.loginError).toBeExisting();
    });
    it('should input account and password', async () => {
        await expect(Hahalolo.pageLoginHalo).toBeExisting();
        await Hahalolo.inputAccount(VALID_NUMBER.account);
        await Hahalolo.inputPassword(VALID_NUMBER.password);
        await Hahalolo.starLogin();
    });
    it('should login hahalolo success', async () => {
        await browser.switchToWindow(windows[0]);
        await expect(Hahalolo.tittleLoginHalo).toBeExisting();
    });
    it('should change account after click Not you? Click here to change your account', async () => {
        await Hahalolo.clickChangeAcc();
        windows = await browser.getWindowHandles();
        await browser.switchToWindow(windows[1]);
    });
    it('should input account and password again', async () => {
        await expect(Hahalolo.pageLoginHalo).toBeExisting();
        await Hahalolo.inputAccount(VALID_NUMBER.account2);
        await Hahalolo.inputPassword(VALID_NUMBER.password2);
        await Hahalolo.starLogin();
    });
    it('should login success and next page input otp', async () => {
        await browser.switchToWindow(windows[0]);
        await expect(Hahalolo.tittleLoginHalo).toBeExisting();
    });
    it('should click continue and open input otp', async () => {
        await Hahalolo.clickBtnCont();
        await expect(Hahalolo.tittleOtp).toBeExisting();
    });
    it('should login false after input otp invalid', async () => {
        await Hahalolo.inputOtp(INVALID_NUMBER.otp);
        await expect(Hahalolo.errorOtp).toBeExisting();
    });
    it('should login false after input letter', async () => {
        await Hahalolo.inputOtp(INVALID_NUMBER.letter);
        await expect(Hahalolo.tittleOtp).toBeExisting();
    });
    it('should login false after input specialCharacter', async () => {
        await Hahalolo.inputOtp(INVALID_NUMBER.specialCharacter);
        await expect(Hahalolo.tittleOtp).toBeExisting();
    });
    it('should login success', async () => {
        await Hahalolo.inputOtp(VALID_NUMBER.otp);
        await Hahalolo.logoHalome.waitForDisplayed({ timeout: 10000 });
        await expect(Hahalolo.logoHalome).toBeExisting();
    });
});
