import { requests } from './api.js';

//UI variables
const main = document.querySelector('.detail');

//read from q string
const urlParams = new URLSearchParams(window.location.search);
const id = Number(urlParams.get('id'));

function display(country) {
	let html = `
                <div class="row">
                <div class="col-md-12 justify-content-center">

                    <img src=${country.flag} class="img-fluid rounded" alt="">
                </div>
            </div>

            <div class="row">

                <div class="row">
                    <div class="col-md-6">
                        <h2>Name</h2>
                    </div>
                    <div class="col-md-6">
                        <h2>${country.name}</h2>
                    </div>
                </div>
                <!-- End of Name -->


                <div class="row">
                    <div class="col-md-6">
                        <h2>Native Name</h2>
                    </div>
                    <div class="col-md-6">
                        <h2>${country.nativeName}</h2>
                    </div>
                </div>
                <!-- End of Native Name -->

                    
                                <div class="row">
                    <div class="col-md-6">
                        <h2>Region</h2>
                    </div>
                    <div class="col-md-6">
                        <h2>${country.region}</h2>
                    </div>
                </div>
                <!-- End of Region -->

                <div class="row">
                    <div class="col-md-6">
                        <h2>Sub-region</h2>
                    </div>
                    <div class="col-md-6">
                        <h2>${country.subregion}</h2>
                    </div>
                </div>
                <!-- End of Sub-region -->

                <div class="row">
                    <div class="col-md-6">
                        <h2>Population</h2>
                    </div>
                    <div class="col-md-6">
                        <h2>${country.population}</h2>
                    </div>
                </div>
                <!-- End of Population -->

                            <div class="row">
                    <div class="col-md-6">
                        <h2>Area</h2>
                    </div>
                    <div class="col-md-6">
                        <h2>${country.area}</h2>
                    </div>
                </div>
                <!-- End of Area -->


                <div class="row">
                    <div class="col-md-6">
                        <table class="table">
                            <tr>
                                <td>
                                    <h4 class="text-muted">Location</h4>
                                </td>
                            </tr>
                            <tr>
                                <th>Longtitude</th>
                                <th>${country.latlng[0]}</th>
                            </tr>
                            <tr>
                                <th>
                                    Latitude
                                </th>
                                <th>
                                    ${country.latlng[1]}
                                </th>
                            </tr>
                        </table>
                    </div>
                </div>

            ${currency(country.currencies)}
            
            ${TimeZone(country.timezones)}


            ${Languages(country.languages)}


            </div>
    
    `;

	return html;
}

function currency(lst) {
	let output = `<div class="col-md-6">
                        <table class="table">
                        <h4 class="text-muted">Currency</h4>`;

	console.log(lst);
	lst.forEach((element) => {
		output += `  
                          
                            <tr>
                                <th>Code</th>
                                <th>${element.code}</th>
                            </tr>
                            <!-- End Currency Code -->
                            <tr>
                                <th>
                                    Name
                                </th>
                                <th>
                                    ${element.name}
                                </th>
                            </tr>
                            <!--  End Currency Name -->
                            <tr class="mb-3">
                                <th>
                                    Symbol
                                </th>
                                <th>
                                    ${element.symbol}
                                </th>
                            </tr>
                            
                            <!-- End Currency Symbol -->
                    
              
            `;
	});

	return output + '</table> </div>';
}

function TimeZone(lst) {
	let result = '';

	lst.forEach((element) => {
		result += `<li class="list-group-item">${element}</li>`;
	});

	let output = `                <!-- TimeZone -->
                <div class="row">
                    <h4 class="text-muted">TimeZone</h4>
                    <ul class="list-group">
                       ${result}
                    </ul>
                </div>`;

	return output;
}

function Languages(lst) {
	let output = `<div class="col-md-6">
    <h4 class="text-muted">Language</h4>`;
	lst.forEach((element) => {
		output += `  
                        <table class="table">
                            
                            <tr>
                                <th>Name</th>
                                <th>${element.name}</th>
                            </tr>
                          
                            <tr>
                                <th>
                                    Native Name
                                </th>
                                <th>
                                    ${element.nativeName}
                                </th>
                            </tr>
                      
                        </table>
                    
              
            `;
	});

	return output + '</div>';
}

// console.log(id);
document.addEventListener('DOMContentLoaded', () => {
	requests.ALL().then((val) => val.json()).then((val) => {
		main.innerHTML = display(val[id]);
	});

	//loadDataNew();
});
