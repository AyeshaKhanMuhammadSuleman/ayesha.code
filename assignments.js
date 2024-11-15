
// Chapt 2
// let c = alert("Hello World", "<i>");
// let a = alert("Name: Ayesha Khan");
// let b = alert( "Age: 18");
// let d = alert("Course : Web And App Development"); 
// let e = alert ("PIZZA \n PIZZ \n PIZ \n PI \n P");
// let f = alert ("My email:ayeshakhan@gmail.com");
// let book = alert ("I am trying to learn from the Book A smarter way to learn Javascript");
// let o = alert("(-------- ✿✿---------)")
// let v = "Yah! I can write HTML content through JavaScript"
// document.write(v);
//Chap 3
// let a = alert("I am 18 years old");
// let b = alert("You have visited this site 14 times");
// let c = "My Birth year is 2006"
// document.write(c, "<br>")
// let d = "Data type of my declared variable is number"
// document.write(d  ,"<br>")
// let e = ("John Doe orderes 5 T-Shirt(s) on XYZ Clothing Brand")
// document.write(e , "<br>")
//chap 4
// let a = "<b> Rules for naming JS variables </b> <br> <br> ";
// document.write(a ,"<br>");

// let b = "Variables names can only contain numbers, $ and _. For example : $my_1stVariable"
// document.write(b , "<br>")
// let c = "Variables must begin with letter, $ or _. For example : $name, _name or name"
// document.write(c , "<br>")
// let d = "Variable names are case sensitive <br>" 
// document.write(d)
// let e ="Variable names should not be JS keywords"
// document.write(e)
//chp 5
// let a = "15";
// let b  = "6";
// a = parseInt(a);
// b = parseInt(b);
// console.log("Sum of two Variable is" , a+b); 
// console.log("Sum of two Variable is" , a-b); 
// console.log("Sum of two Variable is" , a*b); 
// console.log("Sum of two Variable is" , a/b); 
// console.log("Sum of two Variable is" , a%b); 

// console.log("Value after decleration is");
//  let d = 6;
// console.log("Initial Value = 6" )
// console.log("After Increment =" , ++d)
// // console.log( "After Decrement=" , --d)
// // console.log( "After Adding 7 to the variable= " , d+7)
// // console.log ("Decrement after addition =" , d-- )
// d = d +7;
// console.log("value after adddition = " , d );
// d--
// console.log (" Value after decrement =" , d);
// console.log ("The Remainder is:" , 6%3);
//next question
// let j  = 600;
// console.log("Cost of One movie Ticket is = " , j );
// console.log ("5 ticket price=" , j*5);
// document.write("The cost to buy 5 tickets for a movie is <b>3000PKR</b>")
// //Table Generator 
// let table = prompt("Enter The table you want")
// for( let i = 1; i<=10 ; i++) {
// document.write (table + " X " + i + "= " + table*i + "<br>")
// }
// shopping cart
// let a = prompt("Price of item 1 =")
// a = parseInt(a)
// console.log("Price of item 1 =" , a )
// let c = prompt("Price of item 2 =")
//  c = parseInt(c)
// console.log("Price of item 2 =" , c )

// let b = prompt ("Quantity of item 1 =")

// console.log("Quantity of item 1 =" , b )
// let d = prompt ("Quantity of item 2 =")
// console.log("Quantity of item  2 =" , d)
// let e = 250
//  e = parseInt(e)
// console.log ("Shipping Charges for all over Pakistan is =" , e)
// console.log("Total Cost of your order is =" , a+c*b*d+e);
//Masksheet
// let a = 980;
// console.log("Total Marks =" , a)
// let b = 804;
// console.log("Obtained Marks =" , b)
// console.log("Percentage = " , b*100/a)

//Currency IN PKR
// let a = 60;
// console.log( "The Currency in PKR is :" , a+5*10/2)
//AGE CALCULATOR:
// let currentyear = 2024;
// document.write("Current Year : 2024 <br>")
// let birthyear = 1992 ;
// document.write("Birth Year : 1992 <br>")
// document.write ( " Your age: " , currentyear-birthyear )
// The Geometrizer
// let raduis = 20;
// console.log("The Radius is : 20")
// console.log("The Circumference is :"  , 2*3.14*raduis)
// console.log("Area : " , 3.142*20**2 )
//THE SUPPLY:
// let snack = "Chips";
// document.write("Favourite Snack : " , snack ,  "<br>")
// let age = 18;
// document.write("My Age  : " ,  age ,  "<br>")
// let maxAge = 65;
// document.write("Maximum Age  : " , maxAge ,  "<br>")
// let perday = 3;
// document.write("Per day intake : " , perday , "<br>")
// document.write( " You will need snacks for the rest of your life is :" , perday*(maxAge-age) )
//CHAPTER 6
// QUESTION 1
// let a = 10;
// console.log("The value of a : " , a);
// console.log("The value of ++a : " , ++a);
// console.log("Now the value of a: " , a);
// console.log("The value of a++ : " , a++)
// console.log("Now the value of a is : " , a);
// console.log("The value of --a : " , --a);
// console.log("Now the value of a : " , a);
// console.log("The value of a-- : " , a--);
// console.log("Now the value of a : " , a)
// QUESTION 2
// let a = 2;
// console.log(a);
// let b = 1;
// console.log(b);   
// console.log("RESULT");
// console.log( --a);
// console.log(--a - --b);
// console.log(--a - --b + ++b);
// console.log(--a - --b + ++b + b);
 //QUESTION 3
//  let a = prompt("ENTER YOUR NAME : " );
//  document.write("Assalam-U-Alaikum! " , a);
//QUESTION 5
// let table = prompt("Enter a number");

// for(let i=1; i<=10; i++){
//     document.write(table + " X " + i + " = " + table*i +"<br>")
// }
// cityName = prompt("Enter your city name:");


// if (cityName.toLowerCase() === "karachi") {
//   alert("Welcome to the City of Lights!");
// } else {
//   alert(`Welcome to ${cityName}!`);
// }

// fuel = parseFloat(prompt("Enter remaining fuel in litres:"));

// if (fuel < 0.25) {
//   alert("Please refill the fuel in your car");
// } else {
//   alert(`You have ${fuel} litres of fuel left.`);
// }
//  secretNumber = Math.floor(Math.random(2) * 10) + 1;
//  userGuess = parseInt(prompt("Guess the secret number (1-10):"));
// if (userGuess === secretNumber) {
//   alert("Bingo! Correct answer");
// } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
//   alert("Close enough to the correct answer");
// } else {
//   alert(`Sorry, incorrect answer. The secret number was ${secretNumber}.`);
// }

//  num = parseInt(prompt("Enter a number:"));
// if (num % 3 === 0) {
//   alert(`${num} is divisible by 3.`);
// } else {
//   alert(`${num} is not divisible by 3.`);
// }
//  num = (prompt("Enter a number:"));
// if (num % 2 === 0) {
//   alert(`${num} is an even number.`);
// } else {
//   alert(`${num} is an odd number.`);
// }
//  temp = (prompt("Enter temperature in °C:"));
// if (temp > 40) {
//   alert("It is too hot outside.");
// } else if (temp > 30) {
//   alert("The Weather today is Normal.");
// } else if (temp > 20) {
//   alert("Today’s Weather is cool.");
// } else if (temp > 10) {
//   alert("OMG! Today’s weather is so Cool.");
// } else {
//   alert("It's freezing! Stay warm.");
// }

//  num1 = (prompt("Enter First number:"));
//  operation = prompt("Enter operation (+, -, *, /, %):");
//  num2 = (prompt("Enter Second number:"));


// if (operation === "+") {
//   const result = num1 + num2;
//   alert(`${num1} + ${num2} = ${result}`);
// } else if (operation === "-") {
//   const result = num1 - num2;
//   alert(`${num1} - ${num2} = ${result}`);
// } else if (operation === "*") {
//   const result = num1 * num2;
//   alert(`${num1} * ${num2} = ${result}`);
// } else if (operation === "/") {
//   if (num2 !== 0) {
//     const result = num1 / num2;
//     alert(`${num1} / ${num2} = ${result}`);
//   } else {
//     alert("Error: Division by zero!");
//   }
// } else if (operation === "%") {
//   const result = num1 % num2;
//   alert(`${num1} % ${num2} = ${result}`);
// } else {
//   alert("Invalid operation!");
// }
//  var a = 4; 
// if (++a === 5){ 
// alert("given condition for variable a is true"); 
// } 
// wrking

//  var b = 82; 
// if (b++ === 83){ 
// alert("given condition for variable b is true"); 
// } 
//not working

// var c = 12; 
// if (c++ === 13){ 
// alert("condition 1 is true"); 
// } 
// if (c === 13){ 
// alert("condition 2 is true"); 
// } 
// if (++c < 14){ 
// alert("condition 3 is true"); 
// } 
// if(c === 14){ 
// alert("condition 4 is true"); 
// } 
//only condition 2 and 4 is true

//  var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
// alert("The cost equals"); 
// } 
// working

//  if (true){ 
// alert("True"); 
// } 
// if (false){ 
// alert("False"); 
// }
// //working

//  color = prompt("Enter traffic signal color (RED, YELLOW, GREEN):").toUpperCase();

// switch (color) {
//   case "RED":
//     alert("MUST STOP");
//     break;
//   case "YELLOW":
//     alert("READY TO MOVE");
//     break;
//   case "GREEN":
//     alert("MOVE NOW");
//     break;
//   default:
//     alert("Invalid color. Please enter RED, YELLOW, or GREEN.");
// }
//  sub1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
//  sub2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
//  sub3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));
// totalMarks = parseFloat(prompt("Enter total marks:"));
//  totalObtained = sub1 + sub2 + sub3;
// const percentage = (totalObtained / totalMarks) * 100;
// let grade;
// let remarks;
// if (percentage >= 90) {
//   grade = "A+";
//   remarks = "You did Amazing"
// } else if (percentage >= 80) {
//   grade = "A";
//   remarks = "Great Work"
// } else if (percentage >= 70) {
//   grade = "B";
//   remarks = "You need to improve"
// } else if (percentage >= 60) {
//   grade = "C";
//   remarks = "Need to do hardwork"
// } else if (percentage >= 50) {
//   grade = "D";
// } else {
//   grade = "F";
// }

// document.write(`Total Marks Obtained: ${totalObtained} / ${totalMarks}` , "<br>");
// document.write("percentage :" , totalObtained / totalMarks * 100 , "<br>");
// document.write(`Grade: ${grade}`, "<br>"); 
// document.write( "Remarks: " , remarks);

