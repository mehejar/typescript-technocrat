{
    // instanceof guard
    class Animal {
        name: string;
        speciece: string;

        constructor(name: string, speciece: string) {
            this.name = name;
            this.speciece = speciece;
        }

        makeSound() {
            return console.log("I have make sound")
        }
    }

    class Dog extends Animal {
        constructor(name: string, speciece: string) {
            super(name, speciece)
        }

        makeBark(){
            console.log("I am Ghewing")
        }
    }

    class Cat extends Animal {
        constructor(name: string , speciece: string){
            super(name, speciece)
        }
        makeMeaw(){
            return console.log(" I am mewing")
        }
    }

    const getAnimal = (animal:Animal)=>{
        if(animal instanceof Dog){
            animal.makeBark()
        }else if(animal instanceof Cat){
            return animal.makeMeaw()
        }
    }

    const dog = new Dog(" dog bhai", "dog")
    const cat = new Cat(" Cat bhai", "Cat")

    getAnimal(cat)






}