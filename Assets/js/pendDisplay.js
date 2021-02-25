const tableRow = document.querySelector('.rowData');


function addDemo(title) {
	return db
		.transaction('rw', db.pending_policies, function() {
			db.pending_policies
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


// addDemo({ uname: 'checking1', policy_name: "first policy" });
// addDemo({ uname: 'Lovely1', policy_name: "second policy" });
// addDemo({ uname: 'checkandLovely', policy_name: "third policy" });






function displayPendingPolicies() {
	return db
		.transaction('r', db.pending_policies, function() {
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




function insertElement(pendingPolicy) {
	const tr = document.createElement('tr');
	const td0 = document.createElement('td');
	td0.className = 'policyId';
	td0.appendChild(document.createTextNode(pendingPolicy.id));
	const td = document.createElement('td');
	td.className = 'customerName';
	td.appendChild(document.createTextNode(pendingPolicy.uname));
	const td2 = document.createElement('td');
	td2.className = 'date';
	td2.appendChild(document.createTextNode(pendingPolicy.policy_name));
	const link = document.createElement('a');
	link.innerHTML = `<a href="#"><i class ="fas fa-vote-yea"></i></a>`;
    const link2 = document.createElement('a');
	link2.innerHTML = `<a href="#"><i class ="fas fa-times-circle ml-3"></i></a>`;
	const td3 = document.createElement('td');
	td3.className = 'editLink';
	td3.appendChild(link);
    td3.appendChild(link2);
	tr.appendChild(td0);
	tr.appendChild(td);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tableRow.appendChild(tr);
}


displayPendingPolicies();