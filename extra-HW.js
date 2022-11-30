console.log("\n----------EXERCISE 1---------")
/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/
let subject = ["maths", "Biology", "Physics", "Chemistry", "English", "Social"]
console.log("Subjects:", subject);
subject.reverse();
console.log("Reversed elements:", subject);

console.log("\n----------EXERCISE 2---------")
/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

let marks = [54, 34,89, 67, 67, 90, 100, 90, 56, 99, 120, 110]
console.log("Marks:" ,marks)
console.log("Maximum Value:" ,Math.max(...marks));

console.log("\n----------EXERCISE 3---------")
/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/
console.log("Marks:" ,marks)
console.log("Minimum Value:" ,Math.min(...marks));

console.log("\n----------EXERCISE 4---------")
/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/
let number1 =[23, 24,56,77,89,80,90,99,43,45,54]
let evenNumber =[]
number1.forEach(number => {
    if(number %2 ===0){
        evenNumber.push(number);
    }
})
console.log("Even Numbers:", evenNumber)

console.log("\n----------EXERCISE 5---------")
/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/
let oddNumber = []
number1.forEach(number => {
    if(number %2 ===1){
        oddNumber.push(number);
    }
})
console.log("Deleted Even Numbers:", oddNumber)

console.log("\n----------EXERCISE 6---------")
/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/
let string ="Expression needed";
console.log("With Vowels:", string)
let noVowels = string.replace( /[aeiou]/gi, '');
console.log("Without Vowels:", noVowels)

console.log("\n----------EXERCISE 7---------")
/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/
console.log("Marks:", marks)
let increasedMarks = marks.map(element => element + 1);
console.log("Increased Marks:", increasedMarks);

console.log("\n----------EXERCISE 8---------")
/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es
 */
for(let i= 0; i < subject.length; i++){
    subject[i] = subject[i].length
    console.log("Replaced to length:", subject)
}