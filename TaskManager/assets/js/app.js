const taskInput = document.querySelector('#task'); //task input text field
const form = document.querySelector("#task-form"); //form at the top
const filter = document.querySelector("#filter"); //task filter text field
const taskList = document.querySelector(".collection"); //ul
const clearBtn = document.querySelector(".clear-tasks"); //all task clear button
const reloadIcon = document.querySelector('.fa'); //reload button at the top right of navigation

//form submit
form.addEventListener("submit", addNewTask);

//clear all tasks
clearBtn.addEventListener("click", clearAllTasks);

//filter task
filter.addEventListener("keyup", filterTasks);

//Remove task event [event delegation]
taskList.addEventListener('click', removeTask);

//Event listener for reload
reloadIcon.addEventListener('click', reloadPage);




//add new task funtion definition
function addNewTask(e){
    if(taskInput.value === '')
    {
        taskInput.style.borderColor = 'red';
        return;
    }
    //create a li element when the user adds a task
    const li = document.createElement('li');
    //add a class
    li.className = 'collection-item';
    //create text node and append it
    li.appendChild(document.createTextNode(taskInput.value));
    //create new element for link
    const link = document.createElement('a');
    //add class and the x marker for a
    link.innerHTML = '<i class="fa fa-remove"></i>';
    link.className = 'delete-item secondary-content';
    //append link to li
    li.appendChild(link);
    //append to ul
    taskList.appendChild(li);
    
    
    e.preventDefault(); //disable form submission
}

//clear task function definition
function clearAllTasks(){
    //this is one way
    //taskList.innerHTML = '';

    //second way
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

//filter tasks function definition
function filterTasks(e){
    console.log("Task filter...")
}

//remove task function definition
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item'))
    {
        e.target.parentElement.parentElement.remove();        
    }
}

//Reload Page Function
function reloadPage(){
    //using the reload function on locatoin object
    location.reload();
}