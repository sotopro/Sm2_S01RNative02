// session 1 - week 2
// Set balance & price of item
const balance = 500;
const jeans = 600;

// check if there are enough fund to purchase item

if (jeans <= balance) {
    console.log('You have enough money to purchase the item!');
} else {
    console.log('You do not have enough money in your account to purchase this item!')
}

// Set the current grade of student
let grade = 90;
// check if grade is an A, B, C, D or F
if (grade >= 90) {
    console.log('A')
} else if (grade >= 80) {
    console.log('B')
} else if (grade >= 70) {
    console.log('C')
} else if (grade >= 60) {
    console.log('D')
} else {
    console.log('F')
}

// (condition) ? expression on true :  expression on false

// Set age of user

let age = 30;
 // Place result of ternary operation in a variable

const oldEnough = (age >= 21) ? "You may enter." : "you may not enter"

console.log(oldEnough)

const day = new Date().getDay();
// Set the current of the week to a variable, with 1 begin Monday and 7 being Sunday

switch (day) {
    case 1:
        console.log('Happy Monday')
        break;
    case 2:
        console.log("It's Tusday. You got this!");
        break;
    case 3:
        console.log('Hump day already!')
        break;
    case 4:
        console.log("Just one more day 'til the weekend!")
        break;
    case 5:
        console.log('Happy Friday!');
        break;
    case 6:
        console.log('Have a wonderful Saturday!');
        break;
    case 7:
        console.log("It's Sunday, time to relax!")
        break;
    default:
        console.log('Something went horribly wrong...');
}

// Srt the student's grade

switch (true) {
    // if score is 90 or greater
    case grade >= 90:
        console.log('A')
        break;
    case grade >= 80:
        console.log('B')
        break;
    case grade >= 70:
        console.log('C')
        break;
    case grade >= 60:
        console.log('D')
        break;
    default:
        console.log('F')
}

// Get number corresponding of the current month. with 0 being January and 11 being December
const month = new Date().getMonth();
switch (month) {
    // January, February, March
    case 0:
    case 1:
    case 2:
        console.log('Winter');
        break;
    // April, May, June
    case 3:
    case 4:
    case 5:
        console.log('Spring');
        break;
    // July, August, September
    case 6:
    case 7:
    case 8:
        console.log('Summer')
        break;
    // October, November, December
    case 9:
    case 10:
    case 11:
        console.log('Autumn');
        break;
    default:
        console.log('Something went wrong!.')
}
