{
    // interface 
    type User1 = {
        name: string;
        age: number;
    }

    interface User2 {
        name: string;
        age: number;
    }

    type Usertype1 = User1 & {role: string}
    interface Usertype2 extends User1 {
        role: string
    }
    const user1 : Usertype2 ={
        name: 'Mahamub',
        age: 22,
        role: "designer"
    }
}