// UI Vars 
const postDiv3 = document.getElementById('thePosts');
const spinner = document.getElementById('spinner');
const search = document.getElementById('search');

search.addEventListener('keyup', filter);

//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
    //load_fromPlaceHolder();
    loadDataNew();
});


//load a single customer function 
function load_fromPlaceHolder() {

    //open the request 
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(res) {
            return res.json(); //return the JSON Promise
        })
        .then(function(posts) {
            //iterate over each post [100 posts]
            let output = '';
            posts.forEach(function(post) {
                output += `
        
                <div class="item">
                <div class="image">
                    <img src=" https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80">
                </div>
                <div class="content">
                    <a class="header" href="#" id="bTitle">
                    ${post.title.toUpperCase()}
                    </a>
                    <div class="description">
                        <p id="bDesc">
                        ${post.body}
                        </p>
                    </div>
                    <div class="extra">
                        <a class="ui floated basic violet button" href="#">Read Mores</a>
                    </div>
                </div>
            </div>
        
        `;
            });
            postDiv3.innerHTML = output;
        })
        .catch(function(err) {
            console.log(err);
        });



}

async function load_fromPlaceHolder_new() {
    //open the request 
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');

    let data = await response.json();
    
    return data;

}

function loadDataNew() {
    load_fromPlaceHolder_new().then(function(posts) {
            //iterate over each post [100 posts]
            let output = '';
            posts.forEach(function(post) {
                output += `

        <div class="item">
        <div class="image">
            <img src=" https://images.unsplash.com/photo-1613047880926-105f6e0662ec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80">
        </div>
        <div class="content"> 
            <a class="header" href="#" id="bTitle">
            ${post.title.toUpperCase()}
            </a>
            <div class="description">
                <p id="bDesc">
                ${post.body}
                </p>
            </div>
            <div class="extra">
                <a class="ui floated basic violet button" href="#">Read Mores</a>
            </div>
        </div>
    </div>

`;
            });
            setTimeout(() => {
                postDiv3.innerHTML = output;
            }, 2200);
        })
        .catch(function(err) {
            console.log(err);
        });

}

function hide(){
    spinner.style.display = 'none';
}

function show(){
    spinner.style.display = 'inline';
}
function filter(){
    //opening the request
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(response){
            //return JSON promise
            return response.json();
        }).then(function(posts){
            let arr = Array();
            posts.forEach(function(post){
                arr.push({title:post.title.toUpperCase(), body: post.body});  
            });
            let output =''; 
            for(let i = 0; i<arr.length; i++){
                const input = search.value.toUpperCase();

                if(arr[i].title.toUpperCase().indexOf(input) > -1){

                    output += `
                    <div class="item">
                    <div class="image">
                        <img src="https://images.unsplash.com/photo-1613047880926-105f6e0662ec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80">
                    </div>
                    <div class="content">
                        <a class="header" href="#" id="bTitle">
                        ${arr[i].title}
                        </a>
                        <div class="description">
                            <p id="bDesc">
                            ${arr[i].body}
                            </p>
                        </div>
                        <div class="extra">
                            <a class="ui floated basic violet button" href="#">Read Mores</a>
                        </div>
                    </div>
                </div>`
                }
            }
            postDiv3.innerHTML = `<div class="ui active centered inline loader" id="spinner"></div>`;
            setTimeout(() => {
                postDiv3.innerHTML = output;
            }, 400);
        }).catch((err) => {
            console.log(err.stack);
        });
}