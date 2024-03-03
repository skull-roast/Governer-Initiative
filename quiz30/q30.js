"use strict";
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
Object.defineProperty(exports, "__esModule", { value: true });
exports.web = void 0;
let web = ["Faraz", "Nadeem", "Admin", "Ramla Eman", "Affan"];
exports.web = web;
function greetUser() {
    for (const i in web) {
        if (web[i] === "Admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${web[i]}, welcome back to our website`);
        }
        ;
    }
}
greetUser();
