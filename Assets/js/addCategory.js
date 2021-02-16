function addMainCat(main) {
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
			console.error(e.stack);
		});
}

var form = document.querySelector('#form');
var insurance_input = document.getElementById('insurance_name');
var error_label = document.getElementById('error_display');

form.addEventListener('submit', () => {
	console.log(insurance_input.value);
	addMainCat({ name: insurance_input.value });
});

// addMainCat({ name: 'Life Insurance' });
