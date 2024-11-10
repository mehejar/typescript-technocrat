{

    // spread opareator
    // rest Oparator
    // destructure


// spread opareator
    const bros1: string[] = ["Mior", "Sakib", "Nahid"]
    const bros2: string[] = ["Modu", "Skin", "Nabil"]

    bros1.push(...bros2)

    const mentors1 = {
        typescript: "Mir",
        nextjs: "Mughdho",

    }

    const mentors2 = {
        javascript: "Jhankar vaiya",
        redux: "Nahid"
    }

    const allMentors = {
        ...mentors1,
        ...mentors2
    }


    // learn rest oparator
    const greetFrnd = (...friends: string[]) =>{
        friends.forEach((friend: string) => console.log(`hello ${friend}`))
    }

    greetFrnd('khali', 'Baali')
}