var db = new Dexie('RETEX');

db.version(1).stores({
	users: '++id,fname,lname,&uname,psd,email,dob,policies,admin,balance',
	policies: '++id,&name, subcat,description,premium,sum_assured',
	main_category: '++id,&name',
	sub_category: '++id,&name',
	pending_policies: 'uname,policy_name'
});

function addDemo(title){
    return db
		.transaction('rw', db.main_category, function() {
			db.main_category
				.add(title)
				.then((val) => {
					// console.log("Worked.." + val);
					return true;
				})
				.catch((val) => {
					console.log("Some Error Happened" + val);
					return false;
				});
		})
		.catch(function(e) {
			console.error(e.stack);
		});
}
addDemo({name: "Life-Insurance"});
addDemo({name: 'Property-Insurance'});
addDemo({name: 'Fire-Insurance'});
addDemo({name: 'Liability-Insurance'});
addDemo({name: 'Guarantee-Insurance'});

const tableRow = document.querySelector('.rowData');
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
// document.write(today);
// db.main_category.each(cateogry => console.table(cateogry.id));
// const catArr = await db.main_category.toArray();

function displayMainCategory() {
	return db
		.transaction('r', db.main_category, function() {
			db.main_category
                .each(val => insertElement(val))
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

function insertElement(objText){
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    th.setAttribute('scope', 'row')
    th.appendChild(document.createTextNode(objText.id))
    const td = document.createElement('td');
    td.className = 'rowDate'
    td.appendChild(document.createTextNode(objText.name));
    const td2 = document.createElement('td');
    td2.className = 'rowVals'
    td2.appendChild(document.createTextNode(today));
    const link = document.createElement('a');
    link.innerHTML = `<a href="edit.html">Edit Insurance Category</a>`
    const td3 = document.createElement('td');
    td3.className = 'rowLink'
    td3.appendChild(link);
    tr.appendChild(th);
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tableRow.appendChild(tr);
}

displayMainCategory();