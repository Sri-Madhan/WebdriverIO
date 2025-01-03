import selectors from './ObjectRepository.json'; 
import constants from './UiConstants.json';

export const getSelector = (page, element) => {
    const platform = process.env.PLATFORM || 'ios';  
    return selectors[page]?.[element]?.[platform];
};

export const getConstant = (page, element) => {
    return constants[page]?.[element];
};

