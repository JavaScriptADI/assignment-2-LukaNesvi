let num1 = Number(prompt("X = ?"));
let num2 = Number(prompt("Y = ?"));

let operation = prompt("Operation - ? ( + - * / )");

let result;
if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    result = num1 / num2;
} else {
    result = "??????";
}

console.log("Result: " + result);