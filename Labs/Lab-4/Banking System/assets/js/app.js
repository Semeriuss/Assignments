class Account {
    constructor(firstName,lastName,accountNum,balance){
        this.firstName = firstName;
        this.lastName = lastName;
        this.accountNum = accountNum;
        this.balance = balance;
    }
    depositAmount(value){
        let numVal = parseInt(this.balance);
        numVal += parseInt(value); 
        this.balance = numVal;
        return this.firstName + "'s balance is now: Birr " + this.balance;
    };
    checkAmount(){
        return this.firstName + "'s balance is Birr " + this.balance;
    };
    withdrawAmount(value){
        if(this.balance<= parseInt(value)){
            return "Insufficient balance!";
        }else{
            this.balance -= parseInt(value); 
            return this.firstName + " has withdrawn Birr " + this.balance;}
        };
    transferAmount(AccountTo, value){
        if(this.accountNum != AccountTo.accountNum){
            if(this.balance<= parseInt(value)){
                return "Insufficient balance!";
            }else{
                this.balance -= parseInt(value); 
                AccountTo.balance += parseInt(value); 
                return this.firstName + " " + this.lastName + " " + "has transferred " + value + " Birr " + "to " + AccountTo.firstName + " " + AccountTo.lastName;
            }
        }else{
        return"Invalid Input";
        }  
    };
}

// let accX = new Account("Semere", "Habtu","5123", "200");
// let accY = new Account("Aymen", "Mohammed","4231", "500");
// let accZ = new Account("Meti", "Legesse","6312", "700");


// console.log(accX.depositAmount(400));
// console.log(accY.withdrawAmount(200));
// console.log(accZ.checkAmount(accZ));
// console.log(accZ.transferAmount(accY, 300));



// var accounts = new Map();
// accounts.set("5123", accX);
// accounts.set("4231", accY);
// accounts.set("6312", accZ);


let accX = new Account("Semere", "Habtu","5123", "200");
let accY = new Account("Aymen", "Mohammed","4231", "500");
let accZ = new Account("Meti", "Legesse","6312", "700");

var accounts = new Map();


(function main() {
    let operator = prompt("Enter the number of your choice:\n1. Create Account\n2.Deposit\n3.Check Balance\n4.Withdraw\n5.Transfer\n ")
    
    accounts.set("5123", accX);
    accounts.set("4231", accY);
    accounts.set("6312", accZ);

    if(operator == '1'){
        const acc = new Account();
        acc.firstName = prompt("Enter your First Name: ");
        acc.lastName = prompt("Enter your Last Name: ");
        acc.accountNum = (Math.floor(Math.random() * 10000)).toString();
        acc.balance = 0;
        accounts.set(acc.accountNum, acc);
        console.log(accounts.get(acc.accountNum));
        console.log("Successfully Created a Bank Account. Your Account number is: " + acc.accountNum);
        main();
    }else if(operator == '2') {
        var val = prompt("Amount of money you want to deposit: ");
        var accNum = prompt("Please enter the account number: ");
        console.log("Successfully deposited " + val + " Birr to " + accounts.get(accNum).firstName);
        accounts.get(accNum).depositAmount(val);
        main();
    }else if(operator == '3'){
        var accNum = new String("");
        accNum = prompt("Please enter the account number: ");
        accc = new Account();
        accc = accounts.get(accNum);
        // console.log(accc);
        // accc.checkAmount();
        console.log(accc.checkAmount());
        main();        
    }else if(operator == '4'){
        var accNum = prompt("Please enter the account number: ");
        var val = prompt("Amount of money you want to withdraw: ");
        if(parseInt(val)>accounts.get(accNum).balance){
            console.log("Your balance is insufficient for a withdrawal");
            main();
            
        }else{
            console.log("The withdrawal was successful!");
            accounts.get(accNum).withdrawAmount(val);
            main();
        }
    }else if(operator == '5'){
        var accNumF = prompt("Please enter the account number you want to transfer from\n: ");
        var accNumT = prompt("Please enter the account number you want to transfer to\n: ");
        var val = prompt("Amount of money you want to transfer: ");
        if(parseInt(val)>accounts.get(accNumF).balance){
            console.log("Your balance is insufficient for a transfer");
            main();
            
        }else{
            console.log("The transfer was successful!");
            accounts.get(accNumF).transferAmount(accounts.get(accNumT), val);
            main();
        }
    }else{
        console.log("Invalid Input");
    }
})();




































// function depositAmount(Account, value){
//     Account.balance += parseInt(value); 
//     return Account.balance;
// };
// function checkAmount(Account){
//     return Account.balance;
// };
// function withdrawAmount(Account, value){
//     if(Account.balance<= parseInt(value)){
//         return "Insufficient balance!";
//     }else{
//         Account.balance -= parseInt(value); 
//         return Account.balance;}
//     };
// function transferAmount(AccountFrom, AccountTo, value){
//     if(AccountFrom != AccountTo){
//         if(AccountFrom.balance<= parseInt(value)){
//             return "Insufficient balance!";
//         }else{
//             AccountFrom.balance -= parseInt(value); 
//             AccountTo.balance += parseInt(value); 
//             return AccountFrom.firstName + " " + AccountFrom.lastName + " " + "has transferred " + value + " Birr " + "to " + AccountTo.firstName + " " + AccountTo.lastName;
//         }
//     }else{
//     return"Invalid Input";
//     }  
// };




// console.log(depositAmount(accX, 400));
// console.log(withdrawAmount(accY, 200));
// console.log(checkAmount(accZ));
// console.log(transferAmount(accX,accY, 300));









/*var balance = 0;

(function main() {
    const operator = prompt("Enter operator (either +(Deposit), -(Withdraw), *(CheckBalance), or /(Transfer)): ");
    
    if(operator == '*') {
        console.log("Your Balance is " + checkBalance());
        main();
    }else if(operator == '+'){
        var val = prompt("Amount of money you want to deposit: ");
        console.log("The deposit is successful");
        deposit(val);
        main();
    }else if(operator == '-'){
        var val = prompt("Amount of money you want to withdraw: ");
            if(parseInt(val)>balance){
                console.log("Your balance is insufficient to make a withdrawal");
                main();
                
            }else{
                console.log("The withdrawal was successful!");
                withdraw(val);
                main();
        }
    }else if(operator == '/'){
        var val = prompt("Amount of money you want to transfer: ");
        acc = prompt("Name of the account you want to tranfer to: ");

        transfer(parseInt(val), acc);
        main();

    }
})();

    

function deposit(value){
    balance += parseInt(value);
    return balance;
}

function checkBalance(){
    return balance;
}

function withdraw(value){
    console.log("Successful!");
    balance-=parseInt(value);
    return balance;
}

function transfer(value, xBalance) {
    console.log("Successful!");
    withdraw(parseInt(value));
    console.log(xBalance + " has received " + value + " amount of money from you!" )
    return balance;     
}
*/




