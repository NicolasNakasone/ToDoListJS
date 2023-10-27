const toDoList = document.getElementById("to_do_list");
const toDoForm = document.getElementById("to_do_form");
const toDoInput = document.getElementById("to_do_input");

const handleKeyPress = (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const { value: inputValue } = toDoInput;
  if (inputValue) {
    addItemToList(inputValue);
    toDoInput.value = "";
  }
};

const removeItemFromList = (item) => {
  toDoList.removeChild(item);
};

const addItemToList = (itemText) => {
  const newItem = document.createElement("li");

  const itemSpan = document.createElement("span");
  itemSpan.textContent = itemText;
  newItem.appendChild(itemSpan);

  newItem.setAttribute("class", "to_do_item");

  const itemButton = document.createElement("button");
  itemButton.textContent = "X";

  newItem.appendChild(itemButton);
  toDoList.appendChild(newItem);

  itemButton.addEventListener("click", () => removeItemFromList(newItem));
};

toDoInput.addEventListener("keypress", handleKeyPress);

toDoForm.addEventListener("submit", handleSubmit);
