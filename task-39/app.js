let magician_names = ["Harry Houdini", "David Blaine", "Dynamo"];

let great_magicians = [...magician_names]; 

make_great(great_magicians); 

console.log("Original Array:");
show_magicians(magician_names);

console.log("Modified Array:");
show_magicians(great_magicians); 