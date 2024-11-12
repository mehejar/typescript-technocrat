{
    // polymerphisom
    class Person{
        getSleep(){
            console.log(`I'm sleeping in a day 8 hrs`)
        }
    }
    class Student{
        getSleep(){
            console.log(`I'm Student, sleeping in a day 7 hrs`)
        }
    }
    class Developer{
        getSleep(){
            console.log(`I'm Developer, sleeping in a day 6 hrs`)
        }
    }

    const getSleepingHrs = (param: Person) =>{
        param.getSleep();
    }

    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer()

    getSleepingHrs(person2)
    getSleepingHrs(person1)
    getSleepingHrs(person3)
}