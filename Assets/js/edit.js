const newPsd = document.getElementById("inputPasswordNew");
const oldPsd = document.getElementById("inputPasswordOld");
const newPsdVerify = document.getElementById("inputPasswordNewVerify");
const editName = document.getElementById("editName");
const editForm = document.querySelector(".editForm");
const backUser = document.querySelector('#backUser');

editForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    db.transaction("rw", db.users,  () => {


        let currentUserName = sessionStorage.getItem("uname");
    
        db.users.get({uname:currentUserName }, user=>{
            if (oldPsd.value != user.psd){
                console.log(user.psd, "old not matched ")
            }else{
                if (newPsd.value == newPsdVerify.value){
                    console.log(currentUserName, user.uname)
                    updateVal(user.id, newPsd.value)
                }
            }
        })
    }).catch(e=>{
        console.log(e.stack)
    })
});
function updateVal(key, val){
    db.users.update(key, {psd: val})
                    .then(updated =>{
                        if (updated){
                            // alert("Your profile has been set with a new password!")
                            console.log("updated")
                        }
                        else{
                            // alert("couldnt process the update function")
                            console.log("not updated")
                        }
                    })
                    .catch(e=>{
                        console.log(e.stack)
                    })
};
// backUser.addEventListener('button', async (e) => {
// 	e.preventDefault();
// 	await login(email.value, psd.value);
// });
// async function login(uname, psd) {
// 	const address = db.users.get({ uname, psd }).then((user) => {
// 		return user;
// 	});
// 	const printAddress = async () => {
// 		const a = await address;
// 		console.log(a);
// 		if (a.admin) {
// 		  window.location = 'adminPage.html';
// 		  sessionStorage.setItem('uname', uname);
// 		  return;
// 		} else {
// 		  window.location = 'userPage.html';
// 		  sessionStorage.setItem('uname', uname);
// 		}
// 	  };

// 	function ab(res) {
// 		console.log(res);
// 	}

// 	printAddress();
// }
