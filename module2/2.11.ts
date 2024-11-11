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


// 
}