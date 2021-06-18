var category = document.querySelector('#cat');
var form = document.querySelector('#form');
var sub_name = document.querySelector('#name');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	addSub({ name: sub_name.value, maincat: category.value, date: new Date() });
	form.reset();
});

function addSub(subCat) {
	return db
		.transaction('rw', db.sub_category, function() {
			db.sub_category
				.add(subCat)
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

function fetchMain() {
	return db
		.transaction('r', db.main_category, function() {
			db.main_category
				.each((val) => {
					// console.log(val.name);
					category.options[category.options.length] = new Option(val.name, val.name);
				})
				.then((res) => {
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

// function insertElement(val) {
// 	category.options[category.options.length] = new Option(val);
// }

fetchMain();
