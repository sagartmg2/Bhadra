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


class Animal {
    constructor(name, noise) {
        this.name = name;
        this.noise = noise;
    }

    makeNoise(sound) {
        console.log("" + this.noise)
    }
}

class Dog extends Animal {
    constructor(name, noise) {
        super(name, noise)
        this.curly_tail = true;
    }

    makeNoise() {
        console.log(" dog barks...");
    }
}


let dog1 = new Dog("pug", "barking");
let dog2 = new Dog("german", "barking");
console.log({ dog1 });
console.log({ dog2 });




let animal1 = new Animal("dog", "bark");
let animal2 = new Animal("cat", "meow");
console.log(animal1);
console.log(animal2);


/*
 inheritence
 encapsulation // data hiding
 polymorphism  // showing many forms - method overloaing, method overriding
 abstraction // implementation hiding
  */



class Employee {
    constructor() {
        // this.salary = 1000
        // private 
    }
    #salary = 1000

    setSalary(salary) {
        this.#salary = salary
    }

    getBonus() {
        return this.#salary / 2
    }

    calculateSalary() {
        console.log("salary is ..." + parseFloat(this.#salary + this.getBonus()));
    }

}

let emp = new Employee()

emp.setSalary(2000);
emp.salary = 10000000;
emp.calculateSalary();




