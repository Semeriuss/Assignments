var db = new Dexie('RETEX');

db.version(1).stores({
	users: '++id,fname,lname,&uname,psd,email,dob,policies,admin,balance',
	policies: '++id,&name, subcat,description,premium,sum_assured',
	main_category: '++id,&name',
	sub_category: '++id,&name',
	pending_policies: 'uname,policy_name'
});

function addSubDemo(title){
    return db
		.transaction('rw', db.sub_category, function() {
			db.sub_category
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
// addSubDemo({name: "Health"});
// addSubDemo({name: 'Motor'});
// addSubDemo({name: 'Cycle'});
// addSubDemo({name: 'Travel'});
// addSubDemo({name: 'Mobile'});

const tableSubRow = document.querySelector('.subRowData');
var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = date.getFullYear();

date = mm + '/' + dd + '/' + yyyy;
// document.write(today);
// db.main_category.each(cateogry => console.table(cateogry.id));
// const catArr = await db.main_category.toArray();

function displaySubCategory() {
	return db
		.transaction('r', db.sub_category, function() {
			db.sub_category
                .each(val => insertSubElement(val))
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



function insertSubElement(objText){
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    th.setAttribute('scope', 'row');
    th.appendChild(document.createTextNode(objText.id));
    const td = document.createElement('td');
    td.className = 'mainRowName';
    td.appendChild(document.createTextNode("Selected Insurance"));
    const td1 = document.createElement('td');
    td1.className = 'subRowVals';
    td1.appendChild(document.createTextNode(objText.name));
    const td2 = document.createElement('td');
    td2.className = 'subRowDate';
    td2.appendChild(document.createTextNode(date));
    const link = document.createElement('a');
    link.innerHTML = `<a href="edit.html">Edit Insurance Category</a>`
    const td3 = document.createElement('td');
    td3.className = 'subRowLink';
    td3.appendChild(link);
    tr.appendChild(th);
    tr.appendChild(td);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tableSubRow.appendChild(tr);
}

displaySubCategory();