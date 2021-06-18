(function main() {
    const operator = prompt("Enter operator:\n+ [Addition]\n- [Subtraction]\n* [Multiplication]\n/ [Division]\n: ");
    var val = new Array();
    if(operator == '+'){
        var valNum = prompt("Number of values you want to operate on: ");
        for (let i = 0; i<parseInt(valNum); i++){
            val[i] = prompt("Your values " + (i + 1));
        }
        alert("The sum is " + add(val)); 
        console.log("The sum is " + add(val));
        main();
    }else if(operator == '*'){
        var valNum = prompt("Number of values you want to operate on: ");
        for (let i = 0; i<parseInt(valNum); i++){
            val[i] = prompt("Your values " + (i + 1));
        }
        alert("The multiplied value is " + multiply(val));
        console.log("The multiplied value is " + multiply(val));
        main();
    }else if(operator == '-'){
        var firstNum = prompt("Enter your First Number: ");
        var secondNum = prompt("Enter your Second Number: ");
        alert("The difference is " + subtract(firstNum, secondNum));
        console.log("The difference is " + subtract(firstNum, secondNum));
        main();
    }else if(operator == '/'){
        var firstNum = prompt("Enter your First Number: ");
        var secondNum = prompt("Enter your Second Number: ");
        if(secondNum == 0){
            alert("Divider cannot be zero");
            console.log("Divider cannot be zero");
            main();
        }
        else{
            alert("The quotient is " + divide(firstNum, secondNum));
            console.log("The quotient is " + divide(firstNum, secondNum));
            main();
        }  
    }else{
        alert("Invalid Input");
        console.log("Invalid Input");
        main();
    }
})();

    

function add(arr){
    var sum = 0;
    res = arr.forEach(function(values, index) {
        sum+=parseInt(arr[index]);          
    });
    return sum;
}

function multiply(arr){
    var mult = 1;
    res = arr.forEach(function(values, index) {
        mult*=parseInt(arr[index]);          
    });
    return mult;
}

function subtract(num1, num2){
    return num1- num2;
}

function divide(num1, num2) {
    if(num2 == 0){
        return isZero = true;
    }
    else{
        return (num1/num2).toPrecision(3);
    }  
}
function again(){
    let choice = prompt("Do you want to operate again? (y/n) ")
    if(choice == "y" || "Y" || "yes" || "Yes"){
        return true;
    }
    else{
        return false;
    }
}




































/*
var res;
const operator = prompt("Enter operator (either +, -, *, or /): ");
if(operator == '+' || operator == '*')
{
    var val = new Array();
    var valNum = prompt("Number of values you want to operate on: ");
    for (let i = 0; i<parseInt(valNum); i++){
        val[i] = prompt("Your values " + (i + 1));
    }

    switch(operator) {
        case '+':
            var sum = 0;
            res = val.forEach(function(values, index) {
                sum+=parseInt(val[index]);          
            });
            console.log(sum);
            break;

        case '*':
            let mult = 1;
            res = val.forEach(function(values, index) {
                mult*=parseInt(val[index]);          
        });
        console.log(mult);
        break;

        default:
            console.log("Invalid Input");
            break;
            
    }
}else{
    var firstNum = prompt("Enter your First Number: ");
    var secondNum = prompt("Enter your Second Number: ");

    switch(operator) {
        case '-':
            console.log(firstNum - secondNum);
            break;

        case '/':
            if(secondNum == 0){
                console.log("Divider cannot be zero");
            }
            else{
                console.log(firstNum/secondNum);
            }  
            break;

        default:
            console.log("Invalid Input");
            break;
            
        }
    
}
*/

/*

let calculate = {
    choice: "",
    operator: "",
    firstNum: "",
    secondNum: "",
    val: [],
    divide: function(){return this.firstNum/this.secondNum;},
    subtract: function(){return this.firstNum - this.secondNum;},
    add: function(){ var sum = 0;
        this.val.forEach(function(values, index) {
            sum+=parseInt(val[index]);          
        });},
    multiply:function() {var mult = 0
        this.val.forEach(function(values, index) {
            mult*=parseInt(val[index]);          
        });
    }

}
calculate.choice = prompt("Enter operator (either +, -, *, or /): ");
if(choice == '+' || choice == '*')
{
    
    var valNum = prompt("Number of values you want to operate on: ");
    for (let i = 0; i<parseInt(valNum); i++){
        calculate.val[i] = prompt("Your value " + (i + 1));
    }
    */