let num1 = Number(prompt("X = ?"));
let num2 = Number(prompt("Y = ?"));

if (num1 > num2) {
    console.log("X > Y");
} else if (num2 > num1) {
    console.log("X < Y");
} else {
    console.log("X = Y");
}