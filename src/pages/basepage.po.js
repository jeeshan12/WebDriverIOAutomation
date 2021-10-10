/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class BasePage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page
    */
    open (url) {
        return browser.url(url);
    }
}
