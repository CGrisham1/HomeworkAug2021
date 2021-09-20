const pizzaToppings = ["Meat" , "Cheese" , "Bacon" , "Tomato"];

function greetCustomer() {
    let greeting = `Welcome to Olive's Pizza, our toppings are: `;
    for (let topping of pizzaToppings) {greeting += `${topping}, `;}  
    console.log(greeting);
}
greetCustomer();












// function getPizzaOrder(size, crust, ...toppings) {
//     console.log("One large thick crust pizza with x , y , z ...")
// };


// const size = large
// const crust = thin
// const toppings = [Cheese, Meat, Bacon, Tomato];


// function preparePizza([size , crust , ...toppings]) {
    
// };