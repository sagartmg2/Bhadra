



// 1, 2
// 3, 4
// 100, 300

// DRY principle

// console.log((1 + 2) * 2)
// console.log((1 + 5) * 2)
// console.log((1 + 6) * 2)
// console.log((1 + 234) * 2)
// console.log((1 + 5) * 2)
// console.log((2 + 5) * 2)
// console.log((1 + 5) * 2)
// console.log((1 + 5) * 2)
// console.log((1 + 5) * 2)
// console.log((1 + 5) * 2)
// console.log((1 + 5) * 2)


// function addAndMulitply(parameters) {
// function addAndMulitply(num1, num2) {
//     console.log((num1 + num2) * 10)
// }

// let reuslt = addAndMulitply(1, 2);
// addAndMulitply(4, 2);



// console.log(1);
// console.log(2);
// console.log(3);

// console.log("first-sum", sum(1, 2));

function sum(a, b) {
    console.log("sum", a + b);
    return a + b;
}

function diff(num, num2) {
    console.log("diff", num - num2);
}

function calcualte(num1, num2) {
    let result = sum(num1, num2)
    console.log({ result })
    diff(num1, num2)
}

calcualte(10, 5)

// for (let index = 0; index < 1000; index++) s{
//     console.log({ index });
// }

function callMeAgain() {
    console.log("called....");
    // function callMe()
    // {
    //     console.log("callme....eeeeeeeee");   
    // }
    // return callMe
}

/* Asynchronous
    -- which runs in background
    //  which dondot watit for its completion. 
    // - which donot block other code. 
*/
// setTimeout(function,timer ms)
// setTimeout( callback, 0)
// setTimeout(callMeAgain(), 0) // error 


// for (let index = 0; index < 1000; index++) {
//     console.log({ index });
// }

console.log("finallll......");
console.log("finallll......11111111111");



/* 
    Promise 
        - event that occurs in future. 
        - pending
        = resolve
        = reject
*/

// let number = 1
// let person_1 = {
//        name:"ram" 
// }

// let promise1 = new Promise(() => {

// })


/* 
    callback
        - a function passed to another function as an arguement  
 */



try {
    // b = 1
    // c = 12;
    let a = b + c;
    console.log({ a });
}
catch (err) {
    console.log(err.message);
}

function handlePromise(resolve, reject) {
    // resolve("resolved.....")
    // reject("rejectedd....")
    setTimeout(() => {
        reject("rejected...")
    }, 5000)
}


let promise = new Promise(handlePromise)
// console.log({ promise });
promise
    .then(res => {
        console.log({ res });
    })
    .catch((err) => {
        console.log({ err });
    })

// for (let index = 0; index < 1000; index++) {
//     console.log({ index });
// }




setTimeout(callMeAgain, 12)

setTimeout(() => {
    console.log("0 millisecond");
}, 0)

// // sum()

console.log("last+++++++++");




function caluculateBonus(senior_status) {
    var salary = 1000000
    var bonus = 0;

    let senior = senior_status;

    if (senior) {
        // var salary = 2000;
    }









    if (true) {
        let salary = 100;
        bonus = salary + 10;
    }














    bonus = bonus + salary / 2

    console.log("salary=", salary);

    return bonus

}
let bonus = caluculateBonus(true);
console.log({ bonus });





