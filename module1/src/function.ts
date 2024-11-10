// normal function 
// Arrow Function 

function sum(num1:number, num2:number = 10) {
    return num1+num2
}

sum(2,3)

const add = (num1:number, num2:number):number => num1+num1

add(33, 45)

// object --> function ==> method

const account = {
    name: 'Mejbah',
    balance: 0,
    addBalance(salary: number):number{
        return `My new Balance is ${this.salary + balance}`
        // return this.salary + balance;
    }
}