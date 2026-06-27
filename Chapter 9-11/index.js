// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
var cityName = prompt("Enter Your City Name: ");
if (cityName === "Karachi"){
    alert("Welcome To The City Of Lights")
}
// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am. 
var gender = prompt("Enter Your Gender: ");
if (gender === "male"){
    alert("Good Morning Sir!");
}
if (gender === "female"){
    alert("Good Morning Ma'am!");
}
// 3. Write a program to take input color of road traffic signal 
// from the user & show the message according to this table: 
var trafficSignal = prompt("Enter Color Of Traffix Signal: ");
if (trafficSignal === "Red"){
    alert("Must Stop");
} 
if (trafficSignal === "Yellow"){
    alert("Ready To Move");
} 
if (trafficSignal === "Green"){
    alert("Move Now");
}
// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”var 
remainingFuel = Number(prompt("Enter Remaining Fuel (In Litres): "));
if (remainingFuel <= 0.25){
    alert("Please refill the fuel in your car");
}
// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs. 
// a.
var a = 4; 
if (++a === 5){ 
alert("given condition for variable a is true"); 
}
document.write("Alert Message would be displayed (Part a) <br>");
// b.
var b = 82; 
if (b++ === 83){ 
alert("given condition for variable b is true"); 
}
document.write("Alert Message wouldn't be displayed (Part b) <br>");
// c.
var c = 12; 
if (c++ === 13){ 
alert("condition 1 is true"); 
} 
if (c === 13){ 
alert("condition 2 is true"); 
} 
if (++c < 14){ 
alert("condition 3 is true"); 
} 
if(c === 14){ 
alert("condition 4 is true"); 
}
document.write("condition 2 is true, condition 4 is true (Part c) <br>");
// d.
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
alert("The cost equals"); 
}
document.write("Alert Message would be displayed (Part d) <br>");
// e.
if (true){ 
alert("True"); 
} 
if (false){ 
alert("False"); 
}
document.write("Only True Would Be Displayed In Alert Message (Part e) <br>");
// f.
if("car" < "cat"){ 
alert("car is smaller than cat"); 
}
document.write("Alert Message wouldn be displayed (Part f) <br>");
// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table: 
// Show the total marks, marks obtained, percentage, grade & remarks like:
var sub1 = prompt("Enter First Subject");
var sub2 = prompt("Enter Second Subject");
var sub3 = prompt("Enter Third Subject");
var totalMarks = 100;
var marks1 = Number(prompt("Enter Obtained marks For : " + sub1 + " Out Of " + totalMarks));
var marks2 = Number(prompt("Enter Obtained marks For : " + sub2 + " Out Of " + totalMarks));
var marks3 = Number(prompt("Enter Obtained marks For : " + sub3 + " Out Of " + totalMarks));
var total = totalMarks * 3;
var totalMarksObtained = marks1 + marks2 + marks3;
var percentage = (totalMarksObtained/total) * 100;
document.write("Subject 1 " + sub1 + "<br>Marks: " + marks1 + "/" + totalMarks + "<br>");
document.write("Subject 2 " + sub2 + "<br>Marks: " + marks2 + "/" + totalMarks + "<br>");
document.write("Subject 3 " + sub3 + "<br>Marks: " + marks3 + "/" + totalMarks + "<br>");
document.write("Marks Obtained: " + totalMarksObtained + " Out Of " + total + "<br>");
document.write("Percentage: " + percentage + "<br>");
if (percentage >= 80 && percentage <= 100){
    document.write("Grade: A-one <br> Remarks: Excellent <br>");
}
else if(percentage >= 70 && percentage < 80){
    document.write("Grade: A <br> Remarks: Good <br>");
}
else if(percentage >= 60 && percentage < 70){
    document.write("Grade: B <br> Remarks: Need To Improve <br>");
}
else if(percentage >= 0 && percentage < 60){
    document.write("Grade: Fail <br> Remarks: Sorry <br>");
}
else{
    alert("Percentage Out Of Range");
}
// 7. Guess game: 
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. 
// a. If user guesses the same number, show “Bingo! Correct answer”. 
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
alert("Guess Game");
var secretNum = 7;
var guess = Number(prompt("Guess The Number (From 1-10)"));
if (guess === secretNum){
    alert("Bingo! Correct answer");
}
else if (guess + 1 === secretNum || guess -1 === secretNum){
    alert("Close enough to the correct answer");
}
else{
    alert("invalid Guess Range");
}
// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
var usernum = Number(prompt("Enter Num You Want To Check Whether It Is Divisible By 3 Or Not"));
if (usernum%3 === 0){
    alert("Yes The Number Is Divisible By 3");
}
else{
    alert("No!! The Number Is Not Divisible By 3");
}
// 9. Write a program that checks whether the given input is an even number or an odd number.
var num = Number(prompt("Enter Number You Want To Check Whether It Is Odd Or Even"));
if (num%2 ===0){
    alert("The Number Is Even");
}
else{
    alert("The Number Is Odd");
}
// 10. Write a program that takes temperature as input and shows a message based on following criteria 
// a. T > 40 then “It is too hot outside.” 
// b. T > 30 then “The Weather today is Normal.” 
// c. T > 20 then “Today’s Weather is cool.” 
// d. T > 10 then “OMG! Today’s weather is so Cool.”
var temp = Number(prompt("Enter Temperature: "));
if(temp >= 40 && temp < 60){
    alert("It is too hot outside.");
}
else if(temp >= 30 && temp < 40){
    alert("The Weather today is Normal.");
}
else if(temp >= 20 && temp < 30){
    alert("Today’s Weather is cool.");
}
else if(temp >= 10 && temp < 20){
    alert("OMG! Today’s weather is so Cool");
}
else {
    alert("It might be cold or u must be melted");
}
// 11.
// Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: 
// a. First number 
// b. Second number 
// c. Operation (+, -, *, /, %) 
// Compute & show the calculated result to user.
var calcNum1 = Number(prompt("Enter Num1"));
var calcNum2 = Number(prompt("Enter Num2"));
var calcOperator = prompt("Enter The Operator (+, -, *, /, %)");
if (calcOperator === "+"){
    alert("The Output Is: " + (calcNum1+calcNum2));
}
if (calcOperator === "-"){
    alert("The Output Is: " + (calcNum1-calcNum2));
}
if (calcOperator === "*"){
    alert("The Output Is: " + (calcNum1*calcNum2));
}
if (calcOperator === "/"){
    alert("The Output Is: " + (calcNum1/calcNum2));
}
if (calcOperator === "%"){
    alert("The Output Is: " + (calcNum1%calcNum2));
}
else{
    alert("Invalid Operator");
}