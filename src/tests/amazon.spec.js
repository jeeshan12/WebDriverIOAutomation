const LandingPage = require("../pages/landing.po");
const SearchResults = require("../pages/seachresults.po");
const ProductPage = require("../pages/product.po");

describe("Adding Product to a Cart", () => {
  const productName =
    'Amazon Basics Lightweight Super Soft Easy Care Microfiber Bed Sheet Set with 14" Deep Pockets - Queen, Dark Gray';
  it("User will be able to add products to a cart", async () => {
    await LandingPage.open();
    await expect(LandingPage.amazonBasicsLabel).toBeExisting();
    await expect(LandingPage.amazonBasicsLabel).toHaveTextContaining(
      "AmazonBasics"
    );
    await LandingPage.clickSeeMoreLink();
    await expect(SearchResults.amazonBasicsLabel).toBeExisting();
    await expect(SearchResults.amazonBasicsLabel).toHaveTextContaining(
      "amazonbasics"
    );
    const resultsBeforeFilter = await SearchResults.retreiveResults();
    await SearchResults.clickAmazonBasicsCheckBox();
    const resultsAfterFilter = await SearchResults.retreiveResults();
    await expect(resultsBeforeFilter).not.toEqual(resultsAfterFilter);
    SearchResults.clickExpectedProductInTile(productName);
    expect(await ProductPage.retreiveProductName()).toBe(productName);
    await ProductPage.clickAddToCartButton();
    await expect(ProductPage.addedToCartLabel).toHaveTextContaining(
      "Added to Cart"
    );
    await expect(ProductPage.cartItemsLabel).toHaveTextContaining(
      "Cart subtotal (1 item)"
    );
  });
});
