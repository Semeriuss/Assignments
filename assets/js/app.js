import { requests } from "./api.js";

const appLi = document.getElementById('view');
const appLiAsia = document.getElementById('viewAsia');
const spin = document.getElementById('spinner');
const search = document.getElementById("example-search-input");
search.addEventListener("keyup", searchCountries);

//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
    //load_fromPlaceHolder();
    loadDataNew();
    loadDataNewAsia();
});

//load a single customer function 
// function load_fromPlaceHolder() {

//     //open the request 
//     requests.ALL()
//         .then(function(res) {
//             return res.json(); //return the JSON Promise
//         })
//         .then(function(items) {
//             //iterate over each countries
//             countries.forEach(function(country) {
//                 display += `
//                 <div class="col-md-4">
//                     <div class="card">
//                         <div class="card-body">
//                             <img height="40" width="40" class="card-img-top img-fluid" src="${country.flag}" alt="">
//                             <h4 class="card-title">${country.name}</h4>
//                             <h6 class="card-title">${country.capital}</h6>
//                             <p class="card-text">Lorem ipsum dolor sit</p>
//                         </div>
//                     </div>
//                 </div>
//                 `;
//             });
//             appLi.innerHTML = display;
//         })
//         .catch(function(err) {
//             console.log(err);
//         });

// }

async function load_fromPlaceHolder_new() {
    //open the request 
    let response = await fetch('https://restcountries.eu/rest/v2/all');

    let data = await response.json();
    
    return data;

}

function loadDataNew() {
    load_fromPlaceHolder_new().then(function(countries) {
            let display = '';
            countries.forEach(function(country) {
                display += `
                <div class="col-md-4 mr-1 mb-4 border-dark">
                    <div class="card-header"><h6 style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;" class="card-text">${country.region}</h6></div>
                        <div class="card">
                            <div class="card-body bg-info">
                                <img style="width: 20rem; height: 10rem;" class="card-img-top img-fluid" src="${country.flag}" alt="">
                                <h4 style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" class="card-title mt-2">${country.name}</h4>
                                <h5 style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;" class="card-title">${country.capital}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            });
            appLi.innerHTML = display;
        })
        .catch(function(err) {
            console.log(err);
        });

}


function loadDataNewAsia() {
    load_fromPlaceHolder_new().then(function(countries) {
            let display = '';
            countries.forEach(function(country) {
                if (country.region == "Asia") {
                    display += `
                <div class="col-md-4 mr-1 mb-4 border-dark">
                        <div class="card">
                            <div class="card-body bg-info">
                                <img style="width: 20rem; height: 10rem;" class="card-img-top img-fluid" src="${country.flag}" alt="">
                                <h4 style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" class="card-title mt-2">${country.name}</h4>
                                <h5 style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;" class="card-title">${country.capital}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                }
            });
            appLiAsia.innerHTML = display;
        })
        .catch(function(err) {
            console.log(err);
        });

}




function searchCountries() {
    spin.innerHTML = `<div class="spinner-border text-primary m-4" role="status">
    <span class="sr-only"></span>
  </div>`;
    //open the request 

    load_fromPlaceHolder_new()
        .then(function(countries) {
            //iterate over each post [100 countries]
            let toBeSearched = new Array();
            countries.forEach(function(post) {
                toBeSearched.push({name:post.name, flag: post.flag, capital: post.capital});
            });
            let output = '';
            for (let i = 0; i < toBeSearched.length; i++) {
                const searchContent = search.value.toUpperCase();                
                if (toBeSearched[i].name.toUpperCase().indexOf(searchContent) > -1) {   
                output += `
                <div class="col-md-4 mr-1 mb-4 border-dark">
                        <div class="card">
                            <div class="card-body bg-info">
                                <img style="width: 20rem; height: 10rem;" class="card-img-top img-fluid" src="${toBeSearched[i].flag}" alt="">
                                <h4 style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" class="card-title mt-2">${toBeSearched[i].name}</h4>
                                <h5 style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;" class="card-title">${toBeSearched[i].capital}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                }
                
            }
            
            setTimeout( () => {
                spin.innerHTML = ``;
                appLi.innerHTML = output;
            }, 500);

            
         
        })
        .catch(function(err) {
            console.log(err);
        });
        
}