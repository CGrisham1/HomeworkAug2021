const pizzaToppings = [Meat , Cheese , Bacon , Tomato];

//Above is my array, within the array is 4 toppings

function greetCustomer() {
    console.log("Welcome to Olive's Pizza!") +pizzaToppings;
}
greetCustomer();

//Why do I need the "GreetCustomer();" outside of the function?
//Above is my function that is greeting the customer, I don't remember what the "+pizzaToppings" is

function getPizzaOrder(size, crust, ...toppings) {
    console.log("One large thick crust pizza with x , y , z ...")
};



const size = large
const crust = thin
const toppings = [Cheese, Meat, Bacon, Tomato];
//Above is how I defined my size, crust and toppings



function preparePizza([size , crust , ...toppings]) {
    
};
