var db = new Dexie('RETEX');

db.version(1).stores({
	users: '++id,fname,lname,&uname,psd,email,dob,policies,admin,balance',
	policies: '++id,&name, subcat,description,premium,sum_assured',
	insurance: '++id,&name',
	sub_catagory: '++id,&name',
	pending_policies: 'uname,policy_name'
});

var fname = document.getElementById('fnameSignIn');
var lname = document.getElementById('lnameSignIn');
var psd = document.getElementById('psdSignIn');
var email = document.getElementById('emailSignIn');
var email = document.getElementById('emailSignIn');
var dob = document.getElementById('dobSignIn');
var dob = document.getElementById('dobSignIn');
var psd = document.getElementById('psd');
var cpsd = document.getElementById('cpsd');
var createAcBtn = document.getElementById('createAccount');
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
