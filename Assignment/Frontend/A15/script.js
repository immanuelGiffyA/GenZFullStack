let isLoggedIn = true;
let role = "admin";

if (isLoggedIn) {
    console.log("User is logged in.");

    if (role.toLowerCase() === "admin") {
        console.log("User is an Admin.");
    } else {
        console.log("User is a Normal User.");
    }
} else {
    console.log("User is not logged in.");
}

let number = parseInt(prompt("Enter a number:"));

if (number % 2 === 0) {
    console.log("The number is Even.");
} else {
    console.log("The number is Odd.");
}

