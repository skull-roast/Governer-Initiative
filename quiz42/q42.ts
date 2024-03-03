//Great Magicians: Start with a copy of your program from Exercise 39. 
//Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
//Call show_magicians() to see that the list has actually been modified.
export {}

//array of magicians names
let magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Lance Burton", "Dynamo", "Shin Lim"];

//function to show magicians names
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    };
}

//function to greet magicians
function make_greet(magicians:string[]):string[]{
    let greetMagicians:string[] = magicians.map(magician => `The Great ${magician}`);
    return greetMagicians;
}

//new array with great magician names 
let greetMagicianNames: string[] = make_greet(magicianNames);

//calling the orignal magician names
console.log("Orignal Magicians Names");
show_magicians(magicianNames);


//calling the magician names with "the great"
 console.log("\nGreet Magicians:");
show_magicians(greetMagicianNames)