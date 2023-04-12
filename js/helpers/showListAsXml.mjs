import {
    nameValueList,
    xmlModal,
    xmlCode,
} from "../constants/index.js";

export const showListAsXml = () => {
    const options = nameValueList.options;
    let xmlString = '<?xml version="1.0" encoding="UTF-8"?><list>';
  
    for (let i = 0; i < options.length; i++) {
        const option = options[i];
        const name = option.text.split('=')[0];
        const value = option.text.split('=')[1];

        const xmlOption = `<option name="${name}" value="${value}" />`;
        xmlString += xmlOption;
    }
  
    xmlString += '</list>';
  
    xmlCode.innerText = xmlString;
    xmlModal.style.display = 'block';
}
