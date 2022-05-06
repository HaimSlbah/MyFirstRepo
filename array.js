// let arr = [15, 32, 45];

// console. log(arr);

// console. log(arr[0]);

// console.log(arr.length);

// let fruits = ["apple", "banana", 15];

// console.log(fruits);

// let apple = fruits [0];

// console.log(apple);

// let arr = [15, 32, 45];
// let i = 0
// while (i < arr.length) {
//     console.log(arr[i]);
//     i = i + 1
// }

// console.log("finish while loop");

// let arr = [15, 32, 45];

// for(let i = 0; i < 10; i++){
// console.log(i);
//  if (i == 4)
//     break;
// }

// console.log("finish for loop");

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     if (i == 4)
//         continue;
// }

// console.log("finish for loop");

//
// let fruits = ["apple", "banana", "orange"]

// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] == "banana") {
//         console.log("we have bananas");
//     }
//     console.log(fruits[i]);
    
// }

// let arr = [1, 2, 3]

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         console.log(j);
//     }
// }



// let person = {
//     name: 'john',
//     age: '40',
//     country: 'israel',
// };

// console.log(person);

// console.log(person.age);

// console.log(person["name"]);

// //********************** */
// // הבדלים:
// const x = 10; לא ניתן לדריסה

// let x = 20; ניתן לדריסה

// let fruits = ["apple", "banana", "orange"]

// let person = {
//     name: 'john',
//     age: '40',
//     country: 'israel',
// };


// for (const iterator of fruits) {
//     console.log(iterator);
// }

// for (const key in person) {
//     console.log(person[key]);
// }

//  let person = {
//   name: 'john',
//   age: '40',
//   country: 'israel',
//          };

// for (const key in person) {
//     if (key == "name" || key == "age")
//     console.log(person[key]);         
// }


let fruits = ["apple", "banana", "orange"]

let person = {
    name: 'john',
    age: '40',
    country: 'israel',
    sayHello: () => console.log("Hello"),
}

// person. sayHello();

console.log(typeof []);

// *************************
const arr = [23, 45, 88];

console.log(arr);

// arr. push(65);

// arr.pop()

console.log(arr);

console.log(arr.includes(45));

// let index = arr. indexOf(88);

// console.log(index);

// ****************************
// const obj = {};

// obj.blah = 10;

// console.log(obj);

// // ***********************
// const arr = [23, 45, 88];

// function isElementInArray (el, arr) {
//     return arr.includes(el);

// }
// console.log(isElementInArray(23,arr));
// **********************

const arr = [23, 45, 88];

// function foo(el){
//     console.log(el);
// }

// arr.forEach(el => console.log(el))

const foo = (el) => {
    console.log(el);
}

arr.forEach(foo);



