class LeftSidebar {
    get logo() {
        return $('#appbar-logo');
    }

    get appbarProfile() {
        return $('#appbar-profile');
    }

    async clickAppbarProfile() {
        return this.appbarProfile.click();
    }
}

export default new LeftSidebar();
