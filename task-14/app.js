let guests = ["anwar", "saleem", "sajda", "ghazali", "fatima"];
console.log("good news dinner will be start in 5 mints away let find a big tables");

guests.unshift("bilal");
guests.splice (2 , 0, "Gulmuhammad");
guests.push("azeem");
guests.forEach(guests => {
    console.log(`Dear ${guests} please join us for big dinner party`);
    
    
});