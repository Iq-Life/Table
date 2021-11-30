import {v1} from "uuid";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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


export const slice = createSlice({
    name: 'Students',
    initialState: initialPeople,
    reducers: {
        addStudentAC: (state) => {
            const blankGrade = []
            for (let i = 1; i < 16 ; i++ ) { blankGrade.push({id: v1(), value: '.'})}
            state.unshift({
                id: v1(), firstName: 'Введите имя', lastName: 'Введите фамилию', lesson: null,
                grades: {
                    'maths': blankGrade,
                    'physics': blankGrade,
                    'computerScience': blankGrade
                }, finalAssessment: null
            })
        },
        removeStudentAC: (state, action: PayloadAction<{idStudent: string}>) => {
          const  indexStudent = state.findIndex( student => student.id === action.payload.idStudent)
            delete state[indexStudent]
        },
        changeFirstNameAC: (state, action: PayloadAction<{id: string, value: string}>) => {
            const  indexStudent = state.findIndex( student => student.id === action.payload.id)
            state[indexStudent].firstName = action.payload.value
            /*state.map((student) => student.id === action.id ? {...student, firstName: action.value} : student)*/
        },
        changeLastNameAC: (state, action: PayloadAction<{id: string, value: string}>) => {
            const  indexStudent = state.findIndex( student => student.id === action.payload.id)
            state[indexStudent].lastName = action.payload.value
        },
        sortFNameDecAC: (state) => {
           state.sort((studentA, studentB) => studentA.firstName.localeCompare(studentB.firstName))
        },
        sortLNameDecAC: (state) => {
            state.sort((studentA, studentB) => studentA.lastName.localeCompare(studentB.lastName))
        },
        sortFNameIncAC: (state) => {
            state.sort((studentA, studentB) => studentB.firstName.localeCompare(studentA.firstName))
        },
        sortLNameIncAC: (state) => {
            state.sort((studentA, studentB) => studentB.lastName.localeCompare(studentA.lastName))
        },
        changeGradeAC: (state, action: PayloadAction<{idStudent: string, idGrade: string, lessons: string, newGrade: string | number}>) => {
            const indexStudent = state.findIndex( student => student.id === action.payload.idStudent)
            const indexGrade = state[indexStudent].grades[action.payload.lessons].findIndex(grade => grade.id === action.payload.idGrade)
            state[indexStudent].grades[action.payload.lessons][indexGrade].value = action.payload.newGrade
        },
        calculationOfGradesAC: (state, action: PayloadAction<{lessons: string}>) => {
            state.forEach((student) => {

                const arrGrades = student.grades[action.payload.lessons].map((grade) => grade.value)
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
            })
        },
        resettingFinalAssessmentAC: (state) => {
            state.forEach( student => student.finalAssessment = null)
        }
    }
})

export const StudentsReducer = slice.reducer
export const {addStudentAC, removeStudentAC, changeFirstNameAC, changeLastNameAC, sortFNameDecAC, sortLNameDecAC,
    sortFNameIncAC, sortLNameIncAC, changeGradeAC, calculationOfGradesAC, resettingFinalAssessmentAC} = slice.actions

export type StudentType = {
    id: string
    firstName: string
    lastName: string
    lesson: null | string
    grades: gradesType
    finalAssessment: null | boolean
}
export type gradeType = {
    id: string;
    value: number | string;
}
export type gradesType = {
    [key: string]: gradeType[]
}






