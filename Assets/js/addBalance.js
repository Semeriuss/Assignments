function addBalance(uname, amount) {
	return db
		.transaction('rw', db.users, async () => {
			return db.users.where({ uname }).modify((user) => (user.balance += amount));
		})
		.catch((e) => {
			console.log(e);
		});
}

console.log('prony');
addBalance('amand', 120);
console.log('Print');
