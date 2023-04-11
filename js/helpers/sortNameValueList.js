import { nameValueList } from "../constants/index.js";

export const sortNameValueList = (sortByValue = false) => {
    const options = nameValueList.options;

    const sortedOptions = Array.from(options).sort((a, b) => {
    const aString = a.value.split('=')[sortByValue ? 1 : 0].toLowerCase();
    const bString = b.value.split('=')[sortByValue ? 1 : 0].toLowerCase();

        if (aString < bString) {
            return -1;
        } else if (aString > bString) {
            return 1;
        } else {
            return 0;
        }
    });

    for (let i = 0; i < sortedOptions.length; i++) {
        options[i] = sortedOptions[i];
    }
}
