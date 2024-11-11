{

    interface Something {
        something: string
    }
    // Promise
const  createPromise = ():Promise<Something> =>{
    return new Promise<Something>((resolve, reject) =>{
        const data: Something = {something: "Somthing"};
        if(data){
            resolve(data)
            console.log(data)
        } else{
            reject("faild to load data")
        }
    })
}


const showData = async () : Promise<Something> =>{
    const data: Something = await createPromise()
    return data
}


showData()
}