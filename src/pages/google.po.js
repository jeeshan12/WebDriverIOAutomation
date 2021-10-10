const BasePage = require("./basepage.po");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class GooglePage extends BasePage {
  /**
   * define selectors using getter methods
   */
  get inputSearchBox() {
    return $('[name="q"]');
  }

  get udemyLink() {
    return $("a*=udemy.com");
  }

  async searchText(text) {
    await this.inputSearchBox.setValue(text);
    await browser.keys("Enter");
  }

  async clickUdemyLink() {
      await this.udemyLink.click();
  }

  /**
   * overwrite specifc options to adapt it to page object
   */
  open() {
    return super.open("https://www.google.com/");
  }
}

module.exports = new GooglePage();
