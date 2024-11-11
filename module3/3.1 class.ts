{
    //  OOP - class

    class Animal {
    //    public name: string;
    //    public species: string;
    //    private sound: string;

    //    perameter properties

        constructor(public name: string, public species: string, public sound:string){
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }

        makeSound(){
            console.log(`${this.name} says ${this.sound}`)
        }
    }
    const dog = new Animal('garman', 'dogi', 'ghew ghew')
    dog.makeSound()
 



}