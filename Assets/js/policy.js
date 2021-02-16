//Database isn't finding db from app.js...hence I brought it here @Semeriuss
var db = new Dexie('RETEX');

db.version(1).stores({
	users: '++id,fname,lname,&uname,psd,email,dob,policies,admin,balance',
	policies: '++id,&name, maincat, subcat,description,premium,sum_assured, date',
	main_category: '++id,&name, date',
	sub_category: '++id,&name, maincat, date',
	pending_policies: 'uname,policy_name'
});


function addPolicyDemo(title) {
	return db
		.transaction('rw', db.policies, function() {
			db.policies
				.add(title)
				.then((val) => {
					// console.log("Worked.." + val);
					return true;
				})
				.catch((val) => {
					console.log('Some Error Happened' + val);
					return false;
				});
		})
		.catch(function(e) {
			console.error(e.stack);
		});
}
addPolicyDemo({
	name: 'Policy V',
	maincat: 'Life-Insurance',
	subcat: 'Health',
	description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
	premium: '500',
	sum_assured: '20,000',
	date: new Date().toUTCString()
});
addPolicyDemo({
	name: 'Policy W',
	maincat: 'Property-Insurance',
	subcat: 'Motor',
	description: 'Illo quisquam perspiciatis velit necessitatibus ducimus natus',
	premium: '500',
	sum_assured: '20,000',
	date: new Date().toUTCString()
});
addPolicyDemo({
	name: 'Policy X',
	maincat: 'Fire-Insurance',
	subcat: 'Cycle',
	description: 'Itaque numquam omnis ut autem, modi culpa sapiente exercitationem',
	premium: '500',
	sum_assured: '20,000',
	date: new Date().toUTCString()
});
addPolicyDemo({
	name: 'Policy Y',
	maincat: 'Liability-Insurance',
	subcat: 'Travel',
	description: 'Omnis modi culpa sapiente veniam aperiam ratione assumenda!',
	premium: '500',
	sum_assured: '20,000',
	date: new Date().toUTCString()
});
addPolicyDemo({
	name: 'Policy Z',
	maincat: 'Guarantee-Insurance',
	subcat: 'Mobile',
	description: 'Sapiente exercitationem veniam aperiam ratione assumenda!',
	premium: '500',
	sum_assured: '20,000',
	date: new Date().toUTCString()
});

const tablePolicyRow = document.querySelector('.policyRowData');
function displayPolicyCategory() {
	return db
		.transaction('r', db.policies, function() {
			db.policies
				.each((val) => insertPolicyElement(val))
				.then((res) => {
					console.log(res);
					return true;
				})
				.catch((res) => {
					console.log(res);
					return false;
				});
		})
		.catch(function(e) {
			console.error(e.stack);
		});
}

function insertPolicyElement(objText) {
	const tr = document.createElement('tr');
	const th = document.createElement('th');
	th.setAttribute('scope', 'row');
	th.appendChild(document.createTextNode(objText.id));
	const td0 = document.createElement('td');
	td0.className = 'policyName';
	td0.appendChild(document.createTextNode(objText.name));
	const td = document.createElement('td');
	td.className = 'mainCategory';
	td.appendChild(document.createTextNode(objText.maincat));
	const td1 = document.createElement('td');
	td1.className = 'subCategory';
	td1.appendChild(document.createTextNode(objText.subcat));
	const td2 = document.createElement('td');
	td2.className = 'description';
	td2.appendChild(document.createTextNode(objText.description));
	const td3 = document.createElement('td');
	td3.className = 'sumAssured';
	td3.appendChild(document.createTextNode(objText.sum_assured));
	const td4 = document.createElement('td');
	td4.className = 'premium';
	td4.appendChild(document.createTextNode(objText.premium));
	const td5 = document.createElement('td');
	td5.className = 'policyDate';
	td5.appendChild(document.createTextNode(moment(objText.date).format('YYYY-MM-DD')));
	const link = document.createElement('a');
	link.innerHTML = `<a href="#" data-toggle="modal" data-target="#editModal"><i class ="fas fa-edit"></i></a>`;
	link.innerHTML += modal;
	const td6 = document.createElement('td');
	td6.className = 'editLink';
	td6.appendChild(link);
	tr.appendChild(th);
	tr.appendChild(td0);
	tr.appendChild(td);
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	tr.appendChild(td5);
	tr.appendChild(td6);
	tablePolicyRow.appendChild(tr);
}

var modal = `
<div id="editModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="editModalLabel">Edit</h4>  
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">

				<!-- Start of Editing Form -->
				<form class="col-md-12 bg-secondary" id="form">

				<p class="text-white">Edit the following Information</p>
				<hr style="background-color: aliceblue;">
				<div class="form-group mt-4">
				  <label class="text-white" for="category">Category: </label><br>
				  <select style="width: 24.5rem;" name="category" id="cat">
					<option value="Select Category">Select Category</option>
					<option value="volvo">Volvo</option>
					<option value="saab">Saab</option>
					<option value="mercedes">Mercedes</option>
					<option value="audi">Audi</option>
				  </select>
				</div>
				<div class="form-group mt-4">
				  <label class="text-white" for="subcategory">Sub Category Name: </label>
				  <select style="width: 24.5rem;" name="subcategory" id="subcat">
					<option value="Select Category">Select Category</option>
					<option value="volvo">Hyundai</option>
					<option value="saab">BMW</option>
					<option value="mercedes">Toyota</option>
					<option value="audi">Nissan</option>
				  </select>
				</div>
				<div class="form-group mt-1">
				  <label class="text-white" for="policyName">Policy Name: </label>
				  <input style="width: 24.5rem;" type="text" required id="policyName" class="form-control bg-light">
				</div>
				<div class="form-group mt-1">
				  <label class="text-white" for="sumAssured">Sum Assured: </label>
				  <input style="width: 24.5rem;" type="text" required id="sumAssured" class="form-control bg-light">
				</div>
				<div class="form-group mt-1">
				  <label class="text-white" for="premium">Premium: </label>
				  <input style="width: 24.5rem;" type="text" required id="premium" class="form-control bg-light">
				</div>
				<div class="form-group mt-1">
				  <label class="text-white" for="tenure">Tenure: </label>
				  <input style="width: 24.5rem;" type="text" required id="tenure" class="form-control bg-light">
				</div>
				<div class="row">
				  <div class="col-md-12 align-self-center ">
					<button class="btn btn-info px-4 p-2 my-2 ">Save Changes</button>
				  </div>
				</div>
			  </form>
				  <!-- End of Editing Form -->

			</div>
		</div>
	</div>
</div>
`
displayPolicyCategory();
