import {
    addStudentAC, calculationOfGradesAC, changeFirstNameAC, removeStudentAC, sortFNameDecAC,
    sortFNameIncAC, sortLNameDecAC, sortLNameIncAC, StudentsReducer, StudentType
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
                'physics': [{id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                    {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                    {id: v1(), value: '.'}, {id: v1(), value: 3}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                    {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}],
                'computerScience': [{id: v1(), value: 5}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: 'н'},
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
        }
    ]
})

test('should be add student in array', () => {

    const action = addStudentAC()

    const endState = StudentsReducer(startState, action)

    expect(endState.length).toBe(4)
})
test('should be delete student from array', () => {

    const action = removeStudentAC("1")

    const endState = StudentsReducer(startState, action)

    expect(endState.length).toBe(2)
})
test('should be update first name', () => {

    const action = changeFirstNameAC('1', "Vlad")

    const endState = StudentsReducer(startState, action)

    expect(endState[0].firstName).toBe("Vlad")
})
test('sort firstName an array from a to z', () => {

    const action = sortFNameDecAC()

    const endState = StudentsReducer(startState, action)

    expect(endState[0].firstName).toBe('Дмитрий')
    expect(endState[2].firstName).toBe('Олег')
})
test('sort firstName an array from z to a', () => {

    const action = sortFNameIncAC()

    const endState = StudentsReducer(startState, action)

    expect(endState[1].firstName).toBe('Иван')
    expect(endState[0].firstName).toBe('Олег')
})
test('sort lastName an array from a to z', () => {

    const action = sortLNameDecAC()

    const endState = StudentsReducer(startState, action)

    expect(endState[1].lastName).toBe('Куплинов')
    expect(endState[0].lastName).toBe('Дадарчук')
})
test('sort lastName an array from z to a', () => {

    const action = sortLNameIncAC()

    const endState = StudentsReducer(startState, action)

    expect(endState[2].lastName).toBe('Дадарчук')
    expect(endState[0].lastName).toBe('Фирстов')
})
test('calculate the GPA should be > 4 and "н" should be <= 10% from number of lessons', () => {

    const action = calculationOfGradesAC('maths')

    const endState = StudentsReducer(startState, action)

    expect(endState[0].finalAssessment).toBe(true)
    expect(endState[1].finalAssessment).toBe(false)
    expect(endState[2].finalAssessment).toBe(true)
})