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
const sort = document.querySelector('.dropdown-content'); //dropdown content
var checkAscend = true; //bool function for sorting

// //Database var
let db;

//Initialize name and version of db
const TasklistDb = indexedDB.open('TaskList', 1);

//in case of error
TasklistDb.onerror = (e) =>{
    console.log(e.target.errorCode);
}

//in case of success
TasklistDb.onsuccess = () =>{
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
    let store = db.createObjectStore('TaskList', {keyPath: 'id', autoIncrement: true});

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

//Listener for sort display
sort.addEventListener('change', displayTaskList)

//Descend event listenere
descend.addEventListener('click', descendBool);

//Ascend event listenere
ascend.addEventListener('click', ascendBool);


//add new task funtion definition
function addNewTask(e){
    e.preventDefault(); //disable form submission
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
    const trxn= db.transaction('TaskList', 'readwrite');
    const store = trxn.objectStore('TaskList');

    const request = store.put(newTask);

    //success case for request
    request.onsuccess = () =>{
        form.reset();
    }
    //error case
    request.onerror = (e) =>{
        console.log(e.target.errorCode);
    }
    trxn.oncomplete = () =>{
        console.log('Task added to database');
        displayTaskList();
    }
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
            const taskId = Number(e.target.parentElement.parentElement.getAttribute('data-TaskList-id'));
            
            //use transaction
            const trxn = db.transaction(['TaskList'], 'readwrite');
            const store = trxn.store('TaskList');
            store.delete(taskId);

            trxn.oncomplete = () =>{
                e.target.parentElement.parentElement.remove(); 
            }
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

//Display Task List
function displayTaskList(){
    //clearing previous task list
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    //create object store
    const trxn = db.transaction('TaskList', 'readonly');
    const store = trxn.objectStore('TaskList');


    let checkSort;

    if(sort.value == "Ascend"){
        checkSort = "next"
    }else{
        checkSort = "prev"
    }

    const index = store.index('date');
    index.openCursor(null, checkSort).onsuccess = (e) => {
        //assign the current cursor
        const cursor = e.target.result;

        if(cursor) {

            //create a li element when the user adds a task
            const li = document.createElement('li');
            //add id attribute value
            li.setAttribute('taskID', cursor.value.id);
            //add a class
            li.className = 'collection-item';
            //create text node and append it
            li.appendChild(document.createTextNode(cursor.value.taskname));
            li.value = cursor.value.date;
            //create new element for link
            const link = document.createElement('a');
            //add class and the x marker for a
            link.innerHTML = `<a href="edit.html?id=${cursor.value.id}"><i class="fa fa-edit"></i></a> &nbsp <i class="fa fa-remove"></i>`;
            link.className = 'delete-item secondary-content';
            //create edit link
            // const edit = document.createElement('a');
            //add class and edit marker for a link
            // edit.innerHTML = '<i class="fa fa-edit"></i>';
            // edit.className = 'edit-item secondary-content';
            //append link to li
            li.appendChild(link);
            // li.appendChild(edit);
            // if (checkAscend) {
            //     //append to ul
            //     taskList.appendChild(li);
            //     addToDatabase(taskInput.value)
            // } else {
            //     taskList.prepend(li);
            //     addToDatabase(taskInput.value)
            // }    
            taskList.appendChild(li);
            // addToDatabase(taskInput.value)
            // taskInput.value = '';
            cursor.continue();
        }
    }
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













  