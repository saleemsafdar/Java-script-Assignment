let current_users = ["Admin", "Eric", "Ali", "Hamza", "Fatima"];
let new_users = ["ALI", "Ahmed", "Sarah", "admin", "Taha"];

// Convert current users to lowercase for comparison
let current_users_lower = current_users.map(user => user.toLowerCase());

for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`Sorry, the username "${new_user}" is taken. Please enter a new one.`);
    } else {
        console.log(`The username "${new_user}" is available.`);
    }
}