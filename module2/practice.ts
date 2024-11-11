{
    // Task 1
    const welcome: string = "Hello World , I will complete this course successfully Ing Sha Allah"
    console.log(welcome)

    // Task 2
    type User1 = {
        name: string;
        age: number;
        role: string;
    }


    const Task2 = ({ name, age, role}: User1) => {
        return console.log(name, age, role)
    }

    // Task 7 
    const getLenth = (anything: any) =>{
        if( typeof anything === "string"){
            console.log(anything.length)
        }
        else{
            console.log(anything * anything)
        }
    }

    let anything : number
    anything = 34;
    getLenth(anything)
}