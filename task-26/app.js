let users = ['admin', 'ali', 'hamza'];
if (users.length === 0) {
    console.log("We need to find some users!");
} else {
    users.forEach(u => {
        if (u === 'admin') console.log("Hello admin, would you like to see a status report?");
        else console.log(`Hello ${u}, thank you for logging in again.`);
    });
}