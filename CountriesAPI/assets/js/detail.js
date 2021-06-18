import { requests } from './api.js';

//UI variables
const main = document.querySelector('.detail');

//read from q string
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

function disp(country){
    let html = `
    <div class="card" id="dbody">
        <div class="row my-auto">
            <div class="d-flex justify-content-center  my-auto ">
                <img src=${country.flag} class="img" id="dflag" alt="">
            </div>
        </div>

        <div class="row rowback m-5" style="background-color:antiquewhite;">
            <div class="card col-md-8 my-2 mx-auto">
                <div class="row ">
    
            <div class="row">
                <div class="col-md-6">
                    <h2 class="detailHeading">Name</h2>
                </div>
                <div class="col-md-6">
                    <h2>${country.name}</h2>
                </div>
            </div>
        
        
        <!-- End of Name -->


        <div class="row">
            <div class="col-md-6">
            
                <h2 class="detailHeading">Native Name</h2>
            </div>
            <div class="col-md-6">
                <h2>${country.nativeName}</h2>
            </div>
        </div>
        <!-- End of Native Name -->

            
        <div class="row">
            <div class="col-md-6">
                <h2 class="detailHeading">Region</h2>
            </div>
            <div class="col-md-6">
                <h2>${country.region}</h2>
            </div>
        </div>
        <!-- End of Region -->

        <div class="row">
            <div class="col-md-6">
                <h2 class="detailHeading">Sub-region</h2>
            </div>
            <div class="col-md-6">
                <h2>${country.subregion}</h2>
            </div>
        </div>
        <!-- End of Sub-region -->

        <div class="row">
            <div class="col-md-6">
                <h2 class="detailHeading">Population</h2>
            </div>
            <div class="col-md-6">
                <h2>${country.population}</h2>
            </div>
        </div>
        <!-- End of Population -->

        <div class="row">
            <div class="col-md-6">
                <h2 class="detailHeading">Area</h2>
            </div>
            <div class="col-md-6">
                <h2>${country.area}</h2>
            </div>
        </div>
        
        <!-- End of Area -->
        </div>
        </div>
        
        <div class="card col-md-8 my-auto mx-auto">
        <div class="row">
            <div class="">
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
        </div>
            <div>
            ${Languages(country.languages)}
            </div>
            <div>
            ${currency(country.currencies)} 
            </div>
            <div>
            ${TimeZone(country.timezones)} 
            </div>
        </div>
        
            


        

   
            
        </div>
    </div>    
    `;

return html;
   
}

function display(country) {
	let html = `<div class="card" id="dbody">
                    <div class="row my-auto">
                    
                        ${flag(country)}
                        
                        ${detailInfo(country)}

                        ${Languages(country.languages)}

                        ${currency(country.currencies)} 

                        ${TimeZone(country.timezones)} 
                        
                    </div>
                </div>    
    `;

	return html;
}

function detailInfo(country) {
	return ` 
        <div class="row rowback m-5 bg-dark">
            <div class="card col-md-8 my-2 mx-auto">
                <div class="row ">
    
            <div class="row">
                <div class="col-md-6">
                    <h2 class="detailHeading">Name</h2>
                </div>
                <div class="col-md-6">
                    <h2>${country.name}</h2>
                </div>
            </div>
        
        
        <!-- End of Name -->


        <div class="row">
            <div class="col-md-6">
            
                <h2 class="detailHeading">Native Name</h2>
            </div>
            <div class="col-md-6">
                <h2>${country.nativeName}</h2>
            </div>
        </div>
        <!-- End of Native Name -->

            
                        <div class="row">
            <div class="col-md-6">
                <h2 class="detailHeading">Region</h2>
            </div>
            <div class="col-md-6">
                <h2>${country.region}</h2>
            </div>
        </div>
        <!-- End of Region -->

        <div class="row">
            <div class="col-md-6">
                <h2 class="detailHeading">Sub-region</h2>
            </div>
            <div class="col-md-6">
                <h2>${country.subregion}</h2>
            </div>
        </div>
        <!-- End of Sub-region -->

        <div class="row">
            <div class="col-md-6">
                <h2 class="detailHeading">Population</h2>
            </div>
            <div class="col-md-6">
                <h2>${country.population}</h2>
            </div>
        </div>
        <!-- End of Population -->

                    <div class="row">
            <div class="col-md-6">
                <h2 class="detailHeading">Area</h2>
            </div>
            <div class="col-md-6">
                <h2>${country.area}</h2>
            </div>
        </div>
        
        <!-- End of Area -->
        </div>
        </div>
        
        <div class="card col-md-8 my-auto mx-auto">
        <div class="row">
            <div class="">
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
        </div>
        </div>
`;
}

function flag(country) {
	return `  <div class="d-flex justify-content-center  my-auto ">
                    <img src=${country.flag} class="img" id="dflag" alt="">
                </div>
            </div>`;
}

function currency(lst) {
	let output = `<div class="card col-md-6 my-3 mx-auto">
                    <div class="col-md-6">
                        <table class="table">
                        <h4 class="text">Currency</h4>`;

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

	return output + '</table> </div> </div>';
}
function Languages(lst) {
    // <div class="row rowback m-5">
	let output = `<div class="card col-md-6 my-3 mx-auto">
    <div class="col-md-6">
    <h4>Language</h4>`;
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

	return output + '</div> </div>';
}

function TimeZone(lst) {
	let result = '';

	lst.forEach((element) => {
		result += `<li class="list-group-item">${element}</li>`;
	});

	let output = `                <!-- TimeZone -->
    <div class="card col-md-6 mx-auto mb-3">
                <div class="row my-3 mx-auto">
                    <h4 class="text-muted">TimeZone</h4>
                    <ul class="list-group">
                       ${result}
                    </ul>
                 </div>`;

	return output;
}

// console.log(id);
document.addEventListener('DOMContentLoaded', () => {
	// requests.().then((val) => val.json()).then((val) => {

	// 	main.innerHTML = display(val);
	// });

	console.log(id);

	requests
		.FULL_NAME(id)
		.then((val) => {
			return val.json();
			// main.innerHTML = display(val.json());
		})
		.then((val) => {
			console.log(val);
			main.innerHTML = disp(val[0]);
		});

	//loadDataNew();
});
