var userName = prompt("Enter you name:");
var gender = prompt("Enter your gender: (male / female)");
var welcomeMessage = "Welcome ";
switch(gender){
    case "male": welcomeMessage=welcomeMessage.concat("Mr ");break;
    case "female": welcomeMessage=welcomeMessage.concat("Ms ");break;
}
welcomeMessage=welcomeMessage.concat(userName);
alert(welcomeMessage);
var dount = confirm("do you want Dount?");
var coffee = confirm("do you want Coffee?");
var iceCream = confirm("do you want ice cream?");
var bakery = confirm("do you want Bakery?");

var orderName = prompt("Enter the name of the ordar:");

alert('Your order "'+orderName+'" is getting prepared!');
var statement = "";

switch(gender){
    case "male": statement=statement.concat("Mr ");break;
    case "female": statement=statement.concat("Ms ");break;
}
statement=statement + userName + " orderd " + (dount? "dount " : "") + (coffee? "coffee " : "") + (iceCream? "iceCream " : "") + (bakery? "bakery" : "");
console.log(statement);

