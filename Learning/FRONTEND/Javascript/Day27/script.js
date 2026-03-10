
// Task 1 — Start, End, Middle
console.log("Start");
setTimeout(() => console.log("Middle"), 0);
console.log("End");

// Task 2 — Login Simulation
console.log("Checking user...");
setTimeout(() => console.log("User found"), 2000);
console.log("Loading dashboard...");

// setTimeout

// Task 1 — Time's up after 5s
setTimeout(() => console.log("Time's up!"), 5000);

// Task 2 — Print 1 to 5 with delays
for (let i = 1; i <= 5; i++) {
  setTimeout(() => console.log(i), i * 1000);
}

// setInterval

// Task 1 — Digital Clock
const clock = setInterval(() => console.log(new Date().toLocaleTimeString()), 1000);
setTimeout(() => clearInterval(clock), 5000); // stops after 5s so it doesn't run forever

// Task 2 — Countdown 10 to 0
let count = 10;
const timer = setInterval(() => {
  console.log(count);
  if (count === 0) clearInterval(timer);
  count--;
}, 1000);

// CALLBACKS

// Task 1 — Download File
function downloadFile(url, callback) {
  setTimeout(() => {
    console.log("Download complete:", url);
    callback();
  }, 2000);
}
downloadFile("file.pdf", () => console.log("File opened"));

// Task 2 — Calculator with Callbacks
const add      = (a, b) => console.log(a + b);
const subtract = (a, b) => console.log(a - b);

function calculate(a, b, operation) {
  operation(a, b);
}

calculate(5, 3, add);      // 8
calculate(5, 3, subtract); // 2