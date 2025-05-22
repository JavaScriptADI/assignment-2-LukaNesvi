let age = Number(prompt("Enter your age:"));

if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("You can vote in " + (18 - age) + " years.");
}