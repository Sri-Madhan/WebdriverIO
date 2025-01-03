const { $ } = require('@wdio/globals')
const BaseClass = require('../common/base.class');

/**
 * sub page containing specific selectors and methods for a specific page
 */

class LoginPage extends BaseClass {

    async getPageTitle(){
        return await super.getElementText("LoginPage","title");
    }

    async setEmail(email) {
        await super.setElementValue("LoginPage","email",email);
    }

    async setPassword(password) {
        await super.setElementValue("LoginPage", "password", password);
    }

    async clickLoginBtn() {
        await super.clickElement("LoginPage","submit");
    }
    
    async login (email, password) {
        await this.setEmail(email);
        await this.setPassword(password);
        await this.clickLoginBtn();
    }

}

module.exports = new LoginPage();
