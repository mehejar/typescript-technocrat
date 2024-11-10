{
// Generic constraint with keyof operator

type Vehicle = {
    bike: string;
    car: string;
    helicopter: string
}

type Owner = "bike" | "car" | "helicopter"; //Manually write 

type Owner2 = keyof Vehicle

const person1 : Owner = "bike" //use manual 
const person2 : Owner2 = "car" // use keyof oparator

interface User {
    name: string;
    age:  string;
    id: number
}
const user1 = {
    name: "mehedi",
    age: "mehedi",
    id: 84738
}
const user2 = {
    car: "mehedi",
    age: "34",
    id: 84738
}

const findUserKey = <X, Y extends keyof X>(obj:X, key:Y) =>{
    return obj[key]
}

const res1 = findUserKey(user1, 'id')
console.log(res1)
}