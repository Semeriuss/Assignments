var form = document.querySelector('#form');
var insurance_input = document.getElementById('insurance_name');
var error_label = document.getElementById('error_display');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	addMainCat({ name: insurance_input.value, date: new Date() });
	form.reset();
});

function addMainCat(main) {
	return db
		.transaction('rw', db.main_category, function() {
			db.main_category
				.add(main)
				.then((val) => {
					console.log('Worked..', val);
				})
				.catch((val) => {
					console.log('Some Error Happened', val);
				});
		})
		.catch((e) => {
			console.log(e);
		});
}
