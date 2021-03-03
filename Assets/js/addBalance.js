// function addBalance(uname, amount) {
// 	return db
// 		.transaction('rw', db.users, async () => {
// 			return db.users.where({ uname }).modify((user) => (user.balance += amount));
// 		})
// 		.catch((e) => {
// 			console.log(e);
// 		});
// }

// // console.log('prony');
// // addBalance('amand', 120);
// // console.log('Print');
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
	// console.log("Checking");
	return db
		.transaction('rw', db.users, function() {
			db.users
				.where('uname').equals(unm).modify({balance: blnc})
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