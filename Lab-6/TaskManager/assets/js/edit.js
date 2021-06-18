/* 
    Instruction set to handle Update

    1. Declare the transaction and object store objects 
    2. Use the id on put method of index db
        
*/

const form = document.querySelector('#task-form'); //top form
const taskInput = document.querySelector('#task');//input value

//read from q string 
const urlParam = new URLSearchParams(window.location.search);
const id = Number(urlParam.get('id'));
var taskDate;


//db
var db;

//Listener on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    //create db
    const TasklistDb = indexedDB.open('TaskList', 1);

    //case on error
    TasklistDb.onerror = (e) =>{
        console.log(e.target.errorCode);
    }

    //case on success
    TasklistDb.onsuccess = () =>{
        db = TasklistDb.result;

        //display Task
        displayTasklist();
    }


    function displayTasklist() {
        let trxn = db.transaction('TaskList', 'readwrite');
        let store = trxn.objectStore('TaskList');
        let request = store.get(id);

        request.onsuccess = (e) =>{
            if(request.result){
                taskInput.value = request.result.taskname;
                taskDate = request.result.date;
                console.log(taskDate);
            }else{
                console.log("success");
            }
        };

        request.onerror = (e) =>{
            console.log(e.target.errorCode);
        }
    }
    form.addEventListener('submit', updateTask)
    function updateTask(e){

        e.preventDefault();

        //check empty entry
        if(taskInput.value === ""){
            taskInput.style.borderColor ="red";

            return;
        }

        let trxn = db.transaction('TaskList', 'readwrite');
        let store = trxn.objectStore('TaskList');

        let getTask = {
            taskname: taskInput.value,
            date: taskDate,
            id: id
        }

        store.put(getTask);

        trxn.oncomplete = () =>{
            console.log('Updated!');
        }

        history.back();
    }
});