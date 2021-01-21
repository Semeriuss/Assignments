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


let Account = {
    construct
    firstName: "",
    lastName: "",
    accountNum: "",
    balance: 0,
    depositAmount:function(value){this.balance += parseInt(value); return this.balance;},
    checkAmount: function(){return this.balance;},
    withdrawAmount:function(value){if(this.balance<= parseInt(value)){console.log("Insufficient balance!")}else{this.balance -= parseInt(value); return this.balance;}},
}

const accX = new Account();
accY = new Account;
accZ = new Account();

accX.firstName = "Semere";
accX.lastName = "Habtu";
accX.accountNum = "A123";
accX.balance = 200;

accY.firstName = "Aymen";
accY.lastName = "Mohammed";
accY.accountNum = "B231";
accY.balance = 500;

accZ.firstName = "Meti";
accZ.lastName = "Legesse";
accZ.accountNum = "C312";
accZ.balance = 700;

console.log(accX.deposit(400));
console.log(accY.withdraw(200));




