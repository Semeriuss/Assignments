
//Declaring Object + Remove the variables and modify with object
let personProfile = {
    firstName: "",
    lastName: "",
    birthYear: "",
    job: "",
    age: "",
    isEligibleToVote: false,
    familyMembers: [],
    weight:"",
    height:"",
    ageCalc: function(){return this.age = new Date().getFullYear()-this.birthYear;},
    checkVote: function(){
        let temporAge = this.ageCalc(Number(this.birthYear));
        if(temporAge >=18){this.isEligibleToVote = true;} else{this.isEligibleToVote = false;}
        }, 
    calcBmi:function(){return (this.weight/Math.pow(this.height, 2)).toPrecision(3)}
};

// Receive the values from input and assign to object properties
personProfile.firstName = prompt("Enter Your First Name");
personProfile.lastName = prompt("Enter Your Last Name");
personProfile.job = prompt("What is Your Profession ?");
personProfile.birthYear = prompt("Enter Your Birth Date");
personProfile.weight = prompt("Your Weight in Kg ? ");
personProfile.height = prompt("Your Height in M ? ");
let numberOfFamily = prompt("Number of Family ? ");
//Receiving the family number
for (let i = 0; i < parseInt(numberOfFamily); i++) {
personProfile.familyMembers[i] = prompt("Your Family Members " + (i + 1));
}

// call age and check vote fun
personProfile.ageCalc();
personProfile.checkVote();
personProfile.calcBmi();
// Adding Self Invoking Function Expression
(function() {
console.log("**************************************************************")
console.log("Here is your Profile ")
console.log("Full Name: " + personProfile.firstName + " " + personProfile.lastName);
console.log("Profession : " + personProfile.job);
console.log("Age : " + personProfile.age + " " + "years old");
console.log("Is Eligible to Vote : " + personProfile.isEligibleToVote);
console.log("Family Members ");
//Displaying the family member with foreach
personProfile.familyMembers.forEach(function(member, index) {
console.log("Family Member " + (index + 1) + " : " + member);
});
// call bmi calculator
console.log("BMI " + personProfile.calcBmi());
console.log("**************************************************************")
})();



/*
//Declaring Variables
//You Can Check this Variables are available or not under window object
var firstName;
var lastName;
var age;
var job;
//Receive the values from Input
firstName = prompt("Enter Your First Name:  ");
lastName = prompt("Enter Your Last Name:  ");
job = prompt("What is Your Profession ?  ");
age = prompt("what is your Age ?  ");
//Display the result on console from input
console.log("Here is your Profile");
console.log("Full Name" + firstName + "" + lastName);
console.log("Profession: " + job);
console.log("Age: " + age + "" + "years old");


//Age variable for holding number value
let tempAge;
//Eligible to vote
let isEligibleToVote;

tempAge = parseInt(age);
//check eligibility
if(tempAge >= 18){
    isEligibleToVote = true;
}
else{
    isEligibleToVote = false;
}

console.log ("Is Elligible to Vote: " + isEligibleToVote);

//family storage array
let familyMember = new Array();
//number of family
let numberOfFamily;

numberOfFamily = prompt("Number of Family ?  ");
//Receiving the family number
for (let i = 0; i<parseInt(numberOfFamily);i++){
    familyMember[i] = prompt("Your Family Members " + (i + 1));
}

console.log("Family Members");
//Displaying the family member with foreach
familyMember.forEach(function(member,index){
    console.log("Family Member " + (index + 1) + ":" + member);
});

var birthYear; //changing the var age to birth year

//some changes
let tempoAge = ageCalc(birthYear);
birthYear = prompt("Enter your Birth Year ");

console.log("Your Age: " + tempoAge + "" + " Years old");

//age calc func
function ageCalc(bry)
{
    return new Date().getFullYear() - bry;
}

var weight;
var height;

weight = prompt ("Enter your weight: ");
height = prompt ("Enter your height: ");
console.log("Your BMI: " + calcBmi(weight, height) )

function calcBmi(weight, height)
{
    return weight/Math.pow(height, 2);
}
*/