const BACKSPACE = '\uE003';
export default class Page {
    open(path: string) {
        return browser.url(`${path}`);
    }
    async pressBackspace() {
        return browser.keys(BACKSPACE);
    }
}
