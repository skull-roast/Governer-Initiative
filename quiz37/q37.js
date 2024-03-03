"use strict";
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(size = "Large", message = "I Love Typescript") {
    return console.log(`size:${size}, message:'${message}'`);
}
//Printing with default size and message;
makeShirt();
//Printing with medium size and default message;
makeShirt("Medium");
//Printing with small size and different message
makeShirt("Small", "Skull_Roast");
