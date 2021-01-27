document.addEventListener('DOMContentLoaded', function() {
    $('.dropdown-trigger').dropdown();
  });
const taskInput = document.querySelector('#task'); //task input text field
const form = document.querySelector("#task-form"); //form at the top
const filter = document.querySelector("#filter"); //task filter text field
const taskList = document.querySelector(".collection"); //ul
const clearBtn = document.querySelector(".clear-tasks"); //all task clear button
const reloadIcon = document.querySelector('.fa'); //reload button at the top right of navigation
const ascend = document.querySelector('.asc'); //Ascend button at the right end of page
const descend = document.querySelector('.desc'); //Descend button at the right end of page

var checkAscend = true;

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
    if (checkAscend) {
        //append to ul
        taskList.appendChild(li);
    } else {
        taskList.prepend(li);
    }    

    taskInput.value = '';
    
    
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
        });
    }
    checkAscend = true;
}











  