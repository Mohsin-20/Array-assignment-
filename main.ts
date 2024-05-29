

let fruit =["apple","banana", "mango", "orange"];
console.log(fruit, "Fruits" );

let number=[10, 20, 30,40];
console.log(number, "numbers");

let thirdFruit=fruit[2];
console.log(thirdFruit , "Third Fruit");

number[1] =25;
console.log(number ,"change the second element of the numbers array to 25");

fruit.push("grapes");
console.log(fruit,"Add the element grapes to the end of the fruits array using the method.")

let lastFruit = fruit.pop()
console.log(fruit , "Remove the last element from the fruits array ");

let firstFruit = fruit.shift();
console.log(fruit,"Remove the first element from the fruits array");

fruit.unshift("kiwi");
console.log(fruit ,"Add the element kiwi to the beginning of the fruits")

fruit.splice(1,2,);
console.log(fruit,"Remove 2 elements from the fruits array starting from index");

fruit.splice(2,0,"pineapple","peach");
console.log(fruit," Insert the elements pineapple and pear at index 2 of the ")

let citrusFruit= fruit.slice(0, 2);
console.log(citrusFruit , "the first two elements of the fruits ");

let lastTwoFruit= fruit.slice(-2);
console.log(lastTwoFruit,"the last two elements of the fruits array using the method");

