var db = new Dexie('RETEX');

db.version(1).stores({
	users: '++id,fname,lname,&uname,psd,email,dob,policies,admin,balance',
	policies: '++id,&name, maincat, subcat,description,premium,sum_assured, date',
	main_category: '++id,&name, date',
	sub_category: '++id,&name, maincat, date',
	pending_policies: 'uname,policy_name'
});

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

// console.log(create_Acount({ fname: 'bini', lname: 'debebe', uname: 'bini2', psd: '123', email: 'bini', admin: true }));

function sumbitted(val) {
	console.log(val);
}
