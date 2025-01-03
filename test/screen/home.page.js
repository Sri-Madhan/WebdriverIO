const { $, browser } = require('@wdio/globals')
const BaseClass = require('../common/base.class');

/**
 * sub page containing specific selectors and methods for a specific page
 */

class HomePage extends BaseClass {

    async getPageTitle(params) {
        //return await (await super.findByXPath(ob.HomePage.description[process.env.PLATFORM])).getText();
        return await super.getElementText("HomePage","description");  
    }

}

module.exports = new HomePage();
