{
    //  OOP - class

    class Animal {
        name: string;
        species: string;
        sound: string;

        constructor(name: string, species: string, sound:string){
            this.name = name;
            this.species = species;
            this.sound = sound;
        }

        makeSound(){
            console.log(`${this.name} says ${this.sound}`)
        }
    }
    const dog = new Animal('garman', 'dogi', 'ghew ghew')
    dog.makeSound()




}