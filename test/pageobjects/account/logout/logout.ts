import LeftSideBar from '../../../element/left-side-bar/left-side-bar';
import modal from '../../../element/modal/modal';

class Logout {
    get btnLogout() {
        return $('#profile-content-button-logout');
    }

    async clickBtnLogout() {
        return this.btnLogout.click();
    }

    async logout() {
        await LeftSideBar.clickAppbarProfile();
        await this.clickBtnLogout();
        await modal.clickBtnOk();
    }
}
export default new Logout();
