console.log("\n----------EXERCISE 1---------")

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

let positiveNumbers = [1, 2, 3, 4, 5];
console.log("First 5 positive numbers:" , positiveNumbers);

console.log("\n----------EXERCISE 2---------")

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address 
 and age.
*/

let person1 = {
    name: "Farhana",
    surname: "Rafi",
    email: "hana0795@gmail.com",
    age: 27
}
console.log("Person1:", person1);

console.log("\n----------EXERCISE 3---------")

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to represent 
 whether you have or not a driving license.
*/
person1.license = true;
console.log("Adding license:" , person1);

console.log("\n----------EXERCISE 4---------")

/* EXERCISE 4
 Remove from the previously created object the age property.
*/
 delete person1.age;
 console.log("Deleting age:", person1);

 console.log("\n----------EXERCISE 5---------")

 /* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email 
 address than the previous one.
*/
let person2 = {
    name: "John",
    surname: "Doe",
    email: "johndoe@web.de"
}

console.log("Person2:", person2);

if (person1.email === person2.email){
    console.log("Has a different email address")
}else{
    console.log("Has same email address")
}

console.log("\n----------EXERCISE 6---------")

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the 
 current user. Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible 
 for free shipping (otherwise it costs 10). Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart =45;
let shippingCost = 10;
if(totalShoppingCart>50){ 
    console.log("Total Charge:" , totalShoppingCart)
}else{
    console.log("Total Charge:" ,totalShoppingCart + shippingCost)
}

console.log("\n----------EXERCISE 7---------")

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the 
 totalCost.
*/

let totalCharge = totalShoppingCart * .80 + shippingCost * .80;

console.log("Total Charge:" , totalCharge);

console.log("\n----------EXERCISE 8---------")

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/
let car1 = {
    brand : "BMW",
    model : "X3",
    licensePlate : "OS576"
}
console.log("Car1:" , car1);
let car2 = {}
    car2 = Object.assign(car2 , car1)
    car2.licensePlate = "YT453";
    console.log("Car2:" , car2);
let car3 = {}
    car3 = Object.assign(car3 , car1)
    car3.licensePlate = "SR453";
    console.log("Car3:" , car3);
let car4 = {}
    car4 = Object.assign(car4 , car1)
    car4.licensePlate = "TJ478";
    console.log("Car4:" , car4);
let car5 = {}
    car5 = Object.assign(car5 , car1)
    car5.licensePlate = "FR390";
    console.log("Car5:" , car5);

console.log("\n----------EXERCISE 9---------")
/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/
let carsForRent = [
    { brand: 'BMW', model: 'X3', licensePlate: 'OS576' },
    { brand: 'BMW', model: 'X3', licensePlate: 'YT453' },
    { brand: 'BMW', model: 'X3', licensePlate: 'SR453' },
    { brand: 'BMW', model: 'X3', licensePlate: 'TJ478' },
    { brand: 'BMW', model: 'X3', licensePlate: 'FR390' },
];

console.log("\n----------EXERCISE 10---------")
/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

carsForRent.splice(0,1);
carsForRent.pop();
console.log("Car for rent after removing:", carsForRent);

console.log("\n----------EXERCISE 11---------")
/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand 
 properties.
*/
console.log("Type of Car variable:", typeof carsForRent)

console.log("\n----------EXERCISE 12---------")
/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

let carsForSale = [
    {
        brand : "Benz",
        model : "C class",
        licensePlate : "OS576"
    },
    {
        brand : "Benz",
        model : "E class",
        licensePlate : "PS576"
    },
    {
        brand : "Benz",
        model : "A class",
        licensePlate : "LS576"
    }
] 
let totalCars = carsForSale.concat(carsForRent);
console.log("Total Cars:" , totalCars);

console.log("\n----------EXERCISE 13---------")
/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/
for (let i = 0; i < carsForSale.length; i++) {
    console.log("Data for each Car:" ,carsForSale[i]);
}