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

//Map Creation
export var accounts = new Map();

//Set Creation for Id values
export var accountID = new Set();

//Tagged Template Literals 
export const createTag = (str, fName, lName, accNm) => {
    console.log(`${fName} ${lName} has successfully created a Bank Account with Account Number ${accNm}`);
    alert(`${fName} ${lName} has successfully created a Bank Account with Account Number ${accNm}`);
}

export const depositTag = (str, amount, accNm) => {
    console.log(`Successfully deposited ${amount} Birr to ${accounts.get(accNm).firstName}`);
    alert(`Successfully deposited ${amount} Birr to ${accounts.get(accNm).firstName}`);
}

export const withdrawTag = (str, amount, accNm) => {
    console.log(`Successfully withdrew Birr ${amount} from ${accounts.get(accNm).firstName} ${accounts.get(accNm).lastName}'s Saving's Account`);
    alert(`Successfully withdrew Birr ${amount} from ${accounts.get(accNm).firstName} ${accounts.get(accNm).lastName}'s Saving's Account`);
}

export const transferTag = (str, amount, accNmF, accNmT) => {
    console.log(`Successfully transferred Birr ${amount} from ${accounts.get(accNmF).firstName} to ${accounts.get(accNmT).firstName}'s Saving's Account`);
    alert(`Successfully transferred Birr ${amount} from ${accounts.get(accNmF).firstName} to ${accounts.get(accNmT).firstName}'s Saving's Account`);
}

export const numberOfAccounts = (str, size) => {
    if(size == 0){
        console.log(`No accounts exist in this Bank.`);
    }else if(size == 1){
        console.log(`There is ${size} account in this Bank.`);
    }else{
        console.log(`There are ${size} accounts in this Bank.`)
    }
}

//First Class Functions
//1. Pass as Argument
export function errorMessage(){
    return ", your balance is insufficient for a withdrawal.";
}
export function Response(errorMessage, name){
    console.log(name + errorMessage());
    alert(name + errorMessage());
}
//1. Function Returns Function
export function transferError(){
    return ", your balance is insufficient for a transfer.";
}

export function errorResponse(transferError, user){
    return Response(transferError, user);
}

//Closure
export var accountCounter =(() =>{
    var count = accounts.size;
    function changeBy(val){
        count += val;
    }
    return {
        increase: () => {
            changeBy(1)
        },
        decrease: () => {
            changeBy(-1)
        },
        value: () => {
            return count;
        }
    }

})();

//Iterators and Generators
//Generates a list of accounts using iterable property of Map Object
export function* accGen(map){
    for(const [key, value] of map){
        console.log(`${key}: 
        Account Holder: ${value.firstName} ${value.lastName}
        Account Number: ${value.accountNum}
        Account Balance: ${value.balance}`);
    }
}
//Generates accound Id using user defined iterator
export function idGen(range){
    var id = "";
    // var gen = idGen(range);
    const gen = {
        *[Symbol.iterator](){
            for (let loop = 0; loop<range; loop++){    
                yield Math.floor(Math.random() * 9);
            }
        }
    }
    for (let indices of gen){
        id += indices;
    }
    return id;
}

//Using the 'has' property of sets to give unique account numbers to users
export function idSetter(accountSet, length=4){
    let gen = idGen(length);
    var setter = accountSet.has(gen) ? idSetter(accountSet) : gen;
    return setter;
}
