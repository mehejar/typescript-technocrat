{
    // ---------------constraints-------------
    // --means make some field of the object fixed

    const newStudentInfo = <T extends {name: string, level: string, id: number}>(student: T) => {
        const course: string = 'Next Level Web Development'

        return {
            ...student,
            course

        }
    }

    const student1 = newStudentInfo<{ name: string, level: string, id: number }>({ level: 'Next level', id: 736473, name: 'Mehejar' })
}