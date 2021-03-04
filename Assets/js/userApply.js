const userTablePolicyRow = document.querySelector('.userPolicyRowData');

window.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM fully loaded and parsed');

	displayUserPolicyCategory();
});
function callback(e) {
	console.log('Checking...');
	var e = window.e || e;
	var input = {};

	var con = confirm('Are you sure you want to apply to this insurance?');
	if (con) {
		var policyName = e.target.parentNode.parentElement.getAttribute('data-policy');
		input.uname = window.sessionStorage.getItem('uname');
		input.policy_name = policyName;

		e.target.parentElement.innerHTML = `<i class="fas fa-vote-yea" aria-hidden="true"></i>`;
		applyPolicy(input);
	} else {
		return false;
	}
}

function clicked(pname) {
	// if (document.addEventListener) {
	// 	document.addEventListener('click', function(event) {
	// 		event.preventDefault();
	// 		if (event.target.classList == 'fa fa-plus-circle') {
	// 			console.log('Clicked Check');
	// 			callback(event);
	// 		} else {
	// 		}
	// 	});
	// }
	// console.log('Checking...');
	// var e = window.e || e;
	// var input = {};
	// alert("Here is " + e.target.parentElement.classList + "    " + e.target.classList );
	var con = confirm('Are you sure you want to apply to this insurance?');
	if (con) {
		applyPolicy(sessionStorage.getItem('uname'), pname);
	} else {
		return false;
	}
}

function applyPolicy(uname, pname) {
	console.log('BREAK 1');
	return db
		.transaction('rw', db.pending_policies, function() {
			db.pending_policies
				.add({ uname: uname, policy_name: pname })
				.then((val) => console.log('BREAK 2'))
				.catch((e) => {
					console.log(e.stack);
					return false;
				});
		})
		.catch(function(e) {
			console.error(e.stack);
		});
}

function displayUserPolicyCategory() {
	return db
		.transaction('rw', db.policies, db.pending_policies, function() {
			db.policies
				.each((val) => {
					checkPend(val).then((value) => {
						console.log(value);
						if (typeof value == 'undefined') {
							value = false;
						}
						insertUserPolicyElement(val, value);
					});
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
function checkPend(value) {
	return db.pending_policies
		.each((val) => {
			if (val.uname == sessionStorage.getItem('uname') && value.name == val.policy_name) {
				console.log('BREAK A');
				return true;
			} else {
				console.log('BREAK B');
				return false;
			}
		})
		.catch((res) => {
			console.log(res);
			return false;
		});
}

function checkBalance(user, policy) {
	return db.users.get({ uname: user }).then((customer) => {
		if (customer.balance >= policy.premium) {
			return true;
		} else {
			return false;
		}
	});
}

function insertUserPolicyElement(objText, bool) {
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
	if (!bool) {
		link.innerHTML = `<button  class="app" onclick="clicked('${objText.name}')"><i class="fa fa-plus-circle" aria-hidden="true"></i></button>`;
	} else {
		link.innerHTML = `<a  class="app" href="#"><i class="fas fa-vote-yea" aria-hidden="true"></i></a>`;
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
