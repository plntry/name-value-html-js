import {
    addButton,
    sortByNameButton,
    sortByValueButton,
    deleteButton,
    showXmlButton,
    xmlModal,
    closeBtn
} from "./constants/index.js";
import { addNewNameValue } from "./helpers/addNewNameValue.mjs";
import { sortNameValueList } from "./helpers/sortNameValueList.js";
import { deleteSelectedOptions } from "./helpers/deleteSelectedOptions.js";
import { showListAsXml } from "./helpers/showListAsXml.js";

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
