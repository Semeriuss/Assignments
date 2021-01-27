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