"use strict";

// Elements
const inputField = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const clearBtn = document.querySelector(".footer button");
const taskList = document.querySelector(".todoList");

// Add task function
const addTask = function (e) {
  e.preventDefault();
  if (inputField.value === "") {
    window.alert("Please enter a reminder");
  } else {
    let task = document.createElement("li");
    task.textContent = inputField.value;
    taskList.appendChild(task);
  }
  inputField.value = "";
};

// Event listeners
addBtn.addEventListener("click", addTask);
// clearBtn.addEventListener("click", removeTask);
