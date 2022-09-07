import LeftSideBar from '../../../element/left-side-bar/left-side-bar';
import modal from '../../../element/modal/modal';
import LoginByPhone from '../../../pageobjects/account/login/halome/login-by-phone';
import loginByPhone from '../../../pageobjects/account/login/halome/login-by-phone';
import logout from '../../../pageobjects/account/logout/logout';
import myprofile from '../../../pageobjects/account/myprofile/myprofile';

describe('TEST ANONYMOUS LOGOUT FLOWS', async () => {
    before(async () => {
        await LoginByPhone.loginHalome();
    });
    it('should login success', async () => {
        await expect(LeftSideBar.logo).toBeExisting();
    });
    it('should open profile after click avatar', async () => {
        await LeftSideBar.clickAppbarProfile();
        await expect(myprofile.displayName).toBeExisting();
    });
    it('should click logout and show modal logout', async () => {
        await logout.clickBtnLogout();
        await expect(modal.titleModal).toBeExisting();
        await expect(modal.btnCancel).toBeExisting();
        await expect(modal.btnOk).toBeExisting();
        await expect(modal.btnClose).toBeExisting();
    });
    it('should close modal logout after click button (x)', async () => {
        await modal.clickBtnClose();
        await expect(myprofile.displayName).toBeExisting();
    });
    it('should close modal logout after click button Cancel', async () => {
        await logout.clickBtnLogout();
        await modal.clickBtnClose();
        await expect(myprofile.displayName).toBeExisting();
    });
    it('should logout success after click button OK', async () => {
        await logout.clickBtnLogout();
        await modal.clickBtnOk();
        await expect(loginByPhone.pageWelcome).toBeExisting();
    });
});
