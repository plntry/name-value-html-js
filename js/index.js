const addButton = document.getElementById('add-btn');
const nameValueInput = document.getElementById('name-value');
const nameValueList = document.getElementById('name-value-list');

function addNewNameValue() {
    const nameValue = nameValueInput.value;

    // check if there is only one "=" character in the string
    const equalSymbolRegex = /^[^=]*=[^=]*$/;
    // check if name and value contain only alpha-numeric characters
    const validStringRegex = /^[a-zA-ZА-Яа-яІіЇїЄєҐґ0-9]+$/;

    const name = nameValue.split('=')[0].replace(/ /g, "");
    const value = nameValue.split('=')[1].replace(/ /g, "");

    if (nameValue !== '') {
        const hasEqualSymbol = nameValue.match(equalSymbolRegex);

        if (hasEqualSymbol !== null) {
            const isValidName = name.match(validStringRegex);

            const isValidValue = value.match(validStringRegex);

            if (isValidName !== null && isValidValue !== null) {
                nameValueList.value += name + '=' + value + '\n';
                nameValueInput.value = '';
            }
        }
    }
}

addButton.addEventListener('click', addNewNameValue);