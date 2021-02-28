// $('#edit').click(function() {
// 	var name = $('#insurance_name').val();
// 	var str = 'You Have Successfully Edited a Main Insurance Category';
// 	$('#modal_body').html(str);
// 	updateCat({ name: name, date: new Date().toUTCString() });
// 	displayMainCategory();
// });
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    displayMainCategory();
});

function updateCat(nm) {
	return db
		.transaction('rw', db.main_category, () => {
			db.policies
				// .update(id, input)
				// .put({name: input, data: new date().toUTCString()})
				.where('name').equals(`${nm}`).delete()
				.then((val) => {
					return true;
				})
				.catch(() => {
					return false;
				});
		})
		.catch((e) => {
			console.log(e);
		});
}

function addDemo(title) {
	return db
		.transaction('rw', db.main_category, function() {
			db.main_category
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
// addDemo({ name: 'Life-Insurance', date: new Date().toISOString() });
// addDemo({ name: 'Property-Insurance', date: new Date().toLocaleDateString() });
// addDemo({ name: 'Fire-Insurance', date: new Date().toLocaleDateString() });
// addDemo({ name: 'Liability-Insurance', date: new Date().toString() });
// addDemo({ name: 'Guarantee-Insurance', date: new Date().toUTCString() });

function callback(e) {
    var e = window.e || e;
	var input = {};
	// alert("Here is " + e.target.parentElement.classList + "    " + e.target.classList );
	// var cat = e.target.parentNode.parentNode.previousElementSibling.innerText;
	// var ct = e.target.parentNode.parentNode.previousElementSibling.innerHTML;
	// var inp = document.querySelector('#Cat');
	// alert(inp.value);
	// console.log(inp);
	var con = confirm("Are you sure you want to edit this policy?")
	if(con){
		// alert('The link is: ' + sessionStorage.getItem('uname'));
		var inp = document.querySelector('#Cat');
		var dataID = document.querySelector('#Cat').getAttribute('data-id');
		console.log(document.querySelector('#Cat').innerHTML);
		var catName = inp.value;
		// input.uname = window.sessionStorage.getItem('uname');
		// input.policy_name = policyName;
		// alert("Worked!");
		// e.target.parentElement.innerHTML = `<i class="fas fa-vote-yea" aria-hidden="true"></i>`;
		// updateCat(dataID, {name: catName, date: new Date().toUTCString() });
		updateCat(catName);
	}else{
		return false;
	}	
} 

if (document.addEventListener){
	document.addEventListener('click', function (event) {
		event.preventDefault();
		if(event.target.id == "edit"){
			callback(event);
		}else{
		}
	});
}else{
	// document.attachEvent('onclick', function (event) {
	// 	event.preventDefault();
	// 	callback(event);
	// });
	console.log("OK");
}

const tableRow = document.querySelector('.rowData');
function displayMainCategory() {
	return db
		.transaction('r', db.main_category, function() {
			db.main_category
				.each((val) => insertElement(val))
				.then((res) => {
					return true;
				})
				.catch((res) => {
					return false;
				});
		})
		.catch(function(e) {
			console.error(e.stack);
		});
}

function insertElement(objText) {
	const tr = document.createElement('tr');
	const th = document.createElement('th');
	th.setAttribute('scope', 'row');
	th.appendChild(document.createTextNode(objText.id));
	const td = document.createElement('td');
	td.className = 'mainCat';
	td.appendChild(document.createTextNode(objText.name));
	const td2 = document.createElement('td');
	td2.className = 'date';
	td2.appendChild(document.createTextNode(moment(objText.date).format('YYYY-MM-DD')));
	const link = document.createElement('a');
	link.innerHTML = `<a href="#" data-toggle="modal" data-target="#${objText.name}"><i class ="fas fa-edit"></i></a>
	<div id="${objText.name}" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
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
					<form class="col-md-12 bg-secondary" id="edit">
					  <p class="text-white">Edit the following Information</p>
					  <hr style="background-color: aliceblue;">
					  <div class="form-group mt-4">
					  <!-- <label class="text-white" for="name">Category: </label> -->
						<input style="width: 24.5rem;" data-id = "${objText.id}" value = "${objText.name}" type="text" required id="Cat" class="form-control bg-light">
						<label for="name" id="error_display"></label>
					  </div>
					  <div class="row">
						<div class="col-md-12 mb-4 mt-2">
						  <button class="btn btn-info px-5 p-2 mb-2" id="edit" type="submit">Save Changes</button>
						  <button type="button" class="btn btn-info px-2 p-2 mb-2" data-dismiss="modal">Cancel</button>
						</div>
					  </div>
					</form>
				  <!-- End of Editing Form -->

			</div>
		</div>
	</div>
</div>
	`;
	// link.innerHTML += modal;
	const link2 = document.createElement('a');
	link2.innerHTML = `<a href="#" class="deleteMe" id="${objText.name}"><i class ="fas fa-trash ml-3"></i></a>`;
	const td3 = document.createElement('td');
	td3.className = 'editLink';
	td3.appendChild(link);
	td3.appendChild(link2);
	tr.appendChild(th);
	tr.appendChild(td);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tableRow.appendChild(tr);

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
					<form class="col-md-12 bg-secondary" id="edit">
					  <p class="text-white">Edit the following Information</p>
					  <hr style="background-color: aliceblue;">
					  <div class="form-group mt-4">
					  <!-- <label class="text-white" for="name">Category: </label> -->
						<input style="width: 24.5rem;" type="text" required id="Cat" class="form-control bg-light">
						<label for="name" id="error_display"></label>
					  </div>
					  <div class="row">
						<div class="col-md-12 mb-4 mt-2">
						  <button class="btn btn-info px-5 p-2 mb-2" id="edit" type="submit">Save Changes</button>
						  <button type="button" class="btn btn-info px-2 p-2 mb-2" data-dismiss="modal">Cancel</button>
						</div>
					  </div>
					</form>
				  <!-- End of Editing Form -->

			</div>
		</div>
	</div>
</div>
`;



