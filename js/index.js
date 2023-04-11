const addButton = document.getElementById('add-btn');
const sortButton = document.getElementById('sort-by-name-btn');
const nameValueInput = document.getElementById('name-value');
const nameValueList = document.getElementById('name-value-list');

function addNewNameValue() {
    const nameValue = nameValueInput.value;

    // check if there is only one "=" in the string
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

function compareNames(a, b) {
    const nameA = a.split('=')[0].trim().toLowerCase();
    const nameB = b.split('=')[0].trim().toLowerCase();
  
    if (nameA < nameB) {
      return -1;
    }

    if (nameA > nameB) {
      return 1;
    }

    return 0;
}

function sortByName() {
  const nameValueArray = nameValueList.value.trim().split('\n');

  nameValueArray.sort(compareNames);

  nameValueList.value = nameValueArray.join('\n').concat('\n');
}

addButton.addEventListener('click', addNewNameValue);
sortButton.addEventListener('click', sortByName);