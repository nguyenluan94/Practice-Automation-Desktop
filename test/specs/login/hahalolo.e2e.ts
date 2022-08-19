import { INVALID_NUMBER, VALID_NUMBER } from '../../data/login/hahalolo';
import Hahalolo from '../../pageobjects/login/hahalolo';
import Page from '../../pageobjects/page';

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
    it('should change account', async () => {
        await Hahalolo.clickChangeAcc();
        windows = await browser.getWindowHandles();
        await browser.switchToWindow(windows[1]);
    });
    it('should input account and password again', async () => {
        await expect(Hahalolo.pageLoginHalo).toBeExisting();
        await Hahalolo.inputAccount(VALID_NUMBER.account);
        await Hahalolo.inputPassword(VALID_NUMBER.password);
        await Hahalolo.starLogin();
    });
    it('should login success', async () => {
        await browser.switchToWindow(windows[0]);
        await expect(Hahalolo.tittleLoginHalo).toBeExisting();
        await Hahalolo.clickBtnCont();
    });
});
