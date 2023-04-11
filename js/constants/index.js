// main buttons
export const addButton = document.getElementById('add-btn');
export const sortByNameButton = document.getElementById('sort-by-name-btn');
export const sortByValueButton = document.getElementById('sort-by-value-btn');
export const deleteButton = document.getElementById('delete-btn');
export const showXmlButton = document.getElementById('show-xml-btn');

// input field & list
export const nameValueInput = document.getElementById('name-value');
export const nameValueList = document.getElementById('name-value-list');

// modal elements
export const xmlModal = document.getElementById('xml-modal');
export const xmlCode = document.getElementById('xml-code');
export const closeBtn = document.querySelector('.close');

// check if there is only one "=" in the string
export const equalSymbolRegex = /^[^=]*=[^=]*$/;

// check if name and value contain only alpha-numeric characters
export const validStringRegex = /^[a-zA-ZА-Яа-яІіЇїЄєҐґ0-9]+$/;
