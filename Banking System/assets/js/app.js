class Account {
    constructor(firstName,lastName,accountNum,balance){
        this.firstName = firstName;
        this.lastName = lastName;
        this.accountNum = accountNum;
        this.balance = parseInt(balance);
    }
}

function depositAmount(Account, value){
    Account.balance += parseInt(value); 
    return Account.balance;
};
function checkAmount(Account){
    return Account.balance;
};
function withdrawAmount(Account, value){
    if(Account.balance<= parseInt(value)){
        return "Insufficient balance!";
    }else{
        Account.balance -= parseInt(value); 
        return Account.balance;}
    };
function transferAmount(AccountFrom, AccountTo, value){
    if(AccountFrom != AccountTo){
        if(AccountFrom.balance<= parseInt(value)){
            return "Insufficient balance!";
        }else{
            AccountFrom.balance -= parseInt(value); 
            AccountTo.balance += parseInt(value); 
            return AccountFrom.firstName + " " + AccountFrom.lastName + " " + "has transferred " + value + " Birr " + "to " + AccountTo.firstName + " " + AccountTo.lastName;
        }
    }else{
    return"Invalid Input";
    }  
};

let accX = new Account("Semere", "Habtu","5123", "200");
let accY = new Account("Aymen", "Mohammed","4231", "500");
let accZ = new Account("Meti", "Legesse","6312", "700");

// console.log(accX.depositAmount(400));
// console.log(accY.withdrawAmount(200));
// console.log(accZ.checkAmount());
// console.log(accX.transferAmount(accY, 300));

console.log(depositAmount(accX, 400));
console.log(withdrawAmount(accY, 200));
console.log(checkAmount(accZ));
console.log(transferAmount(accX,accY, 300));


// (function main() {
//     let operator = prompt("Enter the number of your choice:\n1. Create Account\n2.Deposit\n3.Withdraw\n4.Check Balance\n5.Transfer\n ")
//     // const operator = prompt("Enter operator (either +(Deposit), -(Withdraw), *(CheckBalance), or /(Transfer)): ");
    
//     if(operator == '1'){
//         let acc = new Account();
//         acc.firstName = prompt("Enter your First Name: ");
//         acc.lastName = prompt("Enter your First Name: ");
//         acc.accountNum = 10000 * Math.random();
//         acc.balance = 0;
//         console.log("Successfully Created a Bank Account.");
//     }else if(operator == '2') {
//         var val = prompt("Amount of money you want to deposit: ");
//         console.log("The deposit is successful");
//         deposit(val);
//         main();
//     }else if(operator == '+'){
//         console.log("Your Balance is " + checkBalance());
//         main();
//     }else if(operator == '-'){
//         var val = prompt("Amount of money you want to withdraw: ");
//             if(parseInt(val)>balance){
//                 console.log("Your balance is insufficient to make a withdrawal");
//                 main();
                
//             }else{
//                 console.log("The withdrawal was successful!");
//                 withdraw(val);
//                 main();
//         }
//     }else if(operator == '/'){
//         var val = prompt("Amount of money you want to transfer: ");
//         acc = prompt("Name of the account you want to tranfer to: ");

//         transfer(parseInt(val), acc);
//         main();

//     }
// })();
















































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




