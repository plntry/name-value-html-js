const addButton = document.getElementById('add-btn');
const nameValueInput = document.getElementById('name-value');
const nameValueList = document.getElementById('name-value-list');

function addNewNameValue() {
    const nameValue = nameValueInput.value.trim();
    if (nameValue !== '') {
        nameValueList.value += nameValue + '\n';
        nameValueInput.value = '';
    }
}

addButton.addEventListener('click', addNewNameValue);