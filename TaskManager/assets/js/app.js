const taskInput = document.querySelector('#task');
const form = document.querySelector("#task-form");
const filter = document.querySelector("#filter");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");


form.addEventListener("submit", addNewTask);
clearBtn.addEventListener("click", clearAllTasks);
filter.addEventListener("keyup", filterTasks);