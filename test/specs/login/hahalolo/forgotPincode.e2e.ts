import { INVALID_NUMBER, VALID_NUMBER } from '../../../data/login/hahalolo';
import Hahalolo from '../../../pageobjects/login/hahalolo/forgotPincode';
import Page from '../../../pageobjects/page';

let windows;
describe('TEST FORGOT PIN CODE FLOWS', async () => {
    it('should click button login hahalolo in page welcome', async () => {
        await expect(Hahalolo.pageWelcome).toBeExisting();
        await Hahalolo.clickBtnLoginHalo();
        windows = await browser.getWindowHandles();
        await browser.switchToWindow(windows[1]);
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
    it('should login success', async () => {
        await browser.switchToWindow(windows[0]);
        await expect(Hahalolo.tittleLoginHalo).toBeExisting();
        await Hahalolo.clickBtnCont();
        await expect(Hahalolo.tittleOtp).toBeExisting();
    });
    it('should forgot pin code, cancel 3 times and show error', async () => {
        await Hahalolo.clickForgotOtp();
        await expect(Hahalolo.titleForgotOtp).toBeExisting();
        await Hahalolo.clickBtnCancel();
        await expect(Hahalolo.tittleOtp).toBeExisting();
        await Hahalolo.clickForgotOtp();
        await expect(Hahalolo.titleForgotOtp).toBeExisting();
        await Hahalolo.clickBtnCancel();
        await expect(Hahalolo.tittleOtp).toBeExisting();
        await Hahalolo.clickForgotOtp();
        await expect(Hahalolo.titleForgotOtp).toBeExisting();
        await Hahalolo.clickBtnCancel();
        await expect(Hahalolo.tittleOtp).toBeExisting();
        await Hahalolo.clickForgotOtp();
        await expect(Hahalolo.errorPincode).toBeExisting();
    });
});
