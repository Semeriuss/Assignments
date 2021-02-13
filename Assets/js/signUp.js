var fname = document.getElementById('fnameSignIn');
var lname = document.getElementById('lnameSignIn');
var psd = document.getElementById('psdSignIn');
var email = document.getElementById('emailSignIn');
var uname = document.getElementById('unameSignIn');
var dob = document.getElementById('dobSignIn');
var dob = document.getElementById('dobSignIn');
var psd = document.getElementById('psd');
var cpsd = document.getElementById('cpsd');
var createAcBtn = document.getElementById('createAccount');

createAcBtn.addEventListener('click', () => {
	if (psd.value == cpsd.value) {
		console.log('CHECK');
		create_Acount({
			uname: uname.value,
			fname: fname.value,
			lname: lname.value,
			psd: psd.value,
			dob: dob.value,
			admin: false,
			balance: 0
		});
		console.log('SIGN UP');
	} else {
		console.log('psd cpsd not match');
	}
});
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
		.catch(function(e) {
			console.error(e.stack);
		});
}

// console.log(create_Acount({ fname: 'aman', lname: 'debebe', uname: 'aman', psd: '123', email: 'aman', admin: true }));

function sumbitted(val) {
	console.log(val);
}
