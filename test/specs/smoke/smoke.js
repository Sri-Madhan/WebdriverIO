const { expect } = require('@wdio/globals')
const homeScreen = require('../../screen/home.page')
const { getConstant } = require('../../common/selector');

describe('HomeScreen', () => {
    it('Verify Home Screen description', async () => {
        var description = await homeScreen.getPageTitle();
        expect(description).toContain(getConstant("homePage","description"));
    })
})