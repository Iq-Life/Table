import {
    addStudent,
    changeFirstNameAC,
    removeStudent,
    sortFNameDecAC, sortFNameIncAC, sortLNameDecAC, sortLNameIncAC,
    StudentsReducer,
    StudentType
} from "./tableReducer";

let startState: Array<StudentType> = []

beforeEach(() => {
    startState = [
        {
            id: '1', firstName: 'Иван', lastName: 'Фирстов', lesson: null,
            grades: [{
                Maths: ['.', 'н', 3, 4, 'н', 4, 'н', 3, 5, '.', '.', 'н', 4, 4, 5],
                Physics: ['.', '.', 3, 4, '.', 4, 'н', 4, 5, '.', '.', 5, '.', '.', 5],
                ComputerScience: [4, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, '.', 5, 5]
            }], finalAssessment: null
        },
        {
            id: '2', firstName: 'Олег', lastName: 'Куплинов', lesson: null,
            grades: [{
                Maths: ['.', '.', 3, 3, 3, 4, 'н', 2, 5, '.', '.', 5, '.', 5, 5],
                Physics: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, '.', 5, 5],
                ComputerScience: [4, '.', 3, 4, 3, 4, 'н', 2, 5, '.', 'н', 5, 5, '.', 5]
            }], finalAssessment: null
        },
        {
            id: '3', firstName: 'Дмитрий', lastName: 'Дадарчук', lesson: null,
            grades: [{
                Maths: [4, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5],
                Physics: [2, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 4, 5],
                ComputerScience: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5]
            }], finalAssessment: null
        },
        {
            id: '4', firstName: 'Павел', lastName: 'Вавилин', lesson: null,
            grades: [{
                Maths: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5],
                Physics: [2, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 3, 5, 5],
                ComputerScience: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5]
            }], finalAssessment: null
        },
        {
            id: '5', firstName: 'Лиза', lastName: 'Подопригора', lesson: null,
            grades: [{
                Maths: ['.', '.', 3, '.', 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5],
                Physics: ['.', '.', 3, 4, '.', 4, 'н', 2, 5, '.', '.', 5, 4, 5, 5],
                ComputerScience: [3, '.', 3, 4, 3, 4, 'н', 2, 'н', '.', '.', 5, 5, 5, 5]
            }], finalAssessment: null
        },
        {
            id: '6', firstName: 'Евгения', lastName: 'Кудряшова', lesson: null,
            grades: [{
                Maths: ['.', '.', 3, 4, 'н', 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5],
                Physics: [3, '.', 3, 4, '.', 4, 'н', 2, 5, '.', 'н', 5, 5, 4, 5],
                ComputerScience: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5]
            }], finalAssessment: null
        },
        {
            id: '7', firstName: 'Кирилл', lastName: 'Вавилин', lesson: null,
            grades: [{
                Maths: ['.', '.', 3, 4, 3, 4, 'н', 5, 5, '.', '.', 5, 5, '.', 5],
                Physics: ['.', '.', 3, 4, 3, '.', 'н', 4, 5, '.', '.', 5, 5, 5, 3],
                ComputerScience: ['.', '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, '.']
            }], finalAssessment: null
        },
        {
            id: '8', firstName: 'Александра', lastName: 'Комарова', lesson: null,
            grades: [{
                Maths: ['н', '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 4],
                Physics: [2, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, '.'],
                ComputerScience: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, '.']
            }], finalAssessment: null
        },
        {
            id: '9', firstName: 'Иван', lastName: 'Бакалейщиков', lesson: null,
            grades: [{
                Maths: ['.', '.', '.', 4, 3, 4, 3, 2, 5, '.', '.', 5, 5, 5, '.'],
                Physics: [2, '.', 3, 4, 3, '.', 'н', 2, 5, '.', '.', 5, 5, 5, '.'],
                ComputerScience: [3, '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, '.']
            }], finalAssessment: null
        },
    ]
})

test('should be update first name', () => {

    const action = changeFirstNameAC('1', "Vlad")

    const endState = StudentsReducer(startState, action)

    expect(endState[0].firstName).toBe("Vlad")
})
test('should be add student in array', () => {
    const newStudent: StudentType = {id: "11", firstName: 'Валера', lastName: 'Куплинов', lesson: "Математика",
        grades: [
            {Maths: ['н', 5, 3, 4, 5, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5]},
            {Physics: ['н', '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5]},
            {ComputerScience: ['н', '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5]}
        ], finalAssessment: null}

    const action = addStudent(newStudent)

    const endState = StudentsReducer(startState, action)

    expect(endState.length).toBe(10)
})
test('should be delete student in array', () => {

    const action = removeStudent("5")

    const endState = StudentsReducer(startState, action)

    expect(endState.length).toBe(8)
})
test('sort firstName an array from a to z', () => {

    const action = sortFNameDecAC()

    const endState = StudentsReducer(startState, action)

    expect(endState[0].firstName).toBe('Александра')
    expect(endState[8].firstName).toBe('Павел')
})
test('sort firstName an array from z to a', () => {

    const action = sortFNameIncAC()

    const endState = StudentsReducer(startState, action)

    expect(endState[8].firstName).toBe('Александра')
    expect(endState[0].firstName).toBe('Павел')
})
test('sort lastName an array from a to z', () => {

    const action = sortLNameDecAC()

    const endState = StudentsReducer(startState, action)

    expect(endState[8].lastName).toBe('Фирстов')
    expect(endState[0].lastName).toBe('Бакалейщиков')
})
test('sort lastName an array from z to a', () => {

    const action = sortLNameIncAC()

    const endState = StudentsReducer(startState, action)

    expect(endState[8].lastName).toBe('Бакалейщиков')
    expect(endState[0].lastName).toBe('Фирстов')
})