const result = document.querySelector('.result'); //screen input text field
const result1 = document.querySelector('#result1'); //screen input text field
const result2 = document.querySelector('#result2'); //screen input text field
const operation = document.querySelectorAll(".global"); //main buttons - operands and operators
var display = document.querySelector('.header');
const buttonArray = Array.from(operation); //change nodelist into array
const addButton = buttonArray[1];
const subButton = buttonArray[3];
const mulButton = buttonArray[0];
const divButton = buttonArray[4];
const modButton = buttonArray[5];
const sqrtButton = buttonArray[2];
const powButton = buttonArray[6];
const logButton = buttonArray[7];
var undefined = false;
console.log(buttonArray);

//addition button
addButton.addEventListener("click", addResults);

//subtraction button
subButton.addEventListener("click", subResults);

//multiplication button
mulButton.addEventListener("click", mulResults);

//division button
divButton.addEventListener("click", divResults);

//Power button
powButton.addEventListener("click", powResults);

//Power button
logButton.addEventListener("click", logResults);

//modulus button
modButton.addEventListener("click", modResults);

//sqrt button
// sqrtButton.addEventListener("click", sqrtResults);

// .split(/[ ,]+/)
//add new task funtion definition
function subResults(){
    var num1 = result1.value;
    var num2 = result2.value;
    display.textContent = subtract(num1,num2);
}

function divResults(){
    var num1 = result1.value;
    var num2 = result2.value;
    if(undefined){
        display.textContent = "Math Error Committed"
    }else{
        display.textContent = divide(num1,num2);
    }
}

function addResults(){
    var arg = result.value;
    // console.log(arg);
    var arr = arg.split(',');
    console.log(arr);
    display.textContent = add(arr);
}

function mulResults(){
    var arg = result.value;
    // console.log(arg);
    var arr = arg.split(',');
    console.log(arr);
    display.textContent = multiply(arr);
}

function powResults(){
    var num1 = result1.value;
    var num2 = result2.value;
    display.textContent = power(num1,num2);
}

function logResults(){
    var num1 = result1.value;
    var num2 = result2.value;
    display.textContent = log(num1,num2);
}

function modResults(){
    var num1 = result1.value;
    var num2 = result2.value;
    display.textContent = mod(num1,num2);
}

function add(arr){
    var sum = 0;
    res = arr.forEach(function(values) {
        sum+=parseInt(values);          
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
        undefined = true;
        return "Math Error Committed"
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

function mod(num1, num2){
    return num1 % num2;
}

