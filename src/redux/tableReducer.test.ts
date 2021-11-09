import {v1} from "uuid";
import {
    addStudent,
    changeFirstNameAC,
    removeStudent,
    sortFirstNameAC,
    StudentsReducer,
    StudentType
} from "./tableReducer";

let startState: Array<StudentType> = []

beforeEach(() => {
    startState = [
        {
            id: "1", firstName: 'Иван', lastName: 'Фирстов', class: 1, lesson: "Математика",
            grades: ['н', '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5], finalAssessment: 5
        },
        {
            id: "2", firstName: 'Лиза', lastName: 'Фирстов', class: 1, lesson: "Математика",
            grades: ['н', '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5], finalAssessment: 5
        },
        {
            id: "3", firstName: 'Кирилл', lastName: 'Фирстов', class: 1, lesson: "Математика",
            grades: ['н', '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5], finalAssessment: 5
        },
        {
            id: "4", firstName: 'Илья', lastName: 'Фирстов', class: 1, lesson: "Математика",
            grades: ['н', '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5], finalAssessment: 5
        },
        {
            id: "5", firstName: 'Александр', lastName: 'Фирстов', class: 1, lesson: "Математика",
            grades: ['н', '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5], finalAssessment: 5
        },
        {
            id: "6", firstName: 'Павел', lastName: 'Фирстов', class: 1, lesson: "Математика",
            grades: ['н', '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5], finalAssessment: 5
        },
        {
            id: "7", firstName: 'Дмитрий', lastName: 'Фирстов', class: 1, lesson: "Математика",
            grades: ['н', '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5], finalAssessment: 5
        },
        {
            id: "8", firstName: 'Евгений', lastName: 'Фирстов', class: 1, lesson: "Математика",
            grades: ['н', '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5], finalAssessment: 5
        },
        {
            id: "9", firstName: 'Дмитрий', lastName: 'Фирстов', class: 1, lesson: "Математика",
            grades: ['н', '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5], finalAssessment: 5
        },
        {
            id: "10", firstName: 'Валерия', lastName: 'Фирстов', class: 1, lesson: "Математика",
            grades: ['н', '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5], finalAssessment: 5
        }
    ]
})

test('should be update first name', () => {

    const action = changeFirstNameAC('1', "Vlad")

    const endState = StudentsReducer(startState, action)

    expect(endState[0].firstName).toBe("Vlad")
})
test('should be add student in array', () => {
    const newStudent: StudentType = {id: "11", firstName: 'Валера', lastName: 'Куплинов', class: 3, lesson: "Математика",
        grades: ['н', '.', 3, 4, 3, 4, 'н', 2, 5, '.', '.', 5, 5, 5, 5], finalAssessment: 5}

    const action = addStudent(newStudent)

    const endState = StudentsReducer(startState, action)

    expect(endState.length).toBe(11)
})
test('should be delete student in array', () => {

    const action = removeStudent("5")

    const endState = StudentsReducer(startState, action)

    expect(endState.length).toBe(9)
})
test('sort an array from a to z', () => {

    const action = sortFirstNameAC()

    const endState = StudentsReducer(startState, action)

    expect(endState[0].firstName).toBe('Александр')
    expect(endState[9].firstName).toBe('Павел')
})