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