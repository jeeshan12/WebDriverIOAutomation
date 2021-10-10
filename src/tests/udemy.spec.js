const GooglePage = require("../pages/google.po");
const UdemyPage = require('../pages/udemy.po');
const SearchCoursePage = require('../pages/searchcourse.po');
describe("Search for a Automation Course in Udemy", () => {
  it("Search for Cucumber BDD Course", async () => {
    await GooglePage.open();
    await GooglePage.searchText('Test Automation Learning');
    await GooglePage.clickUdemyLink();
    await expect(UdemyPage.headerLabel).toBeExisting();
    await expect(UdemyPage.headerLabel).toHaveTextContaining(
      "Automation Testing Courses"
    );
    await UdemyPage.searchCourse('BDD with cucumber');
    await expect(SearchCoursePage.headerLabel).toBeExisting();
    await expect(SearchCoursePage.headerLabel).toHaveTextContaining(
      `results for “BDD with cucumber”`
    );
    const totalResultsBeforeFilter = await SearchCoursePage.retreiveSearchedResults();
    await SearchCoursePage.selectMostRelevantCourse('highest-rated');
    expect(await SearchCoursePage.retreiveSearchedResults()).not.toEqual(totalResultsBeforeFilter);
    const courseText = await SearchCoursePage.getHighestRatedTitleCourseText();
    await SearchCoursePage.clickHighestRatedCourseTitle();
    expect(await SearchCoursePage.getHeaderLabel()).toBe(courseText);
  });
});
