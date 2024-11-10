{
// generic type

type GenericArray<param> = Array<param>

// const rollNumbers : number[] = [2, 4, 7, 10]
const rollNumbers : GenericArray<number>= [2, 4, 7, 10]

// const mentors : string[] = ["Mr X", "Mr Y", "Mr Z"]
const mentors : GenericArray<string> = ["Mr X", "Mr Y", "Mr Z"]

const boolArray : boolean[] = [true, false, true]

const users : GenericArray<{name: string, age: number}> =[{
    name: "Mehejar",
    age: 23,
}]



}