{
// nullble type

// unknown type
const getSecToHours = (value: unknown) =>{
if(typeof value === 'number'){
    const theHrs = value/3600
    console.log('numbers to',theHrs)
}
else if(typeof value === 'string'){
    const [result, unit] = value.split(' ')
    const theHrs1 = parseFloat(result)/3600;
    console.log("string to", theHrs1)
}
}


getSecToHours(3500)


// never type


}