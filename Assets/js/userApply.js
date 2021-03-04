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
	var con = confirm('Are you sure you want to apply to this insurance?');
	if (con) {
		console.log();
		applyPolicy(sessionStorage.getItem('uname'), pname);
	} else {
		return false;
	}
}

function applyPolicy(user, pname) {
	return db
		.transaction('rw', db.pending_policies, function() {
			db.pending_policies
				.put({ uname: user, policy_name: pname })
				.then((val) => {
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
					insertUserPolicyElement(val, false);
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
				console.log('Checking a Third Time!!!');
				insertUserPolicyElement(value, true);
			}
		})
		.catch((res) => {
			console.log(res);
			return false;
		});
}

function checkBalance(user, policy) {
	console.log('CHECK BALANCE');
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
		link.innerHTML = `<button onclick="clicked('${objText.name}')" class="app" href="#"><i class="fa fa-plus-circle" aria-hidden="true"></i></button>`;
	} else {
		link.innerHTML = `<a class="app" href="#"><i class="fas fa-vote-yea" aria-hidden="true"></i></a>`;
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
