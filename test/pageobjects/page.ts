const BACKSPACE = '\uE003';
export default class Page {
    open(path: string) {
        return browser.url(`${path}`);
    }
    async getAllWindows() {
        return browser.getWindowHandles();
    }
    async backspace() {
        return browser.keys(BACKSPACE);
    }
}
