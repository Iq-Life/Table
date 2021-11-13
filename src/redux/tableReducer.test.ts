import {
    addStudentAC, calculationOfGradesAC,
    changeFirstNameAC, grades,
    removeStudentAC,
    sortFNameDecAC, sortFNameIncAC, sortLNameDecAC, sortLNameIncAC,
    StudentsReducer,
    StudentType
} from "./tableReducer";
import {v1} from "uuid";

let startState: Array<StudentType>

beforeEach(() => {
    startState = [
        {
            id: '1', firstName: 'Иван', lastName: 'Фирстов', lesson: null,
            grades: {
                'maths': [{id: v1(), value: 5}, {id: v1(), value: 5}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                    {id: v1(), value: 5}, {id: v1(), value: 5}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                    {id: v1(), value: 4}, {id: v1(), value: 5}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                    {id: v1(), value: 5}, {id: v1(), value: 5}, {id: v1(), value: 5}],
                'physics': [{id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: '.'}, {
                    id: v1(),
                    value: '.'
                },
                    {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                    {id: v1(), value: '.'}, {id: v1(), value: 3}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                    {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}],
                'computerScience': [{id: v1(), value: 5}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {
                    id: v1(),
                    value: 'н'
                },
                    {id: v1(), value: 3}, {id: v1(), value: '.'}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                    {id: v1(), value: 5}, {id: v1(), value: '.'}, {id: v1(), value: 4}, {id: v1(), value: 3},
                    {id: v1(), value: 4}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}]
            }, finalAssessment: null
        },
        {
            id: '2', firstName: 'Олег', lastName: 'Куплинов', lesson: null,
            grades: {
                'maths': [{id: v1(), value: 5}, {id: v1(), value: 5}, {id: v1(), value: 5}, {id: v1(), value: 5},
                    {id: v1(), value: 'н'}, {id: v1(), value: 5}, {id: v1(), value: 5}, {id: v1(), value: 5},
                    {id: v1(), value: 'н'}, {id: v1(), value: 5}, {id: v1(), value: 5}, {id: v1(), value: 5},
                    {id: v1(), value: 'н'}, {id: v1(), value: 5}, {id: v1(), value: 5}],
                'physics': [{id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: '.'}, {
                    id: v1(),
                    value: '.'
                },
                    {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                    {id: v1(), value: '.'}, {id: v1(), value: 3}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                    {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}],
                'computerScience': [{id: v1(), value: 5}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {
                    id: v1(),
                    value: 'н'
                },
                    {id: v1(), value: 3}, {id: v1(), value: '.'}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                    {id: v1(), value: 5}, {id: v1(), value: '.'}, {id: v1(), value: 4}, {id: v1(), value: 3},
                    {id: v1(), value: 4}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}]
            }, finalAssessment: null
        },
        {
            id: '3', firstName: 'Дмитрий', lastName: 'Дадарчук', lesson: null,
            grades: {
                'maths': [{id: v1(), value: 5}, {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                    {id: v1(), value: 5}, {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                    {id: v1(), value: 4}, {id: v1(), value: 5}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                    {id: v1(), value: 5}, {id: v1(), value: '.'}, {id: v1(), value: '.'}],
                'physics': [{id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: '.'}, {
                    id: v1(),
                    value: '.'
                },
                    {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                    {id: v1(), value: '.'}, {id: v1(), value: 3}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                    {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}],
                'computerScience': [{id: v1(), value: 5}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {
                    id: v1(),
                    value: 'н'
                },
                    {id: v1(), value: 3}, {id: v1(), value: '.'}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                    {id: v1(), value: 5}, {id: v1(), value: '.'}, {id: v1(), value: 4}, {id: v1(), value: 3},
                    {id: v1(), value: 4}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}]
            }, finalAssessment: null
        },
        {
            id: '4', firstName: 'Павел', lastName: 'Вавилин', lesson: null,
            grades: grades, finalAssessment: null
        },
        {
            id: '5', firstName: 'Лиза', lastName: 'Подопригора', lesson: null,
            grades: grades, finalAssessment: null
        },
        {
            id: '6', firstName: 'Евгения', lastName: 'Кудряшова', lesson: null,
            grades: grades, finalAssessment: null
        },
        {
            id: '7', firstName: 'Кирилл', lastName: 'Вавилин', lesson: null,
            grades: grades, finalAssessment: null
        },
        {
            id: '8', firstName: 'Александра', lastName: 'Комарова', lesson: null,
            grades: grades, finalAssessment: null
        },
        {
            id: '9', firstName: 'Иван', lastName: 'Бакалейщиков', lesson: null,
            grades: grades, finalAssessment: null
        },
    ]
})

test('should be add student in array', () => {

    const action = addStudentAC()

    const endState = StudentsReducer(startState, action)

    expect(endState.length).toBe(10)
})
test('should be delete student from array', () => {

    const action = removeStudentAC("5")

    const endState = StudentsReducer(startState, action)

    expect(endState.length).toBe(8)
})
test('should be update first name', () => {

    const action = changeFirstNameAC('1', "Vlad")

    const endState = StudentsReducer(startState, action)

    expect(endState[0].firstName).toBe("Vlad")
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
test('calculate the GPA should be > 4 and "н" should be < 10% from number of lessons', () => {

    const action = calculationOfGradesAC('maths')

    const endState = StudentsReducer(startState, action)

    expect(endState[0].finalAssessment).toBe(true)
    expect(endState[1].finalAssessment).toBe(false)
    expect(endState[2].finalAssessment).toBe(true)
})