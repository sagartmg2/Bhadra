

// let arr = [1, 2];

// function sum() {

//     console.log(arr);
//     let a = 1;
// }

// sum()
// console.log({ a });

// 100  mb    -- 20 20 20 20 20

// console.log(process.argv);
// console.log(process.env);

// {
//     console,
//     proces
// }

// require
// module
// export

// console.log(__dirname);
// console.log(__filename);
// console.log("new");

// axios.get()
// bcrypt.sing()


/* 
    module
        core moudle
        local module
        third party module
*/


const path = require("path")

const bcrypt = require("bcrypt")

// console.log(path.dirname(__filename));
// console.log(path.join("folder1", "file.js"));

// const fs = require("fs")
// fs.writeFileSync("custom.txt", "hello world!")

// // fs.writeFile("custom.js", "hello @orld !!", {}, (err, data) => {
// //     console.log(data);
// // })

// let data = fs.readFileSync("./custom.txt", { encoding: "utf8" })
// // console.log(data.toString());
// console.log(data);

// fs.unlinkSync("./custom.js")
// fs.appendFile

// const auth = require("./auth")  // common JS module styem
// import {login} from "./auth.js"  // es6 module system
// const {login} = require("./auth.js")

// login()

// console.log(auth.signup());
// console.log(auth());
// auth()


// const auth = require("./auth")

// auth.signup()


const { signup } = require("./auth")

signup()


let person = {
    address: "adsfaf",
    phone:123123,
    age: 12,
    name: "ram",
}

// rest operator
let {name,age,...rest} = person

let person_copy = {...person}
// spread operator ...

// console.log(person["name"]);
// console.log(person.age);

// getFullName(person.name,person.surname)
console.log(name);
console.log(rest);
