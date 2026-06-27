// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
document.write("Result");
var a = prompt("Enter Num For Arithmetic Process");
document.write("The Value Of a Is " + a);
document.write("<br>The Value Of ++a Is " + ++a);
document.write("<br>Now The Value Of ++a Is " + a);
document.write("<br>The Value Of a++ Is " + a++);
document.write("<br>Now The Value Of a++ Is " + a);
document.write("<br>The Value Of --a Is " + --a);
document.write("<br>Now The Value Of --a Is " + a);
document.write("<br>The Value Of a-- Is " + a--);
document.write("<br>Now The Value Of a-- Is " + a);
// 2. What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; 
// Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("Out put Of --a is 1 <br>");
document.write("Out put Of --a - --b is 1 <br>");
document.write("Out put Of --a - --b + ++b is 2 <br>");
document.write("Out put Of --a - --b + ++b + b-- is 3 <br>");
document.write("The Value Of a is " + a + "<br>");
document.write("The Value Of b is " + b + "<br>");
document.write("And The Result Is " + result);
// 3. Write a program that takes input a name from user & greet the user.
var userName = prompt("Enter Your Name: \n");
alert(userName + " Welcome To Our Website! \n");
// 4. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
var tableNum = prompt("Enter Table You Want: \n") || 5;
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
document.write("<br> " + tableNum + "*" + 10 + "=" + tableNum * 10 + "<br>");
// 5. Take 
// a) Take three subjects name from user and store them in 3 different variables. 
// b) Total marks for each subject is 100, store it in another variable. 
// c) Take obtained marks for first subject from user and stored it in different variable. 
// d) Take obtained marks for remaining 2 subjects from user and store them in variables. 
// e) Now calculate total marks and percentage and show the result in browser.
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
document.write("<br> Subject 1 " + sub1 + "<br>Marks: " + marks1 + "/" + totalMarks);
document.write("<br> Subject 2 " + sub2 + "<br>Marks: " + marks2 + "/" + totalMarks);
document.write("<br> Subject 3 " + sub3 + "<br>Marks: " + marks3 + "/" + totalMarks);
document.write("<br> Marks Obtained: " + totalMarksObtained + " Out Of " + total);
document.write("<br> Percentage: " + percentage);