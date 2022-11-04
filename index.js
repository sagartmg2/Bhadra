let student = {
    name: "ram",
    color: "red"
    // phone,
    // address,
    // father,
}

let student2 = {
    name: "shyam",
    color: "white"
}

// function Student() {
//     let name = "hari";
//     let color = "hari";
//     this.age = 12;
//     return {
//         name,
//         color,
//         feature:() =>{
//             console.log("inside normal function");
//             console.log(this);
//         }
//     }
// }

function Student(name, grade, address, father, phone) {
    this.name = name;
    this.grade = grade;
    this.address = address;
    this.father = father;
    this.phone = phone;

    // this.feature = () => {
    //     console.log("he reads...")
    //     // console.log(this)
    // }

}

Student.prototype.feature = () => {
    console.log("he reads...")
    // console.log(this)
}

// let student3 = Student("hari", 1)
let student3 = new Student("hari", 1)
let student4 = new Student("shyam", 2)

// console.log(student);
// console.log(student2);
console.log(student3);
console.log(student4);
// student4.feature();






