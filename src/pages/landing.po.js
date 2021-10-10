const BasePage = require('./basepage.po');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('h2=AmazonBasics'); }
    get inputPassword () { return $('#password'); }
    get btnSubmit () { return $('button[type="submit"]'); }


    get amazonBasicsLabel () { return $('h2=AmazonBasics'); }
    get seeMoreLink () { return $('div.a-cardui-footer [href*=amazonbasics]'); }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async clickSeeMoreLink() {
        await this.seeMoreLink.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('https://www.amazon.com');
    }
}

module.exports = new LandingPage();
