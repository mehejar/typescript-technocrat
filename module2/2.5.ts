{
    // funtion with array
    const creatArray = (param: string): string[] => {
        return [param]
    }

    const creatArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    interface User {
        name: string,
        id: number
    }

    const res1 = creatArray('Bangladesh')
    const resGeneric = creatArrayWithGeneric<string>("Bangladesh")
    const resGenericObj = creatArrayWithGeneric<User>({
        name: 'mehejar',
        id: 986
    })

    const createUserWithTuple = <T, Q> (param1: T , param2: Q) : [T, Q] =>{
        return[param1, param2]
    }

    const res10 = createUserWithTuple<string, number> ('Bnagladesh', 3634)

    // 
}