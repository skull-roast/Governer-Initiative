// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
//  Call the function three times, using a different number of arguments each time.

function orderSandwich(...items:string[]):void{
    console.log("Summary of Sandwich");
    if (items.length === 0){
        console.log("Please select some items for Your Sandwich");
    }else{
        items.forEach((item, i)=>{
            console.log(` ${i + 1}, ${item}`);
        });
    }
}
// call of the function
orderSandwich()
orderSandwich("Mayonise", "Chicken")
orderSandwich("Capsicam", "Beef kabab", "Cabbage", "Special Spices")
orderSandwich("Grated Cheese", "Chicken", "Ketchup")
