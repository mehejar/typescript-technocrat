{
    // type guard

    // using typeof --> typeGuard
    type Alphanumeric = string | number

    const add = (param1: Alphanumeric, param2: Alphanumeric) : Alphanumeric  => {
        if(typeof param1 === "number" && typeof param2 === "number"){
            return param1 + param2
        } else{
            return param1.toString() + param2.toString()
        }
    }

    const res1 = add(2, 6)
    console.log(res1)

    // in guard
}