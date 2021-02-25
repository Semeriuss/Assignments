//UI variables
const main = document.querySelector('.main');

//read from q string
const urlParams = new URLSearchParams(window.location.search);
const id = Number(urlParams.get('id'));

function display(country) {
	let html = `
    
    `;
}


function currency(lst) {
	let output = ``;
	lst.forEach((element) => {
		output += `  <div class="col-md-6">
                        <table class="table">
                            <tr>
                                <td>Currency</td>
                            </tr>
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
                            <tr>
                                <th>
                                    Symbol
                                </th>
                                <th>
                                    ${element.symbol}
                                </th>
                            </tr>
                            <!-- End Currency Symbol -->
                        </table>
                    </div>
              
            `;
	});

	return output;
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
                </div>`

	return output;
}
