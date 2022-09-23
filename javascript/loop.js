

// console.log(1 + 2);
// console.log(4 + 2);
// console.log(1 + 2);
// console.log(1 + 2);
// console.log(1 + 2);
// console.log(1 + 2);
// console.log(1 + 2);


/* 
    non-primiteive data-types
        Object
            array 
            function 
    
 */

/* 
    @param num1 
    @param num2
    @returns sum of the provide parameters
*/

// function <task_name>

// var num1;
// var  function 


// console.log({ num1 })
var num1 = "111"

add(1, 2)

function add(num1, num2) {
    // console.log("the result is ", num1 + num2);
}


const sum = (num1, num2) => {
    return num1 + num2
}

let value = sum(1, 2)
// console.log({ value });

// add();

// const diff = () => {
//     console.log("diff");
//     console.log("second")
//
// }

// const diff = (num1, num2) => { return numm1 - num2 }

// const diff = (num1, num2) => num1 - num2

// let diff_value = diff(10, 5);
// console.log({ diff_value });


// console.log(2);
// console.log(4);
// console.log(6);
// console.log(8);

function calculateEven(num1, num2) {
    // console.log(2);
    for (let i = num1; i <= num2; ++i) {
        if (i % 2 == 0) {
            console.log("the value of i is ", i)
        }
        // console.log(i); // 2
    }

}
// calculateEven(10, 20);

// calculateEven(100, 110);


/* loop
    doing the same ( task|| process || function)  again  and again.
*/

/*
    for loop
*/
// for (<initial point>; <condition>; <modifier>) {
// for (let i = 2; i <= 10; i += 1) {
// for (let i = 2; i <= 10; i = i+ 1) {
// for (let i = 2; i <= 10; i++) {
// for (let i = 2 ; i <= 10; ++i) {
//     // if(i % 2  == 0){
//     //     console.log("the value of i is ", i)
//     // }
//     console.log(i); // 2
// }
for (let i = 2 ; i <= 10; ++i) {
    console.log(i); // 2
}

/*
    while(<condition>){
    do some task 
    }
 */

let api_called = true;
console.log({ api_called });


function callApi() {
    api_called = true
    console.log("call api.........");
}


setTimeout(callApi, 0)
// setTimeout(<function>, time in ms)


console.log("later .. code..");

let count = 0
while (!api_called) {
    console.log("inside while");
    console.log({ api_called });
    count++
    if (count == 100) {
        api_called = true
    }
    // console.log("try");
}


// do{
//     // do some task 
// }while( <condition>)

do {
    console.log("inside do while loop");
    console.log({ api_called })
} while (!api_called)


// for( [] in "")
// for( [] of "")
// foreach


