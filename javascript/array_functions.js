// /* 
// global socpe
// { block scope      } 

//  */


// var num2 = 2;
// let num1 = 1;
// const num3 = 3;
// var num4 = "four";
// var num5 = "five";

// /* 
// falsy values
//     false
//     0 || -0
//     ""
//     null
//     undefined
//     NaN
// */

// console.log({ num1 })

// if (true || false) {
//     // if(-1){
//     console.log({ num1 })
//     console.log({ num2 })
//     console.log({ num3 })
//     var num4 = 4
//     let num5 = 5
// }

// console.log({ num4 })
// console.log({ num5 })

// for (var index = 0; index < 1; index++) {
//     console.log("inside")
// }

// function sum() {
//     let num6 = 6
// }

// sum();

// console.log({ num6 });

// console.log({ index });

// .....This is the multiplication of two numbers......//
// let num = 10;

// for (let i = 0; i <= num; i++) {
//     // console.log("The multiplication of " + num + " * " + i + " " + " = " + " " + num * i);

//     /* 
//         Template literal
//         back tick `  ${}   `
//     */
//     console.log(`result if ${ true ? num : "0"  } * ${i}  = ${num*i}`);
// }


// let numbers = [0th element, 1st element , 3]
let numbers = [1, 2, 3]
console.log(numbers[1]);
numbers[3] = 4;

numbers.push(5)
// numbers= [0,...numbers]
numbers.unshift(0)
// numbers.pop();
// numbers.shfit();

numbers.splice(2, 2, "two", "thgree")

// console.log(numbers.length);

// let new_arr = numbers.slice(2, 4)
// console.log(new_arr);

/* in inde 0 , we have lement 0  */
/* in inde 0 , we have lement "two"  */

// for (let index = 0; index < numbers.length; index++) {

//     const element = numbers[index];
//     // console.log({element});
//     convert(element)

// }

// array.forEach(element => {

// });

function convert(value) {
    // console.log("the value is " + value);
}

// convert(1)
// convert(2)
numbers.forEach(convert)

// numbers.forEach((number) => console.log("the value " + number))

numbers.forEach((number) => {
    // complex task. 
})

console.log(numbers);


// typeof(1``)]

let temp = []
for (let i = 0; i < numbers.length; i++) {
    if (typeof (numbers[i]) === "number") {
        temp.push(numbers[i])
    }
}

console.log(temp);

console.log("all", numbers.filter(el => true))

// console.log(numbers.filter(el => {
//     if (typeof (el) === "number") {
//         return true;
//     }
//     return false;
// }));

// console.log(numbers.filter((index, number) => {
// console.log(numbers.filter(number => {
//     if (typeof (number) === "number") {
//         // console.log({ index })
//         // return true;
//     }
//     // return false;
// }));

console.log(numbers.filter(el => typeof (el) === "number"))

console.log({ numbers });

console.log(numbers.map(el => {

    if (typeof (el) !== "number") {
        return "not a number"
    }
    return el
}))

console.log({ numbers });


// c.map(el => {
//     return <li>{el}</li>
// })

console.log([0, 1, 4, "5"].every(el => typeof (el) === "number"))

let temp_obj = {}
let users = [
    {
        id: 1,
        name: "One"
    },
    {
        id: 2,
        name: "Two"
    },
    {
        id: 2,
        name: "2222"
    },
    {
        id: 2,
        name: "twoo"
    },
]

// =>output = {id:1,name:"One"}

// console.log(users[0].id);
console.log(users.find(el => el.id == 2));
console.log(users.indexOf(el => el.id == 2));
console.log([0, 1, 4, "5"].indexOf(4));
console.log([0, 1, 4, "5"].includes(4));



// function sum(num1){

// }

// let value = sum();
// console.log({value})

// let obj = {
//     a:1
// }

// console.log(obj.b.c);
// console.log(obj.a);


// // from given list find the indexes of elments which is array 
// [{},1,[{a:1}],2,3,["apple"]]









