
// my favourite fruits are
let fruits = ["apple", "pineapple", "bananas", "grapes", "strwaberies", "watermelon", "mango"];

console.log(fruits);


// my three most favorite fruits are.

let myfavFruits = fruits.slice(3, 6);
console.log(myfavFruits);

// let myFavFruit = "bananas";
// five if statements to check my favourite fruit is ....
for (let i = 0; i < 7; i++) {
    if ("bananas" === fruits[i]) {
        console.log("I really like Bananas")
    }

    if ("apple" === fruits[i]) {
        console.log("I really like apple")
    }
    if ("pineapple" === fruits[i]) {
        console.log("I really like pineapple")
    }

    if ("grapes" === fruits[i]) {
        console.log("I really like grapes")
    }
    if ("watermelon" === fruits[i]) {
        console.log("I really like watermelon")
    }
}



export { }



