let city = "Karachi";

// Check for exact match
if (city === "Karachi") {
  console.log("Welcome to the City of Lights!");
} else if (city === "Lahore") {
  console.log("Welcome to the Heart of Pakistan!");
}

// Check string length
let password = "pass";
if (password.length < 8) {
  console.log("Password is too short."); // This will run
}