const BasePage = require("./basepage.po");
class SearchResults extends BasePage {
  /**
   * define selectors using getter methods
   */
  get amazonBasicsLabel() {
    return $("h1 span.a-color-state");
  }

  get amazonBasicsCheckBoxLabel() {
    return $(`[aria-label="Amazon Basics"] label`);
  }

  get searchResultsLabel() {
    return $(`//span[contains(text(), 'results')]`);
  }

  get searchResults() {
    return $$(`span.a-size-base-plus`);
  }

  async clickAmazonBasicsCheckBox() {
    await this.amazonBasicsCheckBoxLabel.waitUntil(
      async function () {
        return !(await this.isSelected());
      },
      {
        timeout: 25000,
        timeoutMsg: "Wait for Loading icon to disappear",
      }
    );
    await this.amazonBasicsCheckBoxLabel.click();
  }

  async retreiveResults() {
    return await this.searchResultsLabel.getText();
  }

  async waitForResultsToLoad() {
    return  await browser.waitUntil(
      async () => {
        const elems = await this.searchResults;
        if (elems.length >= 1) {
          return false;
        }

        return true;
      },
      {
        timeoutMsg: "elements did not load",
      }
    );
  }

  async clickExpectedProductInTile(productName) {
    this.searchResults.forEach(async (eles) => {
        const txt = await eles.getText();
        if (txt === productName) {
            await eles.click();
            return false;
        }
    });
  }
}
module.exports = new SearchResults();
