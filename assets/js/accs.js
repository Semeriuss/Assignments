export default class BankAccount {
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
        return `${this.firstName}'s balance is now: Birr ${this.balance}`;
    };
    checkAmount(){
        return `${this.firstName}'s balance is: Birr ${this.balance}`;
    };
    withdrawAmount(value){
        if(this.balance<= parseInt(value)){
            return "Insufficient balance!";
        }else{
            this.balance -= parseInt(value); 
            return `${this.firstName} has withdrawn Birr ${this.balance}`;}
        };
    transferAmount(AccountTo, value){
        if(this.accountNum != AccountTo.accountNum){
            if(this.balance<= parseInt(value)){
                return "Insufficient balance!";
            }else{
                this.balance -= parseInt(value); 
                AccountTo.balance += parseInt(value); 
                return `${this.firstName} ${this.lastName} has transferred ${value} Birr to ${AccountTo.firstName} ${AccountTo.lastName}`;
                // this.transferTag`${value} ${fName} ${lName}`;
            }
        }else{
        return"Invalid Input";
        }  
    };
}