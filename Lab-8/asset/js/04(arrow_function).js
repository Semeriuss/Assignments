//DOM Load 
document.addEventListener('DOMContentLoaded', () => {


    arrow_full.innerHTML = `The Sum is :  ${arrowFun1(1,2)}`;
    arrow_red1.innerHTML = `The Sum is :  ${arrowFun2(1,2)}`;
    arrow_red2.innerHTML = `The Sqrt is :  ${arrowFun3(4)}`;
    arrow_es5.innerHTML = `The Sum is :  ${arrowFun.arrowFun4()}`;
    arrow_es6.innerHTML = `The Product is :  ${arrowFun0.arrowFun5()}`;

})

//1. Replace the empty string with arrow function 

//2. An arrow function with full syntax
const arrowFun1 = (num1, num2, ...rest) => {
    return num1 + num2;
};

//3. A minimized arrow function [No return statement , no curly brace]
const arrowFun2 = (num1, num2) => num1 + num2;

//4. A minimized arrow function [No return statement , no curly brace, no square bracket]
//5. The function will return the sqrt , use Math.sqrt(var);
const arrowFun3 = x => Math.sqrt(x);

//ES5
let arrowFun = {
    result : 0, 
    num3 : 49,
    arrowFun4: function ()
   {
       num2 = 7
       var self = this;
       return result = this.num3 + num2;
 }
}


//ES6
let arrowFun0 = {
    result : 0, 
    num3 : 7,
    arrowFun5: () =>
   {
       num2 = 7
       var self = this;
       return result = self.num3 * num2;
 }
}
