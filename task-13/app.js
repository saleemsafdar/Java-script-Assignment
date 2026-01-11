let guests = ["anwar", "saleem", "sajda", "ghazali", "fatima"];
let unatendguest = "sajda";
console.log(`${unatendguest} ap kio nahi aye aj dinner ke liye`);

let newguest = "maryam";
guests[guests.indexOf(unatendguest)] = newguest;

guests.forEach(guests => {
    console.log(`Dear ${guests} you are still invite to dinner`);
    
    
});