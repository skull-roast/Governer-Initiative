// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


function cars(make:string, model:string, color?:string){
    let car = {
        make,
        model,
        color
    }
    if(color !== undefined){
        car.color = color;
    }
    return car;
}

let car1 = cars("Toyota", "2023", "White");
let car2 = cars("Honda", "2018", "Black");
let car3 = cars("Kia", "2021", "Red");


console.log(car1);
console.log(car2);
console.log(car3);
