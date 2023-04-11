const addButton = document.getElementById('add-btn');
const sortByNameButton = document.getElementById('sort-by-name-btn');
const sortByValueButton = document.getElementById('sort-by-value-btn');
const deleteButton = document.getElementById('delete-btn');
const showXmlButton = document.getElementById('show-xml-btn');
const nameValueInput = document.getElementById('name-value');
const nameValueList = document.getElementById('name-value-list');
const xmlModal = document.getElementById('xml-modal');
const xmlCode = document.getElementById('xml-code');
const closeBtn = document.querySelector('.close');

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
                option.value = name + '=' + value;
                option.text = name + '=' + value;
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

function deleteSelectedOptions() {
    const options = nameValueList.options;

    for (let i = options.length - 1; i >= 0; i--) {
        if (options[i].selected) {
            nameValueList.remove(i);
        }
    }
}

function showListAsXml() {
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

addButton.addEventListener('click', addNewNameValue);
sortByNameButton.addEventListener('click', () => sortNameValueList(false));
sortByValueButton.addEventListener('click', () => sortNameValueList(true));
deleteButton.addEventListener('click', deleteSelectedOptions);
showXmlButton.addEventListener('click', showListAsXml);
closeBtn.addEventListener('click', () => xmlModal.style.display = 'none');
window.addEventListener('click', (event) => {
  if (event.target === xmlModal) {
    xmlModal.style.display = 'none';
  }
});
