//TASK 1 
var parkIsOpen = false;

if(parkIsOpen) {
    alert("Welcome to the Badlands National Park! Try to enjoy your stay.");
} else {
    alert("Sorry, the Badlands are particularly bad today. We're closed!");
}

//TASK 2
var userAge = prompt("What's your age, user?")

//TASK 3
var ageIsCorrect = confirm("You entered " + userAge + ". Is this correct?");

//TASK 4

var age;
var ageCorrect;

do {
    age = prompt("What's your age, user?");
    confirm("You entered " + age + ". Is is correct?");
} while (ageIsCorrect === false);


alert("Great! Your age is logged as " + userAge + ".");


