const toDoList = document.getElementById("to_do_list");
const toDoForm = document.getElementById("to_do_form");
const toDoInput = document.getElementById("to_do_input");

function handleKeyPress(event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const { value: inputValue } = toDoInput;
  if (inputValue) {
    addItemToList(inputValue);
    toDoInput.value = "";
  }
}

function addItemToList(itemText) {
  const newItem = document.createElement("li");
  newItem.textContent = itemText;
  toDoList.appendChild(newItem);
}

toDoInput.addEventListener("keypress", handleKeyPress);

toDoForm.addEventListener("submit", handleSubmit);
