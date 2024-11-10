// destructuring
{
const userCB = {
    name: {
        firstName: 'Kanika',
        lastName: 'Rahman',
    
    },
    contact: '019622873',
    address: 'Dhaka'

}

const {contact, name:{lastName}} = userCB

const frnds1= ['Mahtab', 'Ali', 'Abul', 'Mahid']

const [,,goru,...rest] = frnds1

}