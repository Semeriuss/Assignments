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
    displayUserPolicyCategory();
});

const userTablePolicyRow = document.querySelector('.userPolicyRowData');
function displayUserPolicyCategory() {
	return db
		.transaction('r', db.policies, function() {
			db.policies
				.each((val) => insertUserPolicyElement(val))
				.then((res) => {
					// console.log(res);
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

function insertUserPolicyElement(objText) {
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
	link.innerHTML = `<a href="#"><i class="fa fa-plus-circle" aria-hidden="true"></i></a>`;
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

