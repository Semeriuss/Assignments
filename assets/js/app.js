import { requests } from "./api.js";

const appLi = document.getElementById('view');

//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
    //load_fromPlaceHolder();
    loadDataNew();
});

//load a single customer function 
function load_fromPlaceHolder() {

    //open the request 
    requests.ALL()
        .then(function(res) {
            return res.json(); //return the JSON Promise
        })
        .then(function(items) {
            //iterate over each countries
            countries.forEach(function(country) {
                display += `
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <img height="40" width="40" class="card-img-top img-fluid" src="${country.flag}" alt="">
                            <h4 class="card-title">${country.name}</h4>
                            <h6 class="card-title">${country.capital}</h6>
                            <p class="card-text">Lorem ipsum dolor sit</p>
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

