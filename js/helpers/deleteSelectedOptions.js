import { nameValueList } from "../constants/index.js";

export const deleteSelectedOptions = () => {
    const options = nameValueList.options;

    for (let i = options.length - 1; i >= 0; i--) {
        if (options[i].selected) {
            nameValueList.remove(i);
        }
    }
}
