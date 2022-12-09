/*

CRUD
    create
    read
    update 
    detele

 show dbs // list the databases. 
    name: varchar(255)
    age: int 
    phone: int

 db.patients.insertOne({
    name:"extra",
    age:11,
    phone: 11111,
    blood: "A"
 })


 db.patients.insertMany([
    {
name:"shyam11",
    age:10,
    phone: 11111
    },
    {
name:"shyam222",
    age:10,
    phone: 11111
    }
 ])



 */


db.patients.insertMany([
    {
        name: "shyam11",
        age: 10,
        phone: 11111
    },
    {
        name: "shyam222",
        age: 10,
        phone: 11111
    }
])

db.patients.find({})
db.patients.find({ name: "Ram" })
db.patients.find({ age: 10, name: "Ram" })


db.patients.updateOne({ age: 10, name: "Ram" }, { $set: { age: 12 } })
db.patients.updateMany({ name: "Ram" }, { $set: { age: 112 } })

db.patients.updateMany({}, { $unset: { blood: 1 } })



db.products.insertMany([
    {
        title: "one"
    },
    {
        name: "two"
    }

])

db.products.updateOne({}, { $rename: { title: "name" } })


// NOSQL - not only sql. 

db.students.insertMany([
    {
        name: "ram",
        class: {
            grade: "one",
            teacher: {
                name: "teacer"
            },
            captain: {
                name: "captain"
            }
        },
        sports: ["football,volleball"]
    },
    {
        name: "hari",
        sports: ["volleball"]
    },
    {
        name: "gita",
        sports: ["volleball", "football", "basket"]
    },

])

db.students.find({ $and: [{ name: "gita" }, { sports: { $in: ["football"] } }] })

db.students.insertOne({
    name: 'gita',
    sports: ['volleball', 'football', 'cricket']
})