var fname = document.getElementById('fnameSignIn');
var lname = document.getElementById('lnameSignIn');
var psd = document.getElementById('psdSignIn');
var email = document.getElementById('emailSignIn');
var uname = document.getElementById('unameSignIn');
var dob = document.getElementById('dobSignIn');
var dob = document.getElementById('dobSignIn');
var psd = document.getElementById('psd');
var cpsd = document.getElementById('cpsd');

var form = document.querySelector('#signUpForm');
var error_txt = document.getElementById('error-text');

form.addEventListener('submit', async (e) => {
	e.preventDefault();
	console.log('submitted');
	if (psd.value !== cpsd.value) {
		console.log('PSD no match');
		error_txt.innerText = "Password doesn't match";
		error_txt.style.color = 'red';
		return;
	}

	if (moment(new Date()).isBefore(dob.value)) {
		console.log('Invalid DATE');
		error_txt.innerText = 'Invalid Date';
		error_txt.style.color = 'red';
		return;
	}
	create_Acount({
		uname: uname.value,
		fname: fname.value,
		lname: lname.value,
		email: email.value,
		policies: [],
		psd: psd.value,
		dob: dob.value,
		admin: false,
		balance: 0
	});
	window.location = 'login.html';
	error_txt.innerText = '';
	form.reset();
	console.log(psd.value, cpsd.value);
});

// form.addEventListener('click', () => {
// 	if (psd.value == cpsd.value) {
// 		console.log('CHECK');
// 		create_Acount({
// 			uname: uname.value,
// 			fname: fname.value,
// 			lname: lname.value,
// 			psd: psd.value,
// 			dob: dob.value,
// 			admin: false,
// 			balance: 0
// 		});
// 		console.log('SIGN UP');
// 	} else {
// 		console.log('psd cpsd not match');
// 	}
// });
function create_Acount(user) {
	console.log('USER');
	return db
		.transaction('rw', db.users, function() {
			db.users
				.add(user)
				.then((val) => {
					console.log(val);
					return true;
				})
				.catch((val) => {
					console.log(val);
					return false;
				});
		})
		.catch((e) => {
			console.error(e.stack);
		});
}

console.log(
	create_Acount({
		fname: 'Semere',
		lname: 'Habtu',
		uname: 'Semeriuss',
		psd: '123',
		email: 'my@email.com',
		admin: true,
		balance: 0
	})
);

// function sumbitted(val) {
// 	console.log(val);
// }
