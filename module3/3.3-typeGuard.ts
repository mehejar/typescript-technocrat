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

    // in guard "use hoy object er property er jonno"
    type NormalUser = {
        name: string;
    }
    type AdminUser = {
        name: string;
        role: string;
    }

    const getUser = (user1 : NormalUser | AdminUser)=>{
        if("role" in user1){
return console.log(`I am ${user1.name} an my role ${user1.role}`)
        }
        else{
            return console.log(`I am  ${user1.name}`)
        }
    }

    const res = getUser({name: "mehejar",})

}