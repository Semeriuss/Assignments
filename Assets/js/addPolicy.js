var form = document.querySelector('#form');
var category = document.querySelector('#cat');
var subCategory = document.querySelector('#subcat');
var policyName = document.querySelector('#policyName');
var sumAssured = document.querySelector('#sumAssured');
var premium = document.querySelector('#premium');
var desc = document.querySelector('#policyDesc');
var policyDate = new Date().toUTCString();



form.addEventListener('submit', (e) => {
	e.preventDefault();
	addPolicy({name: policyName.value, maincat: category.value, subcat: subCategory.value, description: desc.value,	premium: premium.value, sum_assured: sumAssured.value, date: policyDate});
	form.reset();
});

var catSet = new Set();
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

function fetchSub() {
	return db
		.transaction('r', db.sub_category, function() {
			db.sub_category
				.each((val) => {
					// console.log(catSet);
					category.options[category.options.length] = catSet.has(val.maincat) ? console.log(): new Option(val.maincat, val.maincat);
					subCategory.options[subCategory.options.length] = new Option(val.name, val.name);
					catSet.add(val.maincat);
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

// console.log('ADD START');
// addPolicy({
// 	name: 'TEST 2',
// 	maincat: 'TEST Insurance',
// 	subcat: 'Travel',
// 	description: 'Omnis modi culpa sapiente veniam aperiam ratione assumenda!',
// 	premium: '500',
// 	sum_assured: '20,000',
// 	date: new Date().toUTCString()
// });
