var username = document.querySelector('#userName');
var balance = document.querySelector('#balance');
var form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	// console.log(insurance_input.value);
	addBalance(username.value, balance.value);
	form.reset();
});

function addBalance(unm, blnc) {
	return db
		.transaction('rw', db.users, function() {
			db.users.where('uname').equals(unm).modify({ balance: Number(blnc) }).catch((val) => {
				console.log('Some Error Happened', val);
			});
		})
		.catch((e) => {
			console.log(e);
		});
}
