"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//array of magicians names
let magicianNames = ["David Copperfield", "Harry Houdini", "Lance Burton", "Dynamo", "Shin Lim"];
//function to show magicians names
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
    ;
}
//function to greet magicians
function make_greet(magicians) {
    let greetMagicians = magicians.map(magician => `The Great ${magician}`);
    return greetMagicians;
}
//new array with great magician names 
let greetMagicianNames = make_greet(magicianNames);
//calling the orignal magician names
console.log("Orignal Magicians Names");
show_magicians(magicianNames);
//calling the magician names with "the great"
console.log("\nGreet Magicians:");
show_magicians(greetMagicianNames);
