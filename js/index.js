const addButton = document.getElementById('add-btn');
const sortByNameButton = document.getElementById('sort-by-name-btn');
const sortByValueButton = document.getElementById('sort-by-value-btn');
const nameValueInput = document.getElementById('name-value');
const nameValueList = document.querySelector('#name-value-list');

function addNewNameValue() {
    const nameValue = nameValueInput.value;

    // check if there is only one "=" in the string
    const equalSymbolRegex = /^[^=]*=[^=]*$/;

    // check if name and value contain only alpha-numeric characters
    const validStringRegex = /^[a-zA-ZА-Яа-яІіЇїЄєҐґ0-9]+$/;

    if (nameValue !== '') {
        const hasEqualSymbol = nameValue.match(equalSymbolRegex);

        if (hasEqualSymbol !== null) {
            const name = nameValue.split('=')[0].replace(/ /g, "");
            const value = nameValue.split('=')[1].replace(/ /g, "");

            const isValidName = name.match(validStringRegex);
            const isValidValue = value.match(validStringRegex);

            if (isValidName !== null && isValidValue !== null) {
                const option = document.createElement('option');
                option.text = name + '=' + value;
                option.value = name + '=' + value;
                nameValueList.add(option);
                nameValueInput.value = '';
            }
        }
    }
}

function compareNamesValues(a, b, sortByValue) {
    const nameA = a.split('=')[sortByValue ? 1 : 0].trim().toLowerCase();
    const nameB = b.split('=')[sortByValue ? 1 : 0].trim().toLowerCase();
  
    if (nameA < nameB) {
      return -1;
    }

    if (nameA > nameB) {
      return 1;
    }

    return 0;
}

function sortNameValueList(sortByValue = false) {
  const nameValueArray = [];

  for (let i = 0; i < nameValueList.options.length; i++) {
    nameValueArray.push(nameValueList.options[i].value);
  }

  nameValueArray.sort((a, b) => compareNamesValues(a, b, sortByValue));

  nameValueList.options.length = 0;

  for (let i = 0; i < nameValueArray.length; i++) {
    const option = document.createElement('option');

    option.text = nameValueArray[i];
    option.value = nameValueArray[i];
    
    nameValueList.add(option);
  }
}

addButton.addEventListener('click', addNewNameValue);
sortByNameButton.addEventListener('click', () => sortNameValueList(false));
sortByValueButton.addEventListener('click', () => sortNameValueList(true));