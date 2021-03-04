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

	console.log(uname.value, fname.value, lname.value, email.value, psd.value, dob.value);
	await create_Acount({
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

	error_txt.innerText = '';
	form.reset();
	console.log(psd.value, cpsd.value);
	window.location = 'login.html';
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
				// .then((val) => {
				// 	console.log(val);
				// 	return true;
				// })
				.catch((val) => {
					console.log('Error' + val);
					return false;
				});
		})
		.catch((e) => {
			console.error(e.stack);
		});
}

try {
	create_Acount({
		fname: 'Amanuel',
		lname: 'Debebe',
		uname: 'AmanD',
		psd: '123',
		email: 'my@email.com',
		admin: true,
		balance: 0
	});
} catch (error) {
	console.log(error);
}

try {
	create_Acount({
		fname: 'Biniyam',
		lname: 'Abiy',
		uname: 'Bini',
		psd: '123456',
		email: 'bini@email.com',
		admin: false,
		balance: 0
	});
} catch (error) {
	console.log(error);
}

// function sumbitted(val) {
// 	console.log(val);
// }
