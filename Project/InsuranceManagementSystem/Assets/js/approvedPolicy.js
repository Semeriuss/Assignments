const tableRow = document.querySelector('.approvedRowData');

function addDemo(title) {
	return db
		.transaction('rw', db.pending_policies, function() {
			db.pending_policies
				.add(title)
				.then((val) => {
					console.log('Worked..' + val);
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


function displayApprovedPolicies() {
	return db
		.transaction('r', db.approved_policies, function() {
			db.approved_policies
				.each((element) => insertElement(element))
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

function insertElement(approvedPolicy) {
	const tr = document.createElement('tr');
	const td0 = document.createElement('td');
	td0.className = 'policyId';
	td0.appendChild(document.createTextNode(approvedPolicy.id));
	const td = document.createElement('td');
	td.className = 'customerName';
	td.appendChild(document.createTextNode(approvedPolicy.uname));
	const td2 = document.createElement('td');
	td2.className = 'approvedPolicy';
	td2.appendChild(document.createTextNode(approvedPolicy.approved_policy));

	tr.appendChild(td0);
	tr.appendChild(td);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tableRow.appendChild(tr);
}

displayApprovedPolicies();
