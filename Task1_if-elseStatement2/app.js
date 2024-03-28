/*Task_2 : Write a TypeScript program in which you have to display the iftar menu to the custumer and to tell
customer to select one item and one drink, using if/else statemernts show customer the prices of items and drinks.*/
import inquirer from "inquirer";
const answer1 = await inquirer.prompt({
    type: "list",
    name: "iftarMenu",
    message: "What item would you like to select for Iftar Menu?:",
    choices: ["ChanaaChaat", "SpecialDahiBhalla", "ChickenBiryani", "FriedFish", "BlackPepperSteak", "FruitChaat"]
});
const answer2 = await inquirer.prompt({
    type: "list",
    name: "iftarDrink",
    message: "What drink would you like in your Iftar Menu?:",
    choices: ["RoohAfza", "Lemonade", "MangoJuice", "OrangeJuice", "BananaShake", "ChaiLatte"]
});
if (answer1.iftarMenu === "ChanaChaat") {
    console.log(`The price of 1 plate ${answer1.iftarMenu} is Rs200...`);
}
else if (answer1.iftarMenu === "ChickensBirayni") {
    console.log(`The price of 1 plate ${answer1.iftarMenu} is Rs:500...`);
}
else if (answer1.iftarMenu === "FriedFish") {
    console.log(`The price of 1 plate ${answer1.iftarMenu} is Rs:850...`);
}
else if (answer1.iftarMenu === "BlackPepperSteak") {
    console.log(`The price of 1 plate ${answer1.iftarMenu} is Rs:2000...`);
}
else if (answer1.iftarMenu === "FruitChaat") {
    console.log(`The price of 1 plate ${answer1.iftarMenu} is Rs:350...`);
}
else {
    console.log("We have no other item in our Iftar Menu...");
}
if (answer2.iftarDrink === "RoohAfza") {
    console.log(`The price of ${answer2.iftarDrink} is Rs:100...`);
}
else if (answer2.iftarDrink === "Lemonade") {
    console.log(`The price of ${answer2.iftarDrink} is Rs:150...`);
}
else if (answer2.iftarDrink === "MangoJuice") {
    console.log(`The price of ${answer2.iftarDrink} is Rs:200...`);
}
else if (answer2.iftarDrink === "OrangeJuice") {
    console.log(`The price of ${answer2.iftarDrink} is Rs:200...`);
}
else if (answer2.iftarDrink === "BananaShake") {
    console.log(`The price of ${answer2.iftarDrink} is Rs:200...`);
}
else if (answer2.iftarDrink === "ChaiLatte") {
    console.log(`The price of ${answer2.iftarDrink} is Rs:200...`);
}
else {
    console.log("WE have no other drink in our Iftar Drink Menu...");
}
console.log(answer1.iftarMenu);
console.log(answer2.iftarDrink);
