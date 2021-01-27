const result = document.querySelector('.result'); //screen input text field
const result1 = document.querySelector('#result1'); //screen input text field
const result2 = document.querySelector('#result2'); //screen input text field
const operation = document.querySelectorAll(".global"); //main buttons - operands and operators
var display = document.querySelector('.header');
const buttonArray = Array.from(operation); //change nodelist into array
const addButton = buttonArray[2];
const subButton = buttonArray[5];
const mulButton = buttonArray[1];
const divButton = buttonArray[4];
const perButton = buttonArray[3];
const sqrtButton = buttonArray[0];
console.log(buttonArray);

//addition button
// addButton.addEventListener("click", addResults);

//subtraction button
subButton.addEventListener("click", subResults);

//multiplication button
// mulButton.addEventListener("click", mulResults);

//division button
// divButton.addEventListener("click", divResults);

//percent button
// perButton.addEventListener("click", perResults);

//sqrt button
// sqrtButton.addEventListener("click", sqrtResults);

// .split(/[ ,]+/)
//add new task funtion definition
function subResults(){
    var num1 = result1.value;
    var num2 = result2.value;
    display.textContent = subtract(num1,num2);
}

function subResults(){
    var num1 = result1.value;
    var num2 = result2.value;
    display.textContent = subtract(num1,num2);
}


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
        return undefined = true;
    }
    else{
        return (num1/num2).toPrecision(3);
    }  
}

function power(num, exp){
    if(num==0 && exp<0){
        return undefined = true;
    }else{
        return Math.pow(num, exp);
    }
}

function sqrt(num){
    if (num<0){
        return undefined = true;
    }else{
        return Math.sqrt(num);
    }
}
function log(num, base){
    return Math.log(num, base);
}

