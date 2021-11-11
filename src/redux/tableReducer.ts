import {v1} from "uuid";

export const initialPeople: Array<StudentType> = [
    {
        id: v1(), firstName: 'Иван', lastName: 'Фирстов', lesson: null,
        grades: [{
            Maths: ['.', '.', 3, 4, 'н', 4, 'н', 3, 5, '.', '.', 'н', 4, 4, 5],
            Physics: ['.', '.', 3, 4, '.', 4, 'н', 4, 5, '.', '.', 5, '.', '.', 5],
            ComputerScience: [4, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, '.', 5, 5]
        }], finalAssessment: null
    },
    {
        id: v1(), firstName: 'Олег', lastName: 'Куплинов', lesson: null,
        grades: [{
            Maths: ['.', '.', 3, 3, 3, 4, 'н', 2, 5, '.', '.', 5, '.', 5, 5],
            Physics: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, '.', 5, 5],
            ComputerScience: [4, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, '.', 5]
        }], finalAssessment: null
    },
    {
        id: v1(), firstName: 'Дмитрий', lastName: 'Дадарчук', lesson: null,
        grades: [{
            Maths: [4, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5],
            Physics: [2, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5],
            ComputerScience: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5]
        }], finalAssessment: null
    },
    {
        id: v1(), firstName: 'Павел', lastName: 'Вавилин', lesson: null,
        grades: [{
            Maths: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5],
            Physics: [2, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5],
            ComputerScience: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5]
        }], finalAssessment: null
    },
    {
        id: v1(), firstName: 'Лиза', lastName: 'Подопригора', lesson: null,
        grades: [{
            Maths: ['.', '.', 3, '.', 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5],
            Physics: ['.', '.', 3, 4, '.', 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5],
            ComputerScience: [3, '.', 3, 4, 3, 4, 'н', 2, 'н', '.', '.', 5, 5, 5, 5]
        }], finalAssessment: null
    },
    {
        id: v1(), firstName: 'Евгения', lastName: 'Кудряшова', lesson: null,
        grades: [{
            Maths: ['.', '.', 3, 4, 'н', 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5],
            Physics: [3, '.', 3, 4, '.', 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5],
            ComputerScience: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5]
        }], finalAssessment: null
    },
    {
        id: v1(), firstName: 'Кирилл', lastName: 'Вавилин', lesson: null,
        grades: [{
            Maths: ['.', '.', 3, 4, 3, 4, 'н', 5, 5, '.', '.', 5, 5, '.', 5],
            Physics: ['.', '.', 3, 4, 3, '.', 'н', 4, 5, '.', '.', 5, 5, 5, 5],
            ComputerScience: ['.', '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5]
        }], finalAssessment: null
    },
    {
        id: v1(), firstName: 'Александра', lastName: 'Комарова', lesson: null,
        grades: [{
            Maths: ['н', '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5],
            Physics: [2, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5],
            ComputerScience: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5]
        }], finalAssessment: null
    },
    {
        id: v1(), firstName: 'Иван', lastName: 'Бакалейщиков', lesson: null,
        grades: [{
            Maths: ['.', '.', '.', 4, 3, 4, 3, 2, 5, '.', '.', 5, 5, 5, 5],
            Physics: [2, '.', 3, 4, 3, '.', 'н', 2, 5, '.', '.', 5, 5, 5, 5],
            ComputerScience: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5]
        }], finalAssessment: null
    },
    {
        id: v1(), firstName: 'Анастасия', lastName: 'Фирстова', lesson: null,
        grades: [{
            Maths: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 4, '.', '.', 5],
            Physics: [2, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 3, '.', 5, 5],
            ComputerScience: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5]
        }], finalAssessment: null
    },
    {
        id: v1(), firstName: 'Глеб', lastName: 'Радионов', lesson: null,
        grades: [{
            Maths: [4, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 4, 3, '.'],
            Physics: [2, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, '.', 3, 5],
            ComputerScience: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 4, '.', 5]
        }], finalAssessment: null
    },
    {
        id: v1(), firstName: 'Валерия', lastName: 'Тарасова', lesson: null,
        grades: [{
            Maths: ['н', '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, '.', 5],
            Physics: [2, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5],
            ComputerScience: [5, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5]
        }], finalAssessment: null
    },
    {
        id: v1(), firstName: 'Ганзель', lastName: 'Фирстов', lesson: null,
        grades: [{
            Maths: ['.', '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, '.'],
            Physics: [2, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, '.', 5],
            ComputerScience: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5]
        }], finalAssessment: null
    },
    {
        id: v1(), firstName: 'Илья', lastName: 'Вавилин', lesson: null,
        grades: [{
            Maths: ['.', '.', '.', 4, 4, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5],
            Physics: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5],
            ComputerScience: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5]
        }], finalAssessment: null
    },
    {
        id: v1(), firstName: 'Анна', lastName: 'Ермошина', lesson: null,
        grades: [{
            Maths: ['.', 'н', 3, 4, 3, 4, 'н', 2, 5, 5, '.', 5, 5, 5, 5],
            Physics: [2, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5],
            ComputerScience: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5]
        }], finalAssessment: null
    },
    {
        id: v1(), firstName: 'Богдан', lastName: 'Римов', lesson: null,
        grades: [{
            Maths: ['.', '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5],
            Physics: [2, '.', 3, 4, 3, 4, 'н', 2, 5, '.', 'н', 5, 5, 5, 5],
            ComputerScience: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5]
        }], finalAssessment: null
    },
    {
        id: v1(), firstName: 'Рудольф', lastName: 'Адольфовинов', lesson: null,
        grades: [{
            Maths: [4, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5],
            Physics: [2, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5],
            ComputerScience: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', 4, 5, 5, 5, 5]
        }], finalAssessment: null
    },
    {
        id: v1(), firstName: 'Павел', lastName: 'Кураев', lesson: null,
        grades: [{
            Maths: [3, '.', 3, 4, 3, 4, 'н', 2, 5, 'н', '.', 5, 5, 5, 5],
            Physics: [2, '.', 3, 4, 3, 4, 'н', 2, 5, '.', 5, 5, 5, 5, 5],
            ComputerScience: [3, '.', 3, 2, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5]
        }], finalAssessment: null
    },
    {
        id: v1(), firstName: 'Сергей', lastName: 'Запределькин', lesson: null,
        grades: [{
            Maths: ['.', '.', 3, 4, 3, 4, 'н', 2, 5, 4, '.', 5, 5, 5, 5],
            Physics: [2, '.', 3, 4, 3, 4, 'н', 2, 5, '.', 'н', 5, 5, 5, 5],
            ComputerScience: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5]
        }], finalAssessment: null
    },
    {
        id: v1(), firstName: 'Сергей', lastName: 'Мамонов', lesson: null,
        grades: [{
            Maths: ['.', '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5],
            Physics: [2, '.', 3, 4, 3, 4, 'н', 2, 5, '2', '.', 5, 5, 5, 5],
            ComputerScience: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5]
        }], finalAssessment: null
    },
    {
        id: v1(), firstName: 'Александр', lastName: 'Киркоров', lesson: null,
        grades: [{
            Maths: ['.', '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5],
            Physics: [2, '.', 3, 4, 3, 4, 'н', 2, 5, '3', '.', 5, 5, 5, 5],
            ComputerScience: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5]
        }], finalAssessment: null
    },
    {
        id: v1(), firstName: 'Евгения', lastName: 'Бирова', lesson: null,
        grades: [{
            Maths: ['.', '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5],
            Physics: [2, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '4', 5, 5, 5, 5],
            ComputerScience: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5]
        }], finalAssessment: null
    },
    {
        id: v1(), firstName: 'Роман', lastName: 'Кудрявцев', lesson: null,
        grades: [{
            Maths: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5],
            Physics: [2, '.', 3, 4, 3, 4, 'н', 2, 5, '5', '.', 5, 5, 5, 5],
            ComputerScience: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5]
        }], finalAssessment: null
    },
    {
        id: v1(), firstName: 'Юлия', lastName: 'Ахламонова', lesson: null,
        grades: [{
            Maths: ['.', '.', 3, 4, 3, 4, 'н', 2, 5, 5, '.', 5, 5, 5, 5],
            Physics: [2, '.', 3, 4, 3, 4, 'н', 2, 5, '.', 'н', 5, 5, 5, 5],
            ComputerScience: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', 2, 5, 5, 5, 5]
        }], finalAssessment: null
    }
]

export const StudentsReducer = (state = initialPeople, action: ActionTypes): StudentType[] => {
    switch (action.type) {
        case "ADD_STUDENT" : {
            return [...state, action.Student]
        }
        case "REMOVE_STUDENT" : {
            return state.filter((student) => student.id !== action.id)
        }
        case "CHANGE_FIRST_NAME": {
            return state.map((student) => student.id === action.id ? {...student, firstName: action.value} : student)
        }
        case "CHANGE_LAST_NAME": {
            return state.map((student) => student.id === action.id ? {...student, lastName: action.value} : student)
        }
        case "SORT_FIRST_NAME_DEC": {
            return [...state].sort((studentA, studentB) => studentA.firstName.localeCompare(studentB.firstName))
        }
        case "SORT_LAST_NAME_DEC": {
            return [...state].sort((studentA, studentB) => studentA.lastName.localeCompare(studentB.lastName))
        }
        case "SORT_FIRST_NAME_INC": {
            return [...state].sort((studentA, studentB) => studentB.firstName.localeCompare(studentA.firstName))
        }
        case "SORT_LAST_NAME_INC": {
            return [...state].sort((studentA, studentB) => studentB.lastName.localeCompare(studentA.lastName))
        }
        case "CHANGE_GRADE": {
            const copyState =state.map( (student) => student.id === action.idStudent ? {
                ...student, grades:[]
            }: student)
            console.log(copyState)
            return state/*state.map( (student) => student.id === action.idStudent ? {
                ...student, grades: student.grades.map( (grades) => grades )
            }: student)*/
        }
        case "CALCULATION_OF_GRADES" : {
            return  state.map((student) => {
                const ourLes = student.grades.map((grades) => grades[action.lessons])
                const arrNumber =ourLes.join().match(/\d+/g)!.map(Number)
                const averageScore = arrNumber.reduce((a, b) => a + b) / arrNumber.length
                const missedClasses: Array<string>|null = ourLes.join().match(/[н]/g)
                const tenPercentForNCount =Math.ceil((10 * ourLes[0].length) /100)
                const passed = missedClasses && averageScore > 4 && missedClasses.length < tenPercentForNCount
                student.finalAssessment = passed
                return student
            })
        }
        default:
            return state
    }
}
//actions
export const addStudent = (Student: StudentType) => {
    return {type: "ADD_STUDENT", Student} as const
}
export const removeStudent = (id: string) => {
    return {type: "REMOVE_STUDENT", id} as const
}
export const changeFirstNameAC = (id: string, value: string) => {
    return {type: "CHANGE_FIRST_NAME", id, value} as const
}
export const changeLastNameAC = (id: string, value: string) => {
    return {type: "CHANGE_LAST_NAME", id, value} as const
}
export const sortFNameDecAC = () => {
    return {type: "SORT_FIRST_NAME_DEC"} as const
}
export const sortLNameDecAC = () => {
    return {type: "SORT_LAST_NAME_DEC"} as const
}
export const sortFNameIncAC = () => {
    return {type: "SORT_FIRST_NAME_INC"} as const
}
export const sortLNameIncAC = () => {
    return {type: "SORT_LAST_NAME_INC"} as const
}
export const changeGradeAC = (idStudent : string, lessons: string, newGrade: gradType) => {
    return {type: "CHANGE_GRADE", idStudent, lessons, newGrade} as const
}
export const calculationOfGradesAC = (lessons: string) => {
    return {type: "CALCULATION_OF_GRADES", lessons} as const
}


//types
type ActionTypes = ReturnType<typeof addStudent> | ReturnType<typeof removeStudent> |
    ReturnType<typeof changeFirstNameAC> | ReturnType<typeof changeLastNameAC> |
    ReturnType<typeof sortFNameDecAC> | ReturnType<typeof sortLNameDecAC> |
    ReturnType<typeof sortFNameIncAC> | ReturnType<typeof sortLNameIncAC> |
    ReturnType<typeof changeGradeAC> | ReturnType<typeof calculationOfGradesAC>

export type StudentType = {
    id: string
    firstName: string
    lastName: string
    lesson: null | string
    grades: gradesType[]
    finalAssessment: null | boolean
}
export type keyLessons = 'Математика' | 'Физика' | 'Информатика'
/*export type keyLessons = {
    Maths: string
    Physics: string
    ComputerScience: string
}*/
export type gradType = string|number
export type gradesType = {
    [key: string]: gradType[]
}






