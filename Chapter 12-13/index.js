// 1. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
var int1 = Number(prompt("Enter Integer 1: "));
var int2 = Number(prompt("Enter Integer 2: "));
if( int1 > int2){
    alert(int1 + " Is Larger Integer 1");
}
else if( int2 > int1){
    alert(int2 + " Is Larger Integer 2");
}
else if (int1 === int2){
    alert("The Integers Are Equal");
}
else{
    alert("Invalid Input");
}
// 2. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
var num = Number(prompt("Enter Number You Want To Check Whether It Is Positive, Negative Or Zero"));
if (num > 0){
    alert("The Number Is Positive");
}
else if (num < 0){
    alert("The Number Is Negative");
}
else if (num === 0){
    alert("The Number Is Zero");
}
else{
    alert("Invalid Input");
}
// 3. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
var randChar = prompt("Enter A Character");
if (randChar === "a" || randChar ==="e" || randChar ==="i" || randChar ==="o" || randChar ==="u"){
    alert("It Is A Vowel: " + true);
}
else {
    alert(false);
}
// 5. Write a program that 
// a. Store correct password in a JS variable. 
// b.  Asks user to enter his/her password 
// c.  Validate the two passwords: 
// i. Check if user has entered password. If not, then give message “ Please enter your password” 
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise. 
var correctPass = "123***123"
var passUserInput = prompt("Enter Password: ");
if (passUserInput === correctPass){
    alert("Correct! The password you entered matches the original password");
}
else if (passUserInput === "" || passUserInput === null){
    alert("Please enter your password");
}
else{
    alert("Incorrect password");
}
// 6. This if/else statement does not work. Try to fix it: 
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; 
// else 
// greeting = "Good evening"; 
// }
var greeting;
var hour = 13;
if (hour < 18){
    greeting = "Good Day"
}
else{
    greeting = "Good Evining"
}
// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements 
var inputTime = Number (prompt("Enter Time (In 2400 format)"));
if(inputTime >= 0 && inputTime <1200){
    alert("Good Morning");
}
else if(inputTime >= 1200 && inputTime <1700){
    alert("Good Afternoon");
}
else if(inputTime >= 1700 && inputTime <2100){
    alert("Good Evening");
}
else if(inputTime >= 2100 && inputTime <=2359){
    alert("Good Night");
}
else{
    alert("Invalid Input");
}