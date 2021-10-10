const BasePage = require("./basepage.po");

class ProductPage extends BasePage {
  get productName() {
    return $("#productTitle");
  }

  get addToCart() {
      return $('#add-to-cart-button');
  }

  get addedToCartLabel() {
      return $(`div#attachDisplayAddBaseAlert h4`);
  }

  get cartItemsLabel() {
      return $('#attach-accessory-cart-total-string')
  }

  async retreiveProductName() {
    return await this.productName.getText();
  }

  async clickAddToCartButton() {
      await this.addToCart.click();
  }
}

module.exports = new ProductPage();
