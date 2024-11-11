{
    // consditional type
    type a1 = string
    type b1 = string

    type x = a1 extends number ? number : b1 extends number ? number : string

    type Shaikh = {
        car: string;
        bike: string;
        ship : string

    }

    type checkVehicale<T> = T extends keyof Shaikh ? true : false
    type hasCar = checkVehicale<"car">




    // 
}