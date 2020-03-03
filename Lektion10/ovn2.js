const entryForm = document.getElementById("entry-form");
const entryField = document.getElementById("entry-field");
const languageList = document.getElementById("language-list");
const clearButton = document.getElementById("clear-button");

let data = localStorage.getItem("languages")
  ? JSON.parse(localStorage.getItem("languages"))
  : [];

function addItem(enteredText) {
  let listItem = document.createElement("li");
  listItem.textContent = enteredText;
  languageList.appendChild(listItem);
}

data.forEach(elem => {
  addItem(elem);
});

entryForm.addEventListener("submit", function(e) {
  e.preventDefault();
  let entered = entryField.value;
  if (entered == "") return;

  data.push(entered);
  localStorage.setItem("languages", JSON.stringify(data));
  addItem(entered);

  entryField.value = "";
  //entryField.focus();
});

clearButton.addEventListener("click", function(e) {
  data.length = 0;
  localStorage.removeItem("languages");
  while (languageList.firstChild) {
    languageList.removeChild(languageList.firstChild);
  }
});
