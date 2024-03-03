//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


//making an array of magicians
let megicianNames: string[] = ["David Copperfield", "Harry Houdini", "Lance Burton", "Dynamo", "Shin Lim"];

function Show_megicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    };

}
// calling the above function
Show_megicians(megicianNames)
