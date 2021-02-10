var db = new Dexie('RETEX');

db.version(1).stores({
	users: '++id,fname,lname,&uname,psd,email,dob,policies,admin,balance',
	policies: '++id,&name, subcat,description,premium,sum_assured',
	insurance: '++id,&name',
	sub_catagory: '++id,&name',
	pending_policies: 'uname,policy_name'
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

// console.log(create_Acount({ fname: 'AMAN', lname: 'debebe', uname: 'AMAN_D02', psd: '123', email: 'amanueldebebe' }));
