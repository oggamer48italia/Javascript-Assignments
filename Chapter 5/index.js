// // 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
alert("Enter Numbers To Add");
var num1 = Number(prompt("Enter Num 1"));
var num2 = Number(prompt("Enter Num 2"));
var sum = num1 + num2;
document.write("Sum of " + num1 + " And " + num2 + " Is " + sum);
// // 2. Repeat task1 for subtraction, multiplication, division & modulus.
// // subtraction
alert("Enter Numbers To Subtract");
var num1 = Number(prompt("Enter Num 1"));
var num2 = Number(prompt("Enter Num 2"));
var sub = num1 - num2;
document.write("<br>Sub Of " + num1 + " And " + num2 + " Is " + sub);
// // multiplication
alert("Enter Numbers To Multiply");
var num1 = Number(prompt("Enter Num 1"));
var num2 = Number(prompt("Enter Num 2"));
var mult = num1 * num2;
document.write("<br>Multiplication Of " + num1 + " And " + num2 + " Is " + mult);
// // division
alert("Enter Numbers To Divide");
var num1 = Number(prompt("Enter Num 1"));
var num2 = Number(prompt("Enter Num 2"));
var divs = num1 / num2;
document.write("<br>Division Of " + num1 + " And " + num2 + " Is " + divs);
// modulus
alert("Enter Numbers To Find Modulus");
var num1 = Number(prompt("Enter Num 1"));
var num2 = Number(prompt("Enter Num 2"));
var modu = num1 % num2;
document.write("<br>Modulus Of " + num1 + " And " + num2 + " Is " + modu);
// 3. Do the following using JS Mathematic Expressions 
// a. Declare a variable.
var age;
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
document.write("<br>Value After Declaration Is " + age);
// c. Initialize the variable with some number. 
age = 5;
// d. Show the value of variable in your browser like “Initial value: 5”.
document.write("<br>Value After Initialisation Is " + age);
// e. Increment the variable.
age = ++age;
// f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write("<br>Value After Increment Is " + age);
// g. Add 7 to the variable.
age = age + 7;
// h. Show the value of variable in your browser like “Value after addition is: 13”.
document.write("<br>Value After Addition Is " + age);
// i. Decrement the variable.
age = --age;
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write("<br>Value After Decrement Is " + age);
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.
age = age % 3;
document.write("<br>The Remainder Is " + age);
// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets 
// to a movie. Example output: 
// Total Cost To Buy 5 Tickets Is PKR 3000
var costOfTicket = 600;
var totalCost = 600 * 5;
document.write("<br>Total Cost To Buy 5 Tickets Is PKR " + totalCost);
// 5. Write a script to display multiplication table of any number in your browser. E.g 
var tableNum = 2;
document.write("<br>Table Of " + tableNum);
document.write("<br> " + tableNum + "*" + 1 + "=" + tableNum * 1);
document.write("<br> " + tableNum + "*" + 2 + "=" + tableNum * 2);
document.write("<br> " + tableNum + "*" + 3 + "=" + tableNum * 3);
document.write("<br> " + tableNum + "*" + 4 + "=" + tableNum * 4);
document.write("<br> " + tableNum + "*" + 5 + "=" + tableNum * 5);
document.write("<br> " + tableNum + "*" + 6 + "=" + tableNum * 6);
document.write("<br> " + tableNum + "*" + 7 + "=" + tableNum * 7);
document.write("<br> " + tableNum + "*" + 8 + "=" + tableNum * 8);
document.write("<br> " + tableNum + "*" + 9 + "=" + tableNum * 9);
document.write("<br> " + tableNum + "*" + 10 + "=" + tableNum * 10);
// 6. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here. 
// a.  Store a Celsius temperature into a variable. 
// b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
// c. Now store a Fahrenheit temperature into a variable. 
// d. Convert it to Celsius & output “NNoF is NNoC”.
var tempC = 25;
var cToF = (tempC * 9/5) + 32;
document.write("<br>" + tempC + "°C Is " + cToF + " °F");
var tempF = 70;
var fToC = (tempF - 32) * 5/9;
document.write("<br>" + tempF + "°F Is " + fToC + " °C");
// 7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges 
// Compute the total cost & show the receipt in your browser.
var pItem1 = 500;
var pItem2 = 200;
var ordQnty1 = 2;
var ordQnty2 = 4;
var shpChrgs = 100;
var totalChrgs = (500*2) + (200*4) + (100);
document.write("<br>Price Of Item 1 Is " + pItem1);
document.write("<br>Price Of Item 2 Is " + pItem2);
document.write("<br>Quantity Of Item 1 Is " + ordQnty1);
document.write("<br>Quantity Of Item 2 Is " + ordQnty2);
document.write("<br>Shipping Charges " + shpChrgs);
document.write("<br>Total Cost Of Your Order Is PKR " + totalChrgs);
// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
var tMrks = 980;
var mrksObtnd = 804;
document.write("<br>Percentage Is " + (mrksObtnd/tMrks) * 100 + "%");
// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. 
//(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
document.write("<br>Currency In PKR <br>" + "PKR" + Number((10*104.80) + (25*28)));
// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 
// Perform all calculations in a single expression 
var intVar = 5;
var intVarRslt = ((intVar + 5) * 10) /2;
document.write("<br>" + intVarRslt);
// 11. The Age Calculator: Forgot how old someone is? Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored values. 
// Output them to the screen like so: “They are either NN or NN years old”.
var crntYear = 2026;
var brthYear = 2012;
var yearRslt = crntYear - brthYear;
document.write("<br>Your Age Is " + yearRslt);
// 12. The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable. 
// b. Calculate the circumference based on the radius, and output “The circumference is NN”. 
// (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
var crclRad = 3.142;
var radius = 20;
var crcmFerence = 2 * crclRad * radius;
document.write("<br>Radius Of Circle Is " + radius);
document.write("<br>Circumference Of Circle Is " + crcmFerence);
var crclArea = crclRad * (radius * radius);
document.write("<br>Area Of Circle Is " + crclArea);
// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable. 
// c. Store a maximum age into a variable. 
// d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of your life. 
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
var fvrtSnack = "Bowl Of Boiled Rice In Milk";
var crntAge = 15;
var maxAge = 16;
var estmtdAmntPerDay = 5;
var snackPerYear = 5 * 365;
document.write("<br>Favourite Snack " + fvrtSnack);
document.write("<br>Current Age " + crntAge);
document.write("<br>Amount of  " + fvrtSnack + " Per Day Is " + estmtdAmntPerDay);
document.write("<br>You Need " + snackPerYear + " " + fvrtSnack + " Per Year");