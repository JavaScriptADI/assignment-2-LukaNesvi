let number = prompt("Enter a number:");
number = Number(number);

if (number / 2 === Math.floor(number / 2)) {
    console.log("That number is even.");
} else {
    console.log("That number is odd.");
}