var db = new Dexie('RETEX');

db.version(1).stores({
	users: '++id,fname,lname,&uname,psd,email,dob,policies,admin,balance',
	policies: '++id,&name, subcat,description,premium,sum_assured',
	insurance: '++id,&name',
	sub_catagory: '++id,&name',
	pending_policies: 'uname,policy_name'
});

//  UI variables

// function submitForm(e) {
// 	e.preventDefault();
// 	console.log('Hello');
// 	login(document.getElementById('emailLogin').value.toString(), document.getElementById('psdLogin').value.toString());
// }

var email = document.getElementById('emailLogin');
var psd = document.getElementById('psdLogin');
var loginButton = document.getElementById('loginSubmit');
loginButton.addEventListener('click', async (e) => {
	e.preventDefault();
	await login(email.value, psd.value);
});

// loginButton.addEventListener('click', login(email.nodeValue, psd.value));

async function login(uname, psd) {
	const address = db.users.get({ uname, psd }).then((user) => {
		return user;
	});

	const printAddress = async () => {
		const a = await address;
		ab(a);
	};

	function ab(res) {
		console.log(res);
	}

	printAddress();
}

// login('bini2', '1231');
// let a = await db.users.get(2);
// console.log(a);

// let res = () => {
// 	return .then((a) => {
// 		return a;"
// 	});
// };

// console.log(res());
