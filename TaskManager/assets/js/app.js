document.addEventListener('DOMContentLoaded', function() {
    $('.dropdown-trigger').dropdown();
  });

//UI vars
const taskInput = document.querySelector('#task'); //task input text field
const form = document.querySelector("#task-form"); //form at the top
const filter = document.querySelector("#filter"); //task filter text field
const taskList = document.querySelector(".collection"); //ul
const clearBtn = document.querySelector(".clear-tasks"); //all task clear button
const reloadIcon = document.querySelector('.fa'); //reload button at the top right of navigation
const ascend = document.querySelector('.asc'); //Ascend button at the right end of page
const descend = document.querySelector('.desc'); //Descend button at the right end of page
var checkAscend = true; //bool function for sorting

//Database var
const db;

//Initialize name and version of db
const TasklistDb = indexedDB.open('TaskList', 1);

//in case of error
TasklistDb.onerror = (e) =>{
    console.log(e.target.errorCode);
}

//in case of success
TaskDb.onsuccess = () =>{
    console.log('Database Ready');

    //save result
    db = TasklistDb.result;

    //display task list
    displayTaskList();
}

//initial run
TasklistDb.onupgradeneeded = (e) =>{
    const db = e.target.result;

    //create an object store
    let store = db.createObjectStore('tasks', {keyPath: 'id', autoIncrement: true});

    //create index
    store.createIndex('taskname', 'taskname', {unique: false});
    store.createIndex('date', 'date', {unique: false});

    console.log('Database fields created');
}


//Event Listener

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

//Descend event listenere
descend.addEventListener('click', descendBool);

//Ascend event listenere
ascend.addEventListener('click', ascendBool);

// DOM load event
document.addEventListener('DOMContentLoaded', loadTasksfromDB);

//add new task funtion definition
function addNewTask(e){
    if(taskInput.value === '')
    {
        taskInput.style.borderColor = 'red';
        return;
    }

    //object creation 
    const newTask = {
        taskname: taskInput.value,
        date: new Date().getTime()
    }

    // //adding to db, changing access to readwrite
    const trxn= db.transaction(['tasklist'], 'readwrite');
    const store = trxn.ObjectStore('tasklist');

    const request = store.add(newTask);

    //success case for request
    request.onsuccess = () =>{
        form.reset();
    }
    //error case
    request.onerror = (e) =>{
        console.log(e.target.errorCode);
    }
    request.oncomplete = () =>{
        console.log('Task added to database');
        displayTaskList();
    }



    //rest of code
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
    //create edit link
    const edit = document.createElement('a');
    //add class and edit marker for a link
    edit.innerHTML = '<i class="fa fa-edit"></i>';
    edit.className = 'edit-item secondary-content';
    //append link to li
    li.appendChild(link);
    li.appendChild(edit);
    if (checkAscend) {
        //append to ul
        taskList.appendChild(li);
        addToDatabase(taskInput.value)
    } else {
        taskList.prepend(li);
        addToDatabase(taskInput.value)
    }    

    taskInput.value = '';
    
    
    e.preventDefault(); //disable form submission
}

//clear task function definition
function clearAllTasks(){
    //this is one way
    //taskList.innerHTML = '';
    //second way
    if(confirm('Are you sure about that ?')){
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }
    }
}


//filter tasks function definition
function filterTasks(e){
    console.log("Task filter...")
    var searchFilter, listItem, txtValue;
    searchFilter = filter.value.toUpperCase();
    listItem = document.querySelectorAll('.collection-item');
    //looping through the list items, and hiding unmatching results
    listItem.forEach(function(element){
        txtValue = element.textContent || element.innerText;
        if(txtValue.toUpperCase().indexOf(searchFilter) > -1){
            element.style.display = "";
        }else{
            element.style.display = "none";
        }
    });
}

//remove task function definition
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item'))
    {
        if(confirm('Are you sure about that ?')){
            e.target.parentElement.parentElement.remove(); 
        }       
    }
    if(e.target.parentElement.classList.contains('edit-item'))
    {
        const edit = e.target.parentElement.parentElement.innerText 
        taskInput.value = edit;
        e.target.parentElement.parentElement.remove(); 
              
    }
}


//Reload Page Function
function reloadPage(){
    //using the reload function on locatoin object
    location.reload();
}


//descending sort function
function descendBool(){
    if(!checkAscend){
        return;
    }else{
        console.log('sorting...')
        var items, arr, taskValue;
        arr = new Array();
        items = document.querySelectorAll('.collection-item');
        //looping through the list items, and hiding unmatching results
        for(let i = items.length-1; i>=0; i--){
            taskValue = items[i].textContent || items[i].innerText;
            arr.push(taskValue);
            console.log(arr[i]);
        }
        items.forEach(function(element, index){
            element.innerText = arr[index];
            const link = document.createElement('a');
            //add class and the x marker for a
            link.innerHTML = '<i class="fa fa-remove"></i>';
            link.className = 'delete-item secondary-content';
            const edit = document.createElement('a');
            //add class and edit marker for a link
            edit.innerHTML = '<i class="fa fa-edit"></i>';
            edit.className = 'edit-item secondary-content';
            element.append(link);
            element.append(edit);
        });
        checkAscend = false;
    }
}

//ascending sort function
function ascendBool(){
    if(checkAscend){
        return;
    }else{
        console.log('sorting...')
        var items, arr, taskValue;
        arr = new Array();
        items = document.querySelectorAll('.collection-item');
        //looping through the list items, and hiding unmatching results
        for(let i = items.length-1; i>=0; i--){
            taskValue = items[i].textContent || items[i].innerText;
            arr.push(taskValue);
            console.log(arr[i]);
        }
        items.forEach(function(element, index){
            element.innerText = arr[index];
            const link = document.createElement('a');
            //add class and the x marker for a
            link.innerHTML = '<i class="fa fa-remove"></i>';
            link.className = 'delete-item secondary-content';
            const edit = document.createElement('a');
            //add class and edit marker for a link
            edit.innerHTML = '<i class="fa fa-edit"></i>';
            edit.className = 'edit-item secondary-content';
            element.append(link);
            element.appendChild(edit);
        });
    }
    checkAscend = true;
}
function loadTasksFromDB()
    {
        let listofTasks;

        if(localStorage.getItem('tasks') == null)
        {
            listofTasks = [];
        }else{
            listofTasks = JSON.parse(localStorage.getItem('tasks'));
        }
        return listofTasks; //return array
    }

function loadTasksfromDB()
{ 
    let listofTasks = loadfromDB();
    if (listofTasks.length != 0) {
        listofTasks.forEach(function(eachTask) {
            
            const li = document.createElement('li'); // Create an li element when the user adds a task
            li.className = 'collection-item'; // Adding a class
            li.appendChild(document.createTextNode(eachTask)); // Create text node and append it
            const link = document.createElement('a'); // Create new element for the link
            link.className = 'delete-item secondary-content'; // Add class and the x marker for a
            link.innerHTML = '<i class="fa fa-remove"> </i>';
            li.appendChild(link); // Append link to li
            taskList.appendChild(li); // Append to UL
        });
    }
}

function loadTasksfromDB()
{ 
    let listofTasks = loadfromDB();
    if (listofTasks.length != 0) {
        listofTasks.forEach(function(eachTask) {
            
            const li = document.createElement('li'); // Create an li element when the user adds a task
            li.className = 'collection-item'; // Adding a class
            li.appendChild(document.createTextNode(eachTask)); // Create text node and append it
            const link = document.createElement('a'); // Create new element for the link
            link.className = 'delete-item secondary-content'; // Add class and the x marker for a
            link.innerHTML = '<i class="fa fa-remove"> </i>';
            li.appendChild(link); // Append link to li
            taskList.appendChild(li); // Append to UL
        });
    }
}













  