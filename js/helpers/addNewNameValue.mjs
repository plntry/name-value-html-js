import {
    nameValueInput,
    nameValueList,
    equalSymbolRegex,
    validStringRegex
} from "../constants/index.js";

export const addNewNameValue = () => {
    const nameValue = nameValueInput.value;

    if (nameValue !== '') {
        const hasEqualSymbol = nameValue.match(equalSymbolRegex);

        if (hasEqualSymbol !== null) {
            const name = nameValue.split('=')[0].replace(/ /g, "");
            const value = nameValue.split('=')[1].replace(/ /g, "");

            const isValidName = name.match(validStringRegex);
            const isValidValue = value.match(validStringRegex);

            if (isValidName !== null && isValidValue !== null) {
                const option = document.createElement('option');
                option.value = name + '=' + value;
                option.text = name + '=' + value;
                nameValueList.add(option);
                nameValueInput.value = '';
            }
        }
    }
}
