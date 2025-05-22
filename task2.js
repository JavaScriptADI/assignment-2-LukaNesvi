let score = prompt("Enter your score:");
score = Number(score);


if (score >= 90) {
    console.log("Your grade: A");
} else if (score >= 80) {
    console.log("Your grade: B");
} else if (score >= 70) {
    console.log("Yor grade: C");
} else if (score >= 60) {
    console.log("Your grade: D");
} else {
    console.log("Your grade: F");
}