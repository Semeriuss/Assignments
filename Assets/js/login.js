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
	const address = db.users.get({ uname, psd }).then((user) => {
		return user;
	});
	const printAddress = async () => {
		const a = await address;
		console.log(a);
		if (typeof a == 'undefined') {
		  console.log('AAa');
		  return;
		}
		if (a.admin) {
		  window.location = 'adminPage.html';
		  sessionStorage.setItem('uname', uname);
		  return;
		} else {
		  window.location = 'userPage.html';
		  sessionStorage.setItem('uname', uname);
		}
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
