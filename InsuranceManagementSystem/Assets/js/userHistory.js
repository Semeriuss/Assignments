const tableRow = document.querySelector('.HistoryRowData');
const userName = document.querySelector('#USER');



function addDemo(title) {
	return db
		.transaction('rw', db.approved_policies, function() {
			db.approved_policies
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


// addDemo({ uname: 'checking1', approved_policy: "first policy"});
// addDemo({ uname: 'checking1', approved_policy: "second policy"});
// addDemo({ uname: 'checkandLovely', approved_policy: "third policy"});






function displayUserHistory() {
	return db
		.transaction('r', db.approved_policies, function() {
			db.approved_policies
				.each((element) => {
                    if (element.uname == sessionStorage.getItem("uname")) {
                        insertElement(element);
                    }
                })
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




function insertElement(approved_policy) {
	const tr = document.createElement('tr');
	const td0 = document.createElement('td');
	td0.className = 'approvedPolicyId';
	td0.appendChild(document.createTextNode(approved_policy.id));
	const td = document.createElement('td');
	td.className = 'approvedPolicyName';
	td.appendChild(document.createTextNode(approved_policy.approved_policy));
	tr.appendChild(td0);
	tr.appendChild(td);
	tableRow.appendChild(tr);
}

setTimeout(() => {
    displayUserHistory();
}, 0);
