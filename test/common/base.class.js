const { $ } = require('@wdio/globals');
const { getSelector } = require('./selector');

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */

class BaseClass {

    async findByID(id) {
        return await $('#'+id);
    }

    async findByClassName(className) {
        return await $('.'+className);
    }

    async findByXPath(xpath) {
        return await $(xpath);
    }

    findByText(text) {
        return $('//*[contains(text(), "'+text+'")]');
    }

    findByUiSelector(selector) {
        return $(`android=${selector}`);
    }

    findByXCUISelector(selector) {
        return $(`ios=${selector}`);
    }

    async clickElement(page, selector){
        await (await $(getSelector(page, selector))).click();
    }

    async setElementValue(page, selector, value) {
        await (await $(getSelector(page, selector))).setValue(value)
    }

    async getElementText(page, selector){
        return await (await $(getSelector(page, selector))).getText();
    }

}

module.exports = BaseClass;