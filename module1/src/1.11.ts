{
    //  Ternery operator || optional operator || nullish caolesecing operator
    const age: number = 16;

    if (age >= 18) {
        console.log("adult")
    }
    else {
        console.log("non Adult")
    }

    const isAdult = age >= 18 ? "adult" : "not Adult"
    console.log(isAdult)

    // nullish caolesecing operator  ??
    // null | undefined ---> decision making

    type User= {
        name: string,
        address: {
            permanentAdd?: string,
            presentAdd: string,
        },
        id: number
    } 

    const user1 : User = {
        name:'Mehejar',
        address:{
            presentAdd: ' Khulna town'
        },
        id: 2873642873
    }

    // optional
    const permanentAdd = user1?.address?.permanentAdd ?? "No Permenent12 Address"

    console.log(permanentAdd)

}