{
    // Utility types

    // -- Pick Type
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string
    }

    type Name = Pick<Person, "name" | "age">

    // -- Omit `bad diye`
    type ContactInfo = Omit<Person, "name" | "age">

    // -- Required ``
    type RequiredPerson = Required<Person>

    // --Partial``
    type PersonPartial = Partial<Person>

    // --ReadOnly``
    type PersonReadOnly = Readonly<Person>
    const person1: PersonReadOnly = {
        name: 'Akash',
        age: 128,
        contactNo: "9383427"
    }

    // person1.name = "Mr kabi" // now its changeable

    // Record type --Record<key, value> `jekono key and value add kora jabe `
    type  MyObj = Record<string, string>

    const obj1 : MyObj = {
        a: '22',
        b: 'bab'
    }



    // 
}