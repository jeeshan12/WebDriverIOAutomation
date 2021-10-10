const BasePage = require("./basepage.po");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class UdemyPage extends BasePage {
  /**
   * define selectors using getter methods
   */
  get headerLabel() {
    return $('h1');
  }

  get inputSearchBox() {
    return $(`[placeholder="Search for anything"]`);
  }

  async searchCourse(course) {
    await this.inputSearchBox.setValue(course);
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

module.exports = new UdemyPage();
