const tableRow = document.querySelector('.disapprovedrowData');


function addDemo(title) {
	return db
		.transaction('rw', db.disapproved_policy, function() {
			db.disapproved_policy
				.add(title)
				.then((val) => {
					console.log("Worked.." + val);
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
			db.pending_policies
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




function insertElement(disapprovedPolicy) {
	const tr = document.createElement('tr');
	const td0 = document.createElement('td');
	td0.className = 'policyId';
	td0.appendChild(document.createTextNode(disapprovedPolicy.id));
	const td = document.createElement('td');
	td.className = 'customerName';
	td.appendChild(document.createTextNode(disapprovedPolicy.uname));
	const td2 = document.createElement('td');
	td2.className = 'disapprovedPolicy';
	td2.appendChild(document.createTextNode(disapprovedPolicy.disapproved_policy));

	tr.appendChild(td0);
	tr.appendChild(td);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tableRow.appendChild(tr);
}


displayApprovedPolicies();