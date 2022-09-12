import { VALID_LOGIN_HAHALOLO } from '../../../../data/login/hahalolo';
import leftSideBar from '../../../../element/left-side-bar/left-side-bar';
import loginByHahalolo from '../../../../pageobjects/account/login/hahalolo/login-by-hahalolo';
import logout from '../../../../pageobjects/account/logout/logout';

describe('TEST LOGGED INTO AN ACCOUNT AT HAHALOLO FLOWS', async () => {
    before(async () => {
        await loginByHahalolo.loginHahalolo();
        await logout.logout();
    });

    after(async () => {
        await logout.logout();
    });

    it('should open account verification page', async () => {
        await loginByHahalolo.startLogin();
        await expect(loginByHahalolo.titleLoginHahalolo).toBeExisting();
        await expect(loginByHahalolo.btnContinue).toBeEnabled();
        await loginByHahalolo.clickContinue();
    });

    it('should login success', async () => {
        await loginByHahalolo.enterPIN(VALID_LOGIN_HAHALOLO.pin);
        await expect(leftSideBar.appbarProfile).toBeExisting();
    });
});
