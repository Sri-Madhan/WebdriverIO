const { expect } = require('@wdio/globals')
const homeScreen = require('../../screen/home.page')
const { getConstant } = require('../../common/selector');
const bottomNav = require('../../screen/bottom.nav');
const loginPage = require('../../screen/login.page');

describe('HomeScreen', () => {
    it('Verify Home Screen description', async () => {
        var description = await homeScreen.getPageTitle();
        expect(description).toContain(getConstant("homePage","description"));
    })
})

describe('LoginScreen', () => {
    it('Verify Login Screen Title', async () => {
        await bottomNav.clickLoginBtn();
        var title = await loginPage.getPageTitle();
        expect(title).toContain(getConstant("loginPage", "title"));
    })
    it('Verify login with valid credential',async () => {
        await loginPage.login("test@example.com","test1234577");
    })
})

