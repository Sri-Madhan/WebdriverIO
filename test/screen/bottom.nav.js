const baseClass = require('../common/base.class');

class BottomNavbar extends baseClass {
    
    async clickHomeBtn() {
        await (await super.clickElement("BottomNavbar", "home"));
    }

    async clickLoginBtn() {
        await (await super.clickElement("BottomNavbar", "login"));
    }

}

module.exports = new BottomNavbar();