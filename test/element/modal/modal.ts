class modal {
    get btnOk() {
        return $('button[id="modal-button-ok"]');
    }
    get btnCancel() {
        return $('button[id="modal-button-cancel"]');
    }
    get titleModal() {
        return $('#modal-body-content');
    }
    get btnClose() {
        return $('#modal-icon-close');
    }
    async clickBtnClose() {
        return this.btnClose.click();
    }
    async clickBtnOk() {
        return this.btnOk.click();
    }
    async clickBtnCancel() {
        return this.btnCancel.click();
    }
    async showModal() {
        return $('button[id="modal-button-ok"]');
        return $('button[id="modal-button-cancel"]');
        return $('#modal-body-content');
        return $('#modal-icon-close');
    }
}
export default new modal();