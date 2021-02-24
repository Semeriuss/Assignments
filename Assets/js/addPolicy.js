var form = document.querySelector('#form');
var category = document.querySelector('#cat');
var subCategory = document.querySelector('#subcat');
var policyName = document.querySelector('#policyName');
var sumAssured = document.querySelector('#sumAssured');
var premium = document.querySelector('#premium');
var tenure = document.querySelector('#tenure');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log(category.value);
	console.log(subCategory.value);
	console.log(policyName.value);
	console.log(sumAssured.value);
	console.log(premium.value);
	console.log(tenure.value);

	form.reset();
});

function addPolicy(title) {
	console.log('ADD POLICY');
	return db
		.transaction('rw', db.policies, function() {
			db.policies
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
			console.log('ERROR \n\n');
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

function fetchSub() {
	return db
		.transaction('r', db.sub_category, function() {
			db.sub_category
				.each((val) => {
					// console.log(val.name);
					subCategory.options[subCategory.options.length] = new Option(val.name, val.name);
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

fetchMain();
fetchSub();

// addPolicy({
// 	name: 'Policy 202',
// 	maincat: 'Guarantee-Insurance',
// 	subcat: 'TEST',
// 	description: 'Sapiente exercitationem veniam aperiam ratione assumenda!',
// 	premium: '500',
// 	sum_assured: '20,000',
// 	date: new Date().toUTCString()
// });

// addPolicy({
// 	name: 'Policy V',
// 	maincat: 'Life-Insurance',
// 	subcat: 'Health',
// 	description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
// 	premium: '500',
// 	sum_assured: '20,000',
// 	date: new Date().toUTCString()
// });
// addPolicy({
// 	name: 'Policy W',
// 	maincat: 'Property-Insurance',
// 	subcat: 'Motor',
// 	description: 'Illo quisquam perspiciatis velit necessitatibus ducimus natus',
// 	premium: '500',
// 	sum_assured: '20,000',
// 	date: new Date().toUTCString()
// });
// addPolicy({
// 	name: 'Policy X',
// 	maincat: 'Fire-Insurance',
// 	subcat: 'Cycle',
// 	description: 'Itaque numquam omnis ut autem, modi culpa sapiente exercitationem',
// 	premium: '500',
// 	sum_assured: '20,000',
// 	date: new Date().toUTCString()
// });
// addPolicy({
// 	name: 'Policy Y',
// 	maincat: 'Liability-Insurance',
// 	subcat: 'Travel',
// 	description: 'Omnis modi culpa sapiente veniam aperiam ratione assumenda!',
// 	premium: '500',
// 	sum_assured: '20,000',
// 	date: new Date().toUTCString()
// });
