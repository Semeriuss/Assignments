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
	addPolicy({
		name: policyName.value,
		maincat: category.value,
		subcat: subCategory.value,
		description: desc.value,
		premium: premium.value,
		sum_assured: sumAssured.value,
		date: policyDate
	});
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
					category.options[category.options.length] = catSet.has(val.maincat)
						? console.log()
						: new Option(val.maincat, val.maincat);
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
