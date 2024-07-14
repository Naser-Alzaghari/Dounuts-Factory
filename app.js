var userName = prompt("Enter you name:");
var gender =prompt("Enter your gender: (male / female)");
while (gender != "male" && gender != "female"){
    gender = prompt("Try again!\nEnter your gender: (male / female)");
    
}
var welcomeMessage = "Welcome ";
switch(gender){
    case "male": welcomeMessage=welcomeMessage.concat("Mr ");break;
    case "female": welcomeMessage=welcomeMessage.concat("Ms ");break;
}
welcomeMessage=welcomeMessage.concat(userName);
alert(welcomeMessage);
var typeOfOrder = prompt("what do you want to order? (Dount , Coffee , Ice cream , Bakery)");

var orderName = prompt("Enter the name of the ordar:");

alert('Your order "'+orderName+'" is getting prepared!');
var info = [userName,gender,typeOfOrder,orderName];
for (let i = 0; i<info.length;i++){
    console.log(info[i]);
}