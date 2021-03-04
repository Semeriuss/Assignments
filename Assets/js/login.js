//  UI variables

// function submitForm(e) {
// 	e.preventDefault();
// 	console.log('Hello');
// 	login(document.getElementById('emailLogin').value.toString(), document.getElementById('psdLogin').value.toString());
// }

var email = document.getElementById('emailLogin');
var psd = document.getElementById('psdLogin');
var loginButton = document.getElementById('loginSubmit');
var form = document.querySelector('#Loginform');

form.addEventListener('submit', async (e) => {
	e.preventDefault();
	await login(email.value, psd.value);
});

// loginButton.addEventListener('click', login(email.nodeValue, psd.value));

async function login(uname, psd) {
	const account = db.users.get({ uname, psd }).then((user) => {
		return user;
	});
	const printAddress = async () => {
		const a = await account;
		console.log(a);
		if (typeof a == 'undefined') {
			// console.log('AAa');
			alert('Invalid Password or Username');
			return;
		}
		if (a.admin) {
			window.location = 'adminPage.html';
			sessionStorage.setItem('uname', uname);
			return;
		} else {
			window.location = 'userApply.html';
			sessionStorage.setItem('uname', uname);
		}
	};

	function ab(res) {
		console.log(res);
	}

	printAddress();
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
