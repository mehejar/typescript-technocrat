{
    // oop - inherutence

    class Parent {
      name: string;
      age: number;
      address: string;

      constructor(name: string, age:number, address:string ){
          this.name = name;
          this.age = age;
          this.address = address;
      }

      getSleepTime(sleepHrs: number){
         return console.log(`${this.name} sleep ${sleepHrs} hrs`)
      }
   }

     class Student extends Parent{
        constructor(name: string, age:number, address:string ){
         super(name, age, address)
        } 
        
     }


     class Teacher extends Parent{
      designation: string;
        constructor(name: string, age:number, address:string, designation: string ){
         
         super(name, age, address)
         this.designation = designation;
         
        } 
        
     }

     const student1 = new Student("Rafi", 23, "fultola")
     console.log(student1)

     const teacher1 = new Teacher("Kala", 29, "fultola", "Physics")
     console.log(teacher1)

     teacher1.getSleepTime(6)





}