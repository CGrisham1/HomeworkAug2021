const pizzaPlace = 'Olives Pizza';
let numberOfToppings = 10;

console.log(pizzaPlace);
console.log(numberOfToppings);


if (numberOfToppings < 10) {
    console.log("Quality,not quantity");
} else {
    console.log("A whole lot of pizza");
}
console.log(`At ${pizzaPlace} we have ${numberOfToppings} toppings `);

// Modulo is the % and it does something below but i dont remember THIS IS A LOOP TO WRITE OUT THE EVEN NUMBERS

for (let i = 1; i <= numberOfToppings; i++) {
    if (i % 2 === 0)
    console.log(i);
}

//OLD ONE
//for(let i = 1; i<=10; i++){
//   console.log(i%2==0);
//  console.log(i);
//   if (i%2==0){
//       console.log(i + "is even");    
//   }
//}

//const pizzaPlace = 'Olives Pizza';
//const numberOfToppings = 10;
//above are my variables that I named all on one command line
//console.log(typeof pizzaPlace , pizzaPlace);
//console.log(typeof numberOfToppings, numberOfToppings);
//below is my if else statement I used to calculate what string will be used depending on # of toppings
//if (numberOfToppings <= 10) {
//    console.log("Quality,not quantity");
//} else {
//    console.log("A whole lot of pizza");
//}