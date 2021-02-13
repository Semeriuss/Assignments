function addBalance(uname, amount) {
	db.transaction('rw', db.users, () => {
		let old_balance = db.users.get('uname').equals(uname);
		console.log(old_balance);
		// db.users('uname').equals(uname).modify({balance:})
	});
}

// addBalance('aman', 12);
