let guests = ["anwar", "saleem", "sajda", "ghazali", "fatima"];
console.log("thanks for you coming");

while (guests.length>2) {
    let removeGuest =guests.pop();
    console.log(`Sorry ${removeGuest} I can t invite you to dinner`
        
    );
    guests.forEach(guests => {
        console.log(`Mubark ${guests} ap abhi bhi invited ho`);
        
        
    });
    
}