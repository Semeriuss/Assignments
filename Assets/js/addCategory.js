var form = document.querySelector('#form');
var insurance_input = document.getElementById('insurance_name');
var error_label = document.getElementById('error_display');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	// console.log(insurance_input.value);
	addMainCat({ name: insurance_input.value, date: new Date() });
});

function addMainCat(main) {
	// console.log(main);
	return db
		.transaction('rw', db.main_category, function() {
			db.main_category
				.add(main)
				.then((val) => {
					console.log('Worked..', val);
					// return true;
				})
				.catch((val) => {
					console.log('Some Error Happened', val);
					// return false;
				});
		})
		.catch((e) => {
			console.log(e);
		});
}

// addMainCat({ name: 'Life Insurance' });
