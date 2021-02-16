import Account from './accs.js'
import { accounts } from "./accs.js";
import { accountID } from "./accs.js";
import { createTag } from "./accs.js";
import { depositTag } from "./accs.js";
import { withdrawTag } from "./accs.js";
import { transferTag } from "./accs.js";
import { numberOfAccounts } from "./accs.js";
import { errorMessage } from "./accs.js";
import { transferError } from "./accs.js";
import { errorResponse } from "./accs.js";
import { Response } from "./accs.js";
import { accGen } from "./accs.js";
import { accountCounter } from "./accs.js";
import { idSetter } from "./accs.js";

// let accX = new Account("Semere", "Habtu","5123", "200");
// let accY = new Account("Aymen", "Mohammed","4231", "500");
// let accZ = new Account("Meti", "Legesse","6312", "700");


//Reflect API
//1. Construction
let aym = ["Aymen", "Mohammed","4231", 500];
let bin = ["Biniyam", "Abiy", "7325", 400];
let met = ["Meti", "Legesse","6312", 700];
let sem = ["Semere", "Habtu","5123", 200];

const accB = Reflect.construct(Account, bin);
const accX = Reflect.construct(Account, aym);
const accY = Reflect.construct(Account, met);
const accZ = Reflect.construct(Account, sem);


//2. Method Call
// console.log(accB instanceof Account);
// console.log(accB.firstName);

// Reflect Set Prototype
// Reflect.set(accounts, 'counter', accounts.size);
Reflect.defineProperty(accounts, 'counter', {value: accounts.size});
// Reflect.deleteProperty(accounts, 'counter');
// console.log(accounts);

//Reflect Prototype usage
var coder = {
    show() {
        console.log(this.message);
        alert(this.message);
    },
    rule(){
        console.log(this.display);
    }
}

class errMessage {
    constructor(message){
        this.message = message;
    }
}

class header{
    constructor(display){
        this.display = display;
    }
}
Reflect.getPrototypeOf(errMessage);
Reflect.setPrototypeOf(errMessage.prototype, coder);
Reflect.setPrototypeOf(header.prototype, coder);
// Reflect.setPrototypeOf(accounts, accountCounter);

var err = new errMessage('There has been an error');
var hr = new header ("______________________________________________________");
var er = new header ("======================================================");


(function main() {
    let operator = prompt("Enter the number of your choice:\n1. Create Account\n2.Deposit\n3.Check Balance\n4.Withdraw\n5.Transfer\n6.Account Dashboard (Admin Only) ")
    
    accountCounter.increase();
    accounts.set(accX.accountNum, accX);
    accountID.add(accX.accountNum);
    accounts.set(accY.accountNum, accY);
    accountID.add(accY.accountNum);
    accounts.set(accZ.accountNum, accZ);
    accountID.add(accZ.accountNum);
    accounts.set(accB.accountNum, accB);
    accountID.add(accB.accountNum);
  
    if(operator == '1'){
        const acc = new Account();
        let firstName = prompt("Enter your First Name: ");
        let lastName = prompt("Enter your Last Name: ");
        if(firstName === "" || firstName == null || lastName === ""){
            err.show();
            main();
        }else{
            acc.firstName = firstName;
            Reflect.set(acc)
            acc.lastName = lastName;
            acc.accountNum = idSetter(accountID);//idGen(4)//(Math.floor(Math.random()*9)).toString();
            accountID.add(acc.accountNum);
            acc.balance = 0; 
            accounts.set(acc.accountNum, acc);
            // console.log(accounts.get(acc.accountNum));
            let accountList = []//firstName, lastName, acc.accountNum, acc.balance];
            Reflect.set(accountList, 0, firstName);
            Reflect.set(accountList, 1, lastName);
            Reflect.set(accountList, 2, acc.accountNum);
            Reflect.set(accountList, 3, acc.balance);
            let fName = Reflect.get(accountList, 0);
            let lName = Reflect.get(accountList, 1);
            let aNum = Reflect.get(accountList, 2);
            accountCounter.increase();
            // console.log(`${accounts.value()} savings Accounts have been created in this Bank.`)
            numberOfAccounts`${accounts.size}`;
            // console.log(`Successfully Created a Bank Account. Your Account number is: ${acc.accountNum}`);
            // createTag`${acc.firstName}, ${acc.lastName}, ${acc.accountNum}`;
            createTag`${fName}, ${lName}, ${aNum}`;
            // alert(`Successfully Created a Bank Account. Your Account number is: ${acc.accountNum}`);
            main();
        }
    }else if(operator == '2') {
        var val = prompt("Amount of money you want to deposit: ");
        var accNum = prompt("Please enter the account number: ");
        // console.log(`Successfully deposited ${val} Birr to ${accounts.get(accNum).firstName}`);
        // alert(`Successfully deposited ${val} Birr to ${accounts.get(accNum).firstName}`);
        depositTag`${val} ${accNum}`;
        accounts.get(accNum).depositAmount(val);
        main();
    }else if(operator == '3'){
        var accNum = new String("");
        accNum = prompt("Please enter the account number: ");
        let accc = new Account();
        // accc = accounts.get(accNum);
        accc = accounts.get(accNum);
        // console.log(accc);
        // accc.checkAmount();
        console.log(accc.checkAmount());
        alert(accc.checkAmount());
        main();        
    }else if(operator == '4'){
        var accNum = prompt("Please enter the account number: ");
        var val = prompt("Amount of money you want to withdraw: ");
        if(parseInt(val)>accounts.get(accNum).balance){
            // console.log("Your balance is insufficient for a withdrawal");
            // alert("Your balance is insufficient for a withdrawal");
            Response(errorMessage, accounts.get(accNum).firstName);
            main();
            
        }else{
            // console.log("The withdrawal was successful!");
            withdrawTag`${val} ${accNum}`
            accounts.get(accNum).withdrawAmount(val);
            main();
        }
    }else if(operator == '5'){
        var accNumF = prompt("Please enter the account number you want to transfer from:\n ");
        var accNumT = prompt("Please enter the account number you want to transfer to:\n ");
        var val = prompt("Amount of money you want to transfer: ");
        if(parseInt(val)>accounts.get(accNumF).balance){
            // console.log("Your balance is insufficient for a transfer");
            // alert("Your balance is insufficient for a transfer");
            errorResponse(transferError, accounts.get(accNumF).firstName);
            main();
            
        }else{
            console.log("The transfer was successful!");
            // alert(("The transfer was successful!"));
            // console.log(accounts.get(accNumF).transferAmount(accounts.get(accNumT), val));
            transferTag`${val} ${accNumF} ${accNumT}`;
            accounts.get(accNumF).transferAmount(accounts.get(accNumT), val);
            main();
        }
    }else if(operator == '6'){
        var passkey = prompt("Please enter the Admin Passkey (Password is 'admin'):\n ");
        if(passkey == "admin"){
            // Iterator/Generator on iterable Map Object
            hr.rule();
            er.rule();
            accGen(accounts).next();
            hr.rule();
            er.rule();
            main();           
        }else{
            err.show();
            main();
;        }

    }else{
        // console.log("Invalid Input");
        // alert("Invalid Input");
        err.show();
    }
})();