var db = new Dexie('RETEX');

db.version(1).stores({
	users: '++id,fname,lname,&uname,psd,email,dob,policies,admin,balance',
	policies: '++id,&name, maincat, subcat,description,premium,sum_assured, date',
	main_category: '++id,&name, date',
	sub_category: '++id,&name, maincat, date',
	pending_policies: 'uname,policy_name'
});

function addSubDemo(title) {
	return db
		.transaction('rw', db.sub_category, function() {
			db.sub_category
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
// addSubDemo({name: "Health", maincat: "Life-Insurance", date: new Date().toUTCString()});
// addSubDemo({name: "Motor", maincat: "Property-Insurance", date: new Date().toUTCString()});
// addSubDemo({name: "Cycle", maincat: "Fire-Insurance", date: new Date().toUTCString()});
// addSubDemo({name: "Travel", maincat: "Liability-Insurance", date: new Date().toUTCString()});
// addSubDemo({name: "Mobile", maincat: "Guarantee-Insurance", date: new Date().toUTCString()});

const tableSubRow = document.querySelector('.subRowData');
function displaySubCategory() {
	return db
		.transaction('r', db.sub_category, function() {
			db.sub_category
				.each((val) => insertSubElement(val))
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
// let main = 0;
// async function getMainCategory(key){
//     // let objName = db.main_category.get({id: key});
//     // return objName;
//     let dbArr = db.main_category.toArray();
//     await db.main_category.each(element => {
//         // console.log(element.id);
//         if(element.id == key){
//             console.log("Worked!!!")
//             main = element.name;
//             return main;
//         }

//         // console.log("Processing...");
//     });
//     return main;

// }
// console.log(getMainCategory(1));
// console.log(main);
// // console.log(getMainCategory(1));

// // console.log(db.main_category.each(category => console.log(category.name)));
// // console.log(db.main_category.get('name').where('name').equals('Fire-Insurance'));

function insertSubElement(objText) {
	const tr = document.createElement('tr');
	const th = document.createElement('th');
	th.setAttribute('scope', 'row');
	th.appendChild(document.createTextNode(objText.id));
	const td = document.createElement('td');
	td.className = 'maincat';
	td.appendChild(document.createTextNode(objText.maincat));
	const td1 = document.createElement('td');
	td1.className = 'subcat';
	td1.appendChild(document.createTextNode(objText.name));
	const td2 = document.createElement('td');
	td2.className = 'date';
	td2.appendChild(document.createTextNode(moment(objText.date).format('YYYY-MM-DD')));
	const link = document.createElement('a');
	link.innerHTML = `<a href="edit.html"><i class="fas fa-edit"></i></a>`;
	const td3 = document.createElement('td');
	td3.className = 'editLink';
	td3.appendChild(link);
	tr.appendChild(th);
	tr.appendChild(td);
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tableSubRow.appendChild(tr);
}

displaySubCategory();
