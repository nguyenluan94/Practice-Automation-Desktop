import { INVALID_LOGIN_HAHALOLO, INVALID_PIN, VALID_LOGIN_HAHALOLO } from '../../../../data/login/hahalolo';
import LeftSideBar from '../../../../element/left-side-bar/left-side-bar';
import loginByHahalolo from '../../../../pageobjects/account/login/hahalolo/login-by-hahalolo';

let windows;

describe('TEST LOGIN HAHALOLO FLOWS', async () => {
    it('should enable Login Hahalolo button', async () => {
        await expect(loginByHahalolo.btnStartLogin).toBeEnabled();
    });

    it('should open Hahalolo page', async () => {
        await loginByHahalolo.startLogin();
        windows = await loginByHahalolo.getAllWindows();
        await browser.switchToWindow(windows[1]);
        await expect(loginByHahalolo.pageLoginHahalolo).toBeExisting();
    });

    it('should login failed when username and password are incorrect', async () => {
        await loginByHahalolo.enterUsername(INVALID_LOGIN_HAHALOLO.username);
        await loginByHahalolo.enterPassword(INVALID_LOGIN_HAHALOLO.password);
        await loginByHahalolo.clickLoginHalo();
        await expect(loginByHahalolo.loginHaloError).toBeExisting();
    });

    it('should close Hahalolo page when username and password are correct', async () => {
        await loginByHahalolo.enterUsername(VALID_LOGIN_HAHALOLO.username);
        await loginByHahalolo.enterPassword(VALID_LOGIN_HAHALOLO.password);
        await loginByHahalolo.clickLoginHalo();
        await browser.switchToWindow(windows[0]);
        await expect(loginByHahalolo.pageLoginHahalolo).not.toBeExisting();
    });

    it('should open page verify account', async () => {
        await expect(loginByHahalolo.titleLoginHahalolo).toBeExisting();
    });

    it('should open Hahalolo page after click Not you? Click here to change your account', async () => {
        await loginByHahalolo.clickChangeAccount();
        windows = await loginByHahalolo.getAllWindows();
        await browser.switchToWindow(windows[1]);
        await expect(loginByHahalolo.pageLoginHahalolo).toBeExisting();
    });

    it('should click Continue after change account and open input PIN page', async () => {
        await loginByHahalolo.enterUsername(VALID_LOGIN_HAHALOLO.username);
        await loginByHahalolo.enterPassword(VALID_LOGIN_HAHALOLO.password);
        await loginByHahalolo.clickLoginHalo();
        windows = await loginByHahalolo.getAllWindows();
        await browser.switchToWindow(windows[0]);
        await expect(loginByHahalolo.titleLoginHahalolo).toBeExisting();
        await loginByHahalolo.clickContinue();
        await expect(loginByHahalolo.titleEnterPIN).toBeExisting();
    });

    it('should login failed after enter the letter in the input PIN ', async () => {
        await loginByHahalolo.enterPIN(INVALID_PIN.letter);
        await expect(loginByHahalolo.titleEnterPIN).toBeExisting();
    });

    it('should login failed after enter the special characters in the input PIN ', async () => {
        await loginByHahalolo.enterPIN(INVALID_PIN.specialCharacter);
        await expect(loginByHahalolo.titleEnterPIN).toBeExisting();
    });

    it('should login failed after enter the space in the input PIN ', async () => {
        await loginByHahalolo.enterPIN(INVALID_PIN.space);
        await expect(loginByHahalolo.titleEnterPIN).toBeExisting();
    });

    it('should show error after enter invalid PIN', async () => {
        await loginByHahalolo.enterPIN(INVALID_PIN.pin);
        await expect(loginByHahalolo.errorPIN).toBeExisting();
    });

    it('should login success after enter valid PIN', async () => {
        await loginByHahalolo.enterPIN(VALID_LOGIN_HAHALOLO.pin);
        await expect(LeftSideBar.appbarProfile).toBeExisting();
    });
});
