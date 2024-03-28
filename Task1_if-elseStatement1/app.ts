/*Task_1: Write a TypeScript program to ask the user to enter their age. If the age is less than 18,display: 
"You cannot drive", otherwise display:"You can drive"*/
import inquirer from "inquirer";


const age = await inquirer.prompt({
    type:"input",
    name:"userAge",
    message:"Hey! what's your Age? ",

})

if(age.userAge < 0){
    console.log("This is an Invalid Age!!!");
} 
else if(age.userAge < 9){
    console.log("You are a kid, and you cannot even think to drive.");
}
else if(age.userAge < 18 && age.userAge > 9){
    console.log("You are underAge!, you can think of driving after 18.");
}
else{
    console.log("You are eligible for driving, as you are above 18...");

}
console.log(age);