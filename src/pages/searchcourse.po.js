const BasePage = require("./basepage.po");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchCoursePage extends BasePage {
  /**
   * define selectors using getter methods
   */
  get headerLabel() {
    return $("h1");
  }

  get mostRelevantSelect() {
    return $(`select.udlite-select`);
  }

  get highestRatedLabel() {
    return $(`div[class*='highest-rated']`);
  }

  get courseTitleLinks() {
    return $(`[class*='course-card--course-title']`);
  }

  get loadingSpinner() {
    return $(`[class*='panel--loading']`);
  }

  get totalResults() {
    return $(`[class*='filter-panel--item-count']`);
  }

  async selectMostRelevantCourse(option) {
    await this.mostRelevantSelect.selectByAttribute("value", option);
  }

  async clickUdemyLink() {
    await this.udemyLink.click();
  }

  async getHighestRatedTitleCourseText() {
    await this.loadingSpinner.waitUntil(
      async function () {
        return !(await this.isExisting());
      },
      {
        timeout: 15000,
        timeoutMsg: "Wait for Loading icon to disappear",
      }
    );
    return await this.courseTitleLinks.getText();
  }

  async clickHighestRatedCourseTitle() {
    await this.courseTitleLinks.click();
  }

  async getHeaderLabel() {
    return await this.headerLabel.getText();
  }

  async retreiveSearchedResults() {
    await this.loadingSpinner.waitUntil(
      async function () {
        return !(await this.isExisting());
      },
      {
        timeout: 15000,
        timeoutMsg: "Wait for Loading icon to disappear",
      }
    );
    return await this.totalResults.getText();
  }
}

module.exports = new SearchCoursePage();
