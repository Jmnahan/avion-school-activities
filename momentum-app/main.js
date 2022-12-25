// Clock
let is24Hour;
const time = document.querySelector("#time");
const formatButton = document.querySelector("#format-btn");
const timeFromLocal = JSON.parse(localStorage.getItem("is24Hour"));

// Time from local
if(timeFromLocal) {
  is24Hour = timeFromLocal;
}

// getting currentTime
function updateTime() {
const date = new Date();
const hours = date.getHours();
const minutes = String(date.getMinutes()).padStart(2, "0");
const seconds = String(date.getSeconds()).padStart(2, "0");

if (is24Hour) {
  time.textContent = `${hours} : ${minutes} : ${seconds}`;
  is24Hour = true;
  localStorage.setItem("is24Hour", JSON.stringify(is24Hour));
} else { 
  const ampm = hours >= 12 ? "PM" : "AM",
  hours12 = hours % 12;       
  time.textContent = `${hours12} : ${minutes} : ${seconds} ${ampm}`;
  is24Hour = false;
  localStorage.setItem("is24Hour", JSON.stringify(is24Hour));
}

// Greeting
const greeting = document.querySelector("#greeting");
if (hours < 12) {
  greeting.textContent = "Good Morning"
} else if (hours > 12 && hours < 18) {
  greeting.textContent = "Good Afternoon"
} else {
  greeting.textContent = "Good evening"
}
};
window.setInterval(updateTime, 500);

// Change format button
formatButton.addEventListener("click", changeFormat);
function changeFormat() {
  is24Hour = !is24Hour;
}

const timeContainer = document.querySelector("#time-container");
timeContainer.addEventListener("mouseover", () => {
  formatButton.style.visibility = "visible";
});

timeContainer.addEventListener("mouseout", () => {
  formatButton.style.visibility = "hidden";
});

// Eventlistener 
document.addEventListener("DOMContentLoaded", gettingQuotes);
document.addEventListener("DOMContentLoaded", getWeather);
document.addEventListener("DOMContentLoaded", getTodos);

// Name and focus inputs
const inputName = document.querySelector("#input-name");
const inputFocus = document.querySelector("#input-focus");

// Get input data from localStorage
const nameFromLocal = JSON.parse(localStorage.getItem("nameVal"));
const focusFromLocal = JSON.parse(localStorage.getItem("focusVal"));

// Input Name 
inputName.addEventListener("input", () => {
let nameVal = inputName.value;
localStorage.setItem("nameVal", JSON.stringify(nameVal));
  if (nameVal !== "") {
    inputName.style.borderBottom = "1px solid transparent"
  } else {
    inputName.style.borderBottom = "1px solid #fff"
  }
});

// Input Focus
inputFocus.addEventListener("input", () => {
  let focusVal = inputFocus.value;
  localStorage.setItem("focusVal", JSON.stringify(focusVal));
  if (focusVal !== "") {
    inputFocus.style.borderBottom = "1px solid transparent"
  } else {
    inputFocus.style.borderBottom = "1px solid #fff"
  }
});

// Save name value
if (nameFromLocal) {
  inputName.value = nameFromLocal;
  inputName.style.borderBottom = "1px solid transparent";
};

// Save focus value
if (focusFromLocal) {
  inputFocus.value = focusFromLocal;
  inputFocus.style.borderBottom = "1px solid transparent";
};

// Quotes
function gettingQuotes() {
  const qoute = document.querySelector(".quotes");

  fetch("https://api.adviceslip.com/advice")
  .then(res => {
    if(res.ok === false) {
    throw Error("Advice API is currently unavailable");
    }
    return res.json()
  })
  .then((getQuotes) => {
    qoute.textContent = getQuotes.slip.advice;
  })
  .catch(err => {
    qoute.textContent = err.message
  })
}

// Weather API for later feature
function getWeather() {
  const wImg = document.querySelector("#w-img");
  const wCondition = document.querySelector("#w-condition");
  const wTemp = document.querySelector("#w-temp");
  const wLocation = document.querySelector("#w-location");

  fetch("https://api.weatherapi.com/v1/current.json?key=60909afbd2bb483ca4d122328220508&q=%3Cmanila%3E&aqi=no")
  .then(res => {
    if(res.ok === false) {
      wImg.style.display = "none"
      throw Error("Weather API is currently unavailable"); 
    }
    return res.json()
  })
  .then((getWeather) => {
    wImg.src = getWeather.current.condition.icon;
    wCondition.textContent = getWeather.current.condition.text;
    wTemp.textContent = `${getWeather.current.temp_c}°C`;
    wLocation.textContent = getWeather.location.region;
  })
  .catch(err => {
    wCondition.textContent = err.message;
  })
};

setInterval( function() {
  gettingQuotes()
}, 1000 * 60);

setInterval( function() {
  getWeather()
}, 1000 * 60 * 10);

// Todo container
const todoBtn = document.querySelector("#todo-btn");
const todoSection = document.querySelector("#todo-container");

todoBtn.addEventListener("click", () => {
  todoSection.classList.toggle("todo-toggle");
});

// Todo 
const todoList = document.querySelector("#todo-list");
const todoSubmit = document.querySelector("#todo-submit");
const todoInput = document.querySelector("#todo-input");
const todoError = document.querySelector("#todo-error");

// TODO
todoSubmit.addEventListener("click", function(event) {
  event.preventDefault();
  if (todoInput.value === "") {
    errorMessage(todoError)
  } else {
    const todoDiv = document.createElement("div"); // Create div
    todoDiv.classList.add("todo-div") /* THIS IS A NEW CLASS */
    const todoItem = document.createElement("li"); // Create li
    todoItem.classList.add("todo-item") /* THIS IS A NEW CLASS */
    todoItem.textContent = todoInput.value; 
    saveToLocal(todoInput.value); // Add to local storage
    todoInput.value = "";
    todoDiv.appendChild(todoItem); // Append li to the div

    // Edit btn
    const editBtn = document.createElement("button");
    editBtn.innerHTML = `<i class="fa-pen fa"></i>`;
    editBtn.classList.add("edit-btn"); /* THIS IS A NEW CLASS */
    todoDiv.appendChild(editBtn); // Append to div

    // Delete btn
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn") /* THIS IS A NEW CLASS */ 
    deleteBtn.innerHTML = `<i class="fa-trash-can fa"></i>`;
    todoDiv.appendChild(deleteBtn); // Append to Div
    todoList.appendChild(todoDiv); // Append to UL
  }
});

// Error message
function errorMessage(message) {
  message.textContent = "Please write something"
    message.style.display = "block";
    setTimeout(() => {
    message.style.display = "none";
  }, 1000);
};

// ACTIONS 
todoList.addEventListener("click", clickActions);
function clickActions(e) {
  const targetItem = e.target;
  const todoItem = targetItem.parentElement.parentElement.firstChild;
  const editBtn = targetItem.parentElement.parentElement.children[1];
  const todos = JSON.parse(localStorage.getItem("todos"));

  if (targetItem.classList[0] === "fa-trash-can") { // DELETE
    if (confirm ("Are you sure you want to delete this todo?")) {
      removeLocalTodos(targetItem);
      targetItem.parentElement.parentElement.remove();
    }
  } else if (targetItem.classList[0] === "fa-pen") { // EDIT
    todoItem.contentEditable = true;
    editBtn.innerHTML = `<i class="fa-plus fa"></i>`;
    todoItem.classList.toggle("todo-editing");
    todoItem.focus();
    currentVal = todoItem.textContent;
  } else if (targetItem.classList[0] === "fa-plus") { // SAVE-EDIT
    todoItem.contentEditable = false;
    editBtn.innerHTML = `<i class="fa-pen fa"></i>`;
    todoItem.classList.toggle("todo-editing");
    updatedVal = todoItem.textContent;
    todos.splice(todos.indexOf(currentVal), 1);
    todos.unshift(updatedVal);
    localStorage.setItem("todos", JSON.stringify(todos));
  } else if (targetItem.classList[0] === "todo-item" && targetItem.classList[1] !== "todo-editing") { // TASK COMPLETE
    targetItem.classList.toggle("completed-todo"); /* THIS IS A NEW CLASS */
    completedTask = targetItem.textContent;
    let index = todos.indexOf(completedTask);
    completed(index);
  }
};

// Completed Todos
function completed(index) {
  let tempArr; 
  if(localStorage.getItem("newArr") == null) {
    tempArr = [];
  } else {
    tempArr = JSON.parse(localStorage.getItem("newArr"));
  }
  tempArr.push(index);
  localStorage.setItem("newArr", JSON.stringify(tempArr));
}

// Pushing new Todo
function saveToLocal(todo){
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Remove todo to local
function removeLocalTodos(todo){
  let todos;
  let newArr = JSON.parse(localStorage.getItem("newArr"));
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.parentElement.parentElement.firstChild.innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  newArr.splice(newArr.indexOf(todos.indexOf(todoIndex)), 1);
  localStorage.setItem("newArr", JSON.stringify(newArr));
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Gettting todos
function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function(todo, index){
  const todoDiv = document.createElement("div");  // Create div
  todoDiv.classList.add("todo-div");
  const todoItem = document.createElement("li");;  // Create li
  todoItem.id = `todo-${index}`;
  todoItem.classList.add("todo-item"); /* THIS IS A NEW CLASS */
  todoItem.innerText = todo; 
  todoDiv.appendChild(todoItem); // Append li to the div
  
  //Edit btn
  const editBtn = document.createElement("button");
  editBtn.innerHTML = `<i class="fa-pen fa"></i>`;
  editBtn.classList.add("edit-btn"); /* THIS IS A NEW CLASS */
  todoDiv.appendChild(editBtn); // Append to div

  // Delete btn
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn"); /* THIS IS A NEW CLASS */
  deleteBtn.innerHTML = '<i class="fa-trash-can fa"></i>';
  todoDiv.appendChild(deleteBtn); // Append to Div
  todoList.appendChild(todoDiv); // Append to UL
  });

  let newArr; 
  if(localStorage.getItem("newArr") == null) {
    newArr = [];
  } else {
    newArr = JSON.parse(localStorage.getItem("newArr"));
  }
  
  newArr.forEach(function(index) {
    let currentItem = document.querySelector(`#todo-${index}`);
    currentItem.classList.toggle("completed-todo"); /* THIS IS A NEW CLASS */
  })
  completed();
};