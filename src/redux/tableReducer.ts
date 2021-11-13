import {v1} from "uuid";

export let initialPeople: Array<StudentType> = [
    {
        id: v1(), firstName: 'Иван', lastName: 'Фирстов', lesson: null,
        grades: {
            'maths': [
                {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}],
            'physics': [
                {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: 5}, {id: v1(), value: '.'}, {id: v1(), value: 3}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 3}, {id: v1(), value: 4}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}],
            'computerScience': [
                {id: v1(), value: 5}, {id: v1(), value: 5}, {id: v1(), value: '.'}, {id: v1(), value: 'н'},
                {id: v1(), value: 5}, {id: v1(), value: 4}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 5}, {id: v1(), value: 4}, {id: v1(), value: 3},
                {id: v1(), value: 5}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}]
        }, finalAssessment: null
    },
    {
        id: v1(), firstName: 'Олег', lastName: 'Куплинов', lesson: null,
        grades: {
            'maths': [
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}],
            'physics': [{id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: 3}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}],
            'computerScience': [{id: v1(), value: 5}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {
                id: v1(),
                value: 'н'
            },
                {id: v1(), value: 3}, {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 3}, {id: v1(), value: 4}, {id: v1(), value: 3},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}]
        }, finalAssessment: null
    },
    {
        id: v1(), firstName: 'Дмитрий', lastName: 'Дадарчук', lesson: null,
        grades: {
            'maths': [
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: 4},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: 4}],
            'physics': [
                {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: 3}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}],
            'computerScience': [
                {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: 3},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}]
        }, finalAssessment: null
    },
    {
        id: v1(), firstName: 'Павел', lastName: 'Вавилин', lesson: null,
        grades: {
            'maths': [
                {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: 3}, {id: v1(), value: 3},
                {id: v1(), value: '.'}, {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 3}, {id: v1(), value: 'н'}, {id: v1(), value: 4},
                {id: v1(), value: 2}, {id: v1(), value: 'н'}, {id: v1(), value: 4}],
            'physics': [
                {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 5}, {id: v1(), value: 3}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 5}, {id: v1(), value: '.'}],
            'computerScience': [
                {id: v1(), value: '.'}, {id: v1(), value: 5}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 5}, {id: v1(), value: 4}, {id: v1(), value: 4},
                {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: 3},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}]
        }, finalAssessment: null
    },
    {
        id: v1(), firstName: 'Лиза', lastName: 'Подопригора', lesson: null,
        grades: {
            'maths': [
                {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: 3}, {id: v1(), value: 3},
                {id: v1(), value: '4'}, {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 3}, {id: v1(), value: 'н'}, {id: v1(), value: 4},
                {id: v1(), value: 2}, {id: v1(), value: 'н'}, {id: v1(), value: 4}],
            'physics': [
                {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 3}, {id: v1(), value: 3}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 5}, {id: v1(), value: '.'}],
            'computerScience': [
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 3}, {id: v1(), value: '.'}, {id: v1(), value: 4},
                {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: 3},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}]
        }, finalAssessment: null
    },
    {
        id: v1(), firstName: 'Евгения', lastName: 'Кудряшова', lesson: null,
        grades: {
            'maths': [
                {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: 3},
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: 4},
                {id: v1(), value: 2}, {id: v1(), value: 'н'}, {id: v1(), value: 4}],
            'physics': [
                {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: 3}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}],
            'computerScience': [
                {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: 3}, {id: v1(), value: 4},
                {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: 2}, {id: v1(), value: 3},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}]
        }, finalAssessment: null
    },
    {
        id: v1(), firstName: 'Кирилл', lastName: 'Вавилин', lesson: null,
        grades: {
            'maths': [
                {id: v1(), value: 5}, {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: 3},
                {id: v1(), value: 5}, {id: v1(), value: 5}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 3}, {id: v1(), value: 4}, {id: v1(), value: 4},
                {id: v1(), value: 4}, {id: v1(), value: 5}, {id: v1(), value: 4}],
            'physics': [
                {id: v1(), value: 5}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: 5},
                {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: 4},
                {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: 3}, {id: v1(), value: 3},
                {id: v1(), value: 3}, {id: v1(), value: 5}, {id: v1(), value: '.'}],
            'computerScience': [
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 5}, {id: v1(), value: 3}, {id: v1(), value: 4},
                {id: v1(), value: 'н'}, {id: v1(), value: 3}, {id: v1(), value: 5}, {id: v1(), value: 3},
                {id: v1(), value: 'н'}, {id: v1(), value: 3}, {id: v1(), value: 4}]
        }, finalAssessment: null
    },
    {
        id: v1(), firstName: 'Александра', lastName: 'Комарова', lesson: null,
        grades: {
            'maths': [
                {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: 4},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: 4}],
            'physics': [
                {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}],
            'computerScience': [
                {id: v1(), value: 4}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 'н'}, {id: v1(), value: 4}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: 3},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}]
        }, finalAssessment: null
    },
    {
        id: v1(), firstName: 'Иван', lastName: 'Бакалейщиков', lesson: null,
        grades: {
            'maths': [
                {id: v1(), value: '.'}, {id: v1(), value: 3}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 4}, {id: v1(), value: 'н'}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}],
            'physics': [
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: 3}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 3}, {id: v1(), value: 4}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}],
            'computerScience': [
                {id: v1(), value: '.'}, {id: v1(), value: 5}, {id: v1(), value: 'н'}, {id: v1(), value: 'н'},
                {id: v1(), value: 5}, {id: v1(), value: '.'}, {id: v1(), value: 2}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 5}, {id: v1(), value: 4}, {id: v1(), value: 3},
                {id: v1(), value: 5}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}]
        }, finalAssessment: null
    },
    {
        id: v1(), firstName: 'Анастасия', lastName: 'Фирстова', lesson: null,
        grades: {
            'maths': [
                {id: v1(), value: '.'}, {id: v1(), value: 3}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 3}, {id: v1(), value: 'н'}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}],
            'physics': [
                {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: 2}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 3}, {id: v1(), value: 3}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 3}, {id: v1(), value: 4}, {id: v1(), value: '.'},
                {id: v1(), value: 5}, {id: v1(), value: '.'}, {id: v1(), value: '.'}],
            'computerScience': [
                {id: v1(), value: '.'}, {id: v1(), value: 4}, {id: v1(), value: 'н'}, {id: v1(), value: 'н'},
                {id: v1(), value: 3}, {id: v1(), value: 'н'}, {id: v1(), value: 2}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 3}, {id: v1(), value: 4}, {id: v1(), value: 3},
                {id: v1(), value: 4}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}]
        }, finalAssessment: null
    },
    {
        id: v1(), firstName: 'Глеб', lastName: 'Радионов', lesson: null,
        grades: {
            'maths': [
                {id: v1(), value: '.'}, {id: v1(), value: 3}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 4}, {id: v1(), value: 'н'}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}],
            'physics': [
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: 'н'},
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: 3}, {id: v1(), value: 'н'},
                {id: v1(), value: 'н'}, {id: v1(), value: 3}, {id: v1(), value: 3}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}],
            'computerScience': [
                {id: v1(), value: 'н'}, {id: v1(), value: 5}, {id: v1(), value: 'н'}, {id: v1(), value: 'н'},
                {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: 2}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: 4}, {id: v1(), value: 3},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}]
        }, finalAssessment: null
    },
    {
        id: v1(), firstName: 'Валерия', lastName: 'Тарасова', lesson: null,
        grades: {
            'maths': [
                {id: v1(), value: 5}, {id: v1(), value: 'н'}, {id: v1(), value: 3}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 3}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}],
            'physics': [{id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: 5}, {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 5}, {id: v1(), value: 3}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}],
            'computerScience': [{id: v1(), value: 5}, {id: v1(), value: 5}, {id: v1(), value: '.'}, {
                id: v1(),
                value: 5
            },
                {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 5}, {id: v1(), value: 4}, {id: v1(), value: 3},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}]
        }, finalAssessment: null
    },
    {
        id: v1(), firstName: 'Ганзель', lastName: 'Фирстов', lesson: null,
        grades: {
            'maths': [
                {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: 3},
                {id: v1(), value: '.'}, {id: v1(), value: 4}, {id: v1(), value: 'н'}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 3}, {id: v1(), value: 'н'}, {id: v1(), value: 4},
                {id: v1(), value: 2}, {id: v1(), value: 'н'}, {id: v1(), value: 4}],
            'physics': [
                {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 3}, {id: v1(), value: 3}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}],
            'computerScience': [
                {id: v1(), value: 'н'}, {id: v1(), value: 5}, {id: v1(), value: 3}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 3}, {id: v1(), value: 4}, {id: v1(), value: 4},
                {id: v1(), value: 4}, {id: v1(), value: 3}, {id: v1(), value: 4}, {id: v1(), value: 3},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}]
        }, finalAssessment: null
    },
    {
        id: v1(), firstName: 'Илья', lastName: 'Вавилин', lesson: null,
        grades: {
            'maths': [
                {id: v1(), value: '.'}, {id: v1(), value: 5}, {id: v1(), value: 3}, {id: v1(), value: 3},
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 5}, {id: v1(), value: 'н'}, {id: v1(), value: 4},
                {id: v1(), value: 2}, {id: v1(), value: 'н'}, {id: v1(), value: 4}],
            'physics': [
                {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: '.'},
                {id: v1(), value: 5}, {id: v1(), value: 5}, {id: v1(), value: 3}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 5}, {id: v1(), value: '.'}],
            'computerScience': [
                {id: v1(), value: '.'}, {id: v1(), value: 5}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 5}, {id: v1(), value: 4}, {id: v1(), value: 4},
                {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: 3},
                {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}]
        }, finalAssessment: null
    },
    {
        id: v1(), firstName: 'Анна', lastName: 'Ермошина', lesson: null,
        grades: {
            'maths': [
                {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: 3},
                {id: v1(), value: '.'}, {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 3}, {id: v1(), value: 'н'}, {id: v1(), value: 4},
                {id: v1(), value: 2}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}],
            'physics': [
                {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: 3}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 5}, {id: v1(), value: '.'}],
            'computerScience': [
                {id: v1(), value: '.'}, {id: v1(), value: 5}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 5}, {id: v1(), value: '.'}, {id: v1(), value: 4},
                {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: 4}, {id: v1(), value: 3},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}]
        }, finalAssessment: null
    },
    {
        id: v1(), firstName: 'Богдан', lastName: 'Римов', lesson: null,
        grades: {
            'maths': [
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: 3}, {id: v1(), value: 3},
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: 4}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: 4},
                {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: 4}],
            'physics': [
                {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: 3}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}],
            'computerScience': [
                {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: 4},
                {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: 3},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}]
        }, finalAssessment: null
    },
    {
        id: v1(), firstName: 'Рудольф', lastName: 'Адольфовинов', lesson: null,
        grades: {
            'maths': [
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 'н'}, {id: v1(), value: 2}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 3}, {id: v1(), value: 'н'}],
            'physics': [
                {id: v1(), value: 4}, {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'},
                {id: v1(), value: 2}, {id: v1(), value: 'н'}, {id: v1(), value: 3}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 3}, {id: v1(), value: 2}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}],
            'computerScience': [
                {id: v1(), value: 'н'}, {id: v1(), value: 5}, {id: v1(), value: '.'}, {id: v1(), value: 'н'},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 5}, {id: v1(), value: 4}, {id: v1(), value: 3},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}]
        }, finalAssessment: null
    },
    {
        id: v1(), firstName: 'Павел', lastName: 'Кураев', lesson: null,
        grades: {
            'maths': [
                {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: 3}, {id: v1(), value: 3},
                {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: 4}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 3}, {id: v1(), value: 'н'}, {id: v1(), value: 4},
                {id: v1(), value: 2}, {id: v1(), value: 'н'}, {id: v1(), value: 4}],
            'physics': [
                {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: 3}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}],
            'computerScience': [
                {id: v1(), value: '.'}, {id: v1(), value: 5}, {id: v1(), value: 'н'}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 5}, {id: v1(), value: 'н'}, {id: v1(), value: 4},
                {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: 3},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}]
        }, finalAssessment: null
    },
    {
        id: v1(), firstName: 'Сергей', lastName: 'Запределькин', lesson: null,
        grades: {
            'maths': [
                {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: 3}, {id: v1(), value: 3},
                {id: v1(), value: '.'}, {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 3}, {id: v1(), value: 'н'}, {id: v1(), value: 4},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: 'н'}],
            'physics': [
                {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: 3}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 5}, {id: v1(), value: '.'}],
            'computerScience': [
                {id: v1(), value: '.'}, {id: v1(), value: 5}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 5}, {id: v1(), value: 'н'}, {id: v1(), value: 4},
                {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: 'н'}, {id: v1(), value: 3},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}]
        }, finalAssessment: null
    },
    {
        id: v1(), firstName: 'Сергей', lastName: 'Мамонов', lesson: null,
        grades: {
            'maths': [
                {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: 3}, {id: v1(), value: 3},
                {id: v1(), value: '.'}, {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 3}, {id: v1(), value: 'н'}, {id: v1(), value: 4},
                {id: v1(), value: 2}, {id: v1(), value: 'н'}, {id: v1(), value: 4}],
            'physics': [
                {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: 3}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}],
            'computerScience': [
                {id: v1(), value: '.'}, {id: v1(), value: 5}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: 4},
                {id: v1(), value: 4}, {id: v1(), value: 'н'}, {id: v1(), value: 4}, {id: v1(), value: 3},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}]
        }, finalAssessment: null
    },
    {
        id: v1(), firstName: 'Александр', lastName: 'Киркоров', lesson: null,
        grades: {
            'maths': [
                {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}],
            'physics': [
                {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: 5}, {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 3}, {id: v1(), value: 4}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}],
            'computerScience': [
                {id: v1(), value: 5}, {id: v1(), value: 5}, {id: v1(), value: '.'}, {id: v1(), value: 'н'},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 5}, {id: v1(), value: 4}, {id: v1(), value: 3},
                {id: v1(), value: 5}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}]
        }, finalAssessment: null
    },
    {
        id: v1(), firstName: 'Евгения', lastName: 'Бирова', lesson: null,
        grades: {
            'maths': [
                {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: 3},
                {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: 4},
                {id: v1(), value: 2}, {id: v1(), value: 'н'}, {id: v1(), value: 4}],
            'physics': [
                {id: v1(), value: 3}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: 3}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}],
            'computerScience': [
                {id: v1(), value: 4}, {id: v1(), value: 'н'}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: 3}, {id: v1(), value: 4},
                {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: 2}, {id: v1(), value: 3},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}]
        }, finalAssessment: null
    },
    {
        id: v1(), firstName: 'Роман', lastName: 'Кудрявцев', lesson: null,
        grades: {
            'maths': [
                {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: 3}, {id: v1(), value: 3},
                {id: v1(), value: 'н'}, {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 3}, {id: v1(), value: 'н'}, {id: v1(), value: 4},
                {id: v1(), value: 2}, {id: v1(), value: 'н'}, {id: v1(), value: 4}],
            'physics': [
                {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 5}, {id: v1(), value: 3}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: 5}, {id: v1(), value: '.'}],
            'computerScience': [
                {id: v1(), value: '.'}, {id: v1(), value: 5}, {id: v1(), value: 5}, {id: v1(), value: '.'},
                {id: v1(), value: 3}, {id: v1(), value: 5}, {id: v1(), value: 4}, {id: v1(), value: 4},
                {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: 3},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}]
        }, finalAssessment: null
    },
    {
        id: v1(), firstName: 'Юлия', lastName: 'Ахламонова', lesson: null,
        grades: {
            'maths': [
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: 5}, {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}],
            'physics': [
                {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 4}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: 'н'}, {id: v1(), value: '.'}, {id: v1(), value: 3}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}],
            'computerScience': [
                {id: v1(), value: 5}, {id: v1(), value: 5}, {id: v1(), value: '.'}, {id: v1(), value: 'н'},
                {id: v1(), value: 3}, {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'},
                {id: v1(), value: 4}, {id: v1(), value: 3}, {id: v1(), value: 4}, {id: v1(), value: 3},
                {id: v1(), value: 'н'}, {id: v1(), value: 'н'}, {id: v1(), value: '.'}]
        }, finalAssessment: null
    }
]

export const StudentsReducer = (state = initialPeople, action: ActionTypes): StudentType[] => {
    switch (action.type) {
        case "ADD_STUDENT" : {
            const blankGrade = [{id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}, {
                id: v1(),
                value: '.'
            },
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'},
                {id: v1(), value: '.'}, {id: v1(), value: '.'}, {id: v1(), value: '.'}]
            return [{
                id: v1(), firstName: 'enter first name', lastName: 'enter last name', lesson: null,
                grades: {
                    'maths': blankGrade,
                    'physics': blankGrade,
                    'computerScience': blankGrade
                }, finalAssessment: null
            }, ...state]
        }
        case "REMOVE_STUDENT" : {
            return state.filter((student) => student.id !== action.idStudent)
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
            return state.map(student => student.id === action.idStudent
                ? {
                    ...student, grades: {
                        [action.lessons]: [...student.grades[action.lessons].map(
                            (grade) => grade.id === action.idGrade
                                ? {...grade, value: action.newGrade}
                                : grade
                        )],
                    }
                }
                : student
            )
        }
        case "CALCULATION_OF_GRADES" : {
            return state.map((student) => {
                const arrGrades = student.grades[action.lessons].map(
                    (grade) => grade.value)
                let searchForNumber = arrGrades.join().match(/\d+/g)

                if (searchForNumber) {
                    const arrNumber = searchForNumber!.map(Number)
                    const averageScore = arrNumber.reduce((a, b) => a + b) / arrNumber.length
                    const missedClasses: Array<string> | null = arrGrades.join().match(/[н]/g)
                    if (missedClasses) {
                        const tenPercentForNCount = Math.ceil((10 * arrGrades.length) / 100)
                        const passed = averageScore > 4 && missedClasses.length <= tenPercentForNCount
                        student.finalAssessment = passed
                    } else {
                        const passed = averageScore > 4
                        student.finalAssessment = passed
                    }
                } else {
                    student.finalAssessment = false
                }

                return student
            })
        }
        case "RESETTING_FINAL_ASSESSMENT" : {
                return state.map((student)=> {
                    student.finalAssessment = null
                    return student})
            }
        default:
            return state
    }
}
//actions
export const addStudentAC = () => {
    return {type: "ADD_STUDENT"} as const
}
export const removeStudentAC = (idStudent: string) => {
    return {type: "REMOVE_STUDENT", idStudent} as const
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
export const changeGradeAC = (idStudent: string, idGrade: string, lessons: string, newGrade: string | number) => {
    return {type: "CHANGE_GRADE", idStudent, idGrade, lessons, newGrade} as const
}
export const calculationOfGradesAC = (lessons: string) => {
    return {type: "CALCULATION_OF_GRADES", lessons} as const
}
export const resettingFinalAssessmentAC = () => {
    return {type: "RESETTING_FINAL_ASSESSMENT", } as const
}
//thanks
/*export const getStudents = (): ThunksType =>
    async (dispatch) => {
        let data = await studentsAPI.getStudents()
        dispatch(setStudents(data))
    }
export const getStudentsGrades = (studentId: number, lessons: string): ThunksType =>
    async (dispatch) => {
        let data = await studentsAPI.getGrades(userId: number, lessons: string)
        dispatch(setStudentsGrades(data))
    }
export const updateGrade = (studentId: number, gradeId, lessons: string): ThunksType =>
    async (dispatch) => {
        let data = await studentsAPI.updateGrade(studentId, gradeId, lessons)
        if (data.resultCode === ResultCodeEnum.Success) {
            dispatch(setStatusProfile(status))
        } else {
            alert(data.messages[0])
        }
    }
export const savePhoto = (photos: File): ThunksType =>
    async (dispatch) => {
        let response = await profileAPI.savePhoto(photos)
        if (response.resultCode === ResultCodeEnum.Success) {
            dispatch(savePhotoSuccess(response.data))
        }
    }
export const saveProfile = (profile: UserProfile): ThunksType =>
    async (dispatch) => {
        let data = await profileAPI.saveProfile(profile)
        if (data.resultCode === ResultCodeEnum.Success) {
            dispatch(saveProfileSuccess(profile))
        } else {
            dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}))
            return Promise.reject(data.messages[0])
        }
    }*/
//types
type ActionTypes = ReturnType<typeof addStudentAC> | ReturnType<typeof removeStudentAC> |
    ReturnType<typeof changeFirstNameAC> | ReturnType<typeof changeLastNameAC> |
    ReturnType<typeof sortFNameDecAC> | ReturnType<typeof sortLNameDecAC> |
    ReturnType<typeof sortFNameIncAC> | ReturnType<typeof sortLNameIncAC> |
    ReturnType<typeof changeGradeAC> | ReturnType<typeof calculationOfGradesAC>|
    ReturnType<typeof resettingFinalAssessmentAC>

export type StudentType = {
    id: string
    firstName: string
    lastName: string
    lesson: null | string
    grades: gradesType
    finalAssessment: null | boolean
}
export type keyLessons = 'Математика' | 'Физика' | 'Информатика'

export type gradeType = {
    id: string;
    value: number | string;
}
export type gradesType = {
    [key: string]: gradeType[]
}






