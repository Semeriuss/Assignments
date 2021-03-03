// var db = new Dexie('RETEX');

// db.version(1).stores({
// 	users: '++id,fname,lname,&uname,psd,email,dob,policies,admin,balance',
// 	policies: '++id,&name, maincat, subcat,description,premium,sum_assured, date',
// 	main_category: '++id,&name, date',
// 	sub_category: '++id,&name, maincat, date',
// 	pending_policies: 'uname,policy_name'
// });

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
	// console.log(window.sessionStorage.getItem('uname'));
    displayUserPolicyCategory();	
});
function callback(e) {
	console.log("Checking...");
    var e = window.e || e;
	var input = {};
	// alert("Here is " + e.target.parentElement.classList + "    " + e.target.classList );
	var con = confirm("Are you sure you want to apply to this insurance?")
	if(con){
		// alert('The link is: ' + sessionStorage.getItem('uname'));
		var policyName = e.target.parentNode.parentElement.getAttribute('data-policy');
		input.uname = window.sessionStorage.getItem('uname');
		input.policy_name = policyName;
		// alert("Worked!");
		e.target.parentElement.innerHTML = `<i class="fas fa-vote-yea" aria-hidden="true"></i>`;
		applyPolicy(input);
	}else{
		return false;
	}	
} 

function clicked(){
	if (document.addEventListener){
		document.addEventListener('click', function (event) {
			event.preventDefault();
			if(event.target.classList == "fa fa-plus-circle"){
				console.log("Clicked Check");
				callback(event);
			}else{
			}
		});
	}
}

function applyPolicy(textObj) {
	return db
		.transaction('rw', db.pending_policies, function() {
			db.pending_policies
				.add(textObj)
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


const userTablePolicyRow = document.querySelector('.userPolicyRowData');
function displayUserPolicyCategory() {

	return db
		.transaction('rw', db.policies, db.pending_policies, function() {
			db.policies
				.each((val) => {
					return checkPend(val)
				}) //insertUserPolicyElement(val))
				// .then((res) => {
				// 	 console.log("Check");
				// 	return true;
				// })
				.catch((res) => {
					console.log(res);
					return false;
				});
		})
		.catch(function(e) {
			console.error(e.stack);
		});
}
function checkPend(value) {
	return db.pending_policies
		.each((val) => {
			console.log("Check");
		if(val.uname == sessionStorage.getItem('uname') && value.name == val.policy_name){
			// console.log("Checking a Third Time!!!");
			insertUserPolicyElement(value, true);
		}else{
			insertUserPolicyElement(value, false);
		}
	}).catch((res) => {
		console.log(res);
		return false;
	});
}

function checkBalance(user, policy) {
	console.log("CHECK BALANCE");
	return db.users
		.get({uname: user }).then((customer) => {
			if(customer.balance >= policy.premium){return true;}
			else{return false;}
		})

}

function insertUserPolicyElement(objText, bool) {
	// console.log("Checking..");
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
	if(!bool){
		link.innerHTML = `<a class="app" href="#"><i class="fa fa-plus-circle" aria-hidden="true"></i></a>`;
	}else{
		link.innerHTML = `<a onclick="clicked()" class="app" href="#"><i class="fas fa-vote-yea" aria-hidden="true"></i></a>`;
	}
	link.setAttribute('data-policy', `${objText.name}`);
	const td6 = document.createElement('td');
	td6.className = 'applyLink';
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
	userTablePolicyRow.appendChild(tr);
}

//{ uname: 'checking1', policy_name: "first policy" }
// data-uname='window.sessionStorage.getItem('uname')' data-policy='${objText.name}'
// '{uname: ${window.sessionStorage.getItem('uname')}, policy_name: ${objText.name}}'