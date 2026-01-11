let places = ["Japan", "Iceland", "Egypt", "Switzerland", "Canada"];

console.log("Original Order:", places);


console.log("Alphabetical:", [...places].sort());


console.log("Still Original:", places);

console.log("Reverse Alphabetical:", [...places].sort().reverse());

places.reverse();
console.log("Original Reversed:", places);