(function() {
	// check for IndexedDB support
	if (!window.indexedDB) {
		console.log(`Your browser doesn't support IndexedDB`);
		return;
	}

	// open DATABASE VERSION 1
	const request = indexedDB.open('INSURANCE', 1);

	// create users, insurance, SubInsurance and policy

	request.onupgradeneeded = (event) => {
		let db = event.target.result;

		//create user object Store
		let userStore = db.createObjectStore('Users', {
			autoIncrement: true
		});

		// create insurance object Store
		let insuranceStore = db.createObjectStore('Insurance', {
			autoIncrement: true
		});

		// crete policy object Store
		let policy = db.createObjectStore('policy', {
			autoIncrement: true
		});

		//  create Index on username property
		let Uname = userStore.createIndex('uname', 'uname', {
			unique: true
		});

		// create Index on  Insurance Name
		let insuranceName = insuranceStore.createIndex('name', 'name', {
			unique: true
		});

		//  create Index on Policy  Name
		let policyName = policy.createIndex('name', 'name', {
			unique: true
		});
	};

	//  handle the error event
	request.onerror = (event) => {
		console.error(`DATABASE ERROR:  ${event.target.errorCode}`);
	};

	// handle the success event
	request.onsuccess = (event) => {
		const db = event.target.result;
	};

	//  function to create User Account
	function createAccount(db, user) {
		// create users transaction
		const txn = db.transaction('Users', 'readwrite');

		//  get the users objectStore
		const store = txn.objectStore('Users');

		let query = store.put(user);

		query.onsuccess = function(event) {
			console.log(event);
		};

		// handle the error
		query.onerror = function(event) {
			console.error(event.target.errorCode);
		};

		//  close the Db after the transaction is finished

		txn.oncomplete = function() {
			db.close();
		};
	}

	//  function to Add new Insurance
	function createInsurance(db, insurance) {
		// create insurance transaction
		const txn = db.transaction('Insurance', 'readwrite');

		//  get the users objectStore
		const store = txn.objectStore('Insurance');

		let query = store.put(insurance);

		query.onsuccess = function(event) {
			console.log(event);
		};

		// handle the error
		query.onerror = function(event) {
			console.error(event.target.errorCode);
		};

		//  close the Db after the transaction is finished

		txn.oncomplete = function() {
			db.close();
		};
	}

	//  function to Add new Policy
	function createPolicy(db, policy) {
		// create insurance transaction
		const txn = db.transaction('policy', 'readwrite');

		//  get the users objectStore
		const store = txn.objectStore('policy');

		let query = store.put(policy);

		query.onsuccess = function(event) {
			console.log(event);
		};

		// handle the error
		query.onerror = function(event) {
			console.error(event.target.errorCode);
		};

		//  close the Db after the transaction is finished

		txn.oncomplete = function() {
			db.close();
		};
	}

	function getAllInsurance() {
		// create insurance transaction
		const txn = db.transaction('policy', 'readwrite');

		//  get the users objectStore
		const store = txn.objectStore('policy');

		let result = store.getAll();

		result.onsuccess = function(e) {
			//  DEbugging MODE
			console.log(e.target.result);
		};
	}
})();
