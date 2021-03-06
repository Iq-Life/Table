import { v1 } from "uuid";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export let initialPeople: StateType = {
	students: [
		{
			id: v1(),
			firstName: 'Иван',
			lastName: 'Фирстов',
			lesson: null,
			grades: {
				'maths': [
					{ id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' }],
				'physics': [
					{ id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: 5 }, { id: v1(), value: '.' }, { id: v1(), value: 3 }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: 3 }, { id: v1(), value: 4 }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' }],
				'computerScience': [
					{ id: v1(), value: 5 }, { id: v1(), value: 5 }, { id: v1(), value: '.' }, { id: v1(), value: 'н' },
					{ id: v1(), value: 5 }, { id: v1(), value: 4 }, { id: v1(), value: 5 }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 5 }, { id: v1(), value: 4 }, { id: v1(), value: 3 },
					{ id: v1(), value: 5 }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }]
			},
			finalAssessment: null
		},
		{
			id: v1(), firstName: 'Олег', lastName: 'Куплинов', lesson: null,
			grades: {
				'maths': [
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' }],
				'physics': [{ id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
				{ id: v1(), value: '.' }, { id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
				{ id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: 3 }, { id: v1(), value: '.' },
				{ id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }],
				'computerScience': [{ id: v1(), value: 5 }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }, {
					id: v1(),
					value: 'н'
				},
				{ id: v1(), value: 3 }, { id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' },
				{ id: v1(), value: 4 }, { id: v1(), value: 3 }, { id: v1(), value: 4 }, { id: v1(), value: 3 },
				{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }]
			}, finalAssessment: null
		},
		{
			id: v1(), firstName: 'Дмитрий', lastName: 'Дадарчук', lesson: null,
			grades: {
				'maths': [
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: 4 },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: 4 }],
				'physics': [
					{ id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: 3 }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }],
				'computerScience': [
					{ id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: 3 },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }]
			}, finalAssessment: null
		},
		{
			id: v1(), firstName: 'Павел', lastName: 'Вавилин', lesson: null,
			grades: {
				'maths': [
					{ id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: 3 }, { id: v1(), value: 3 },
					{ id: v1(), value: '.' }, { id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 3 }, { id: v1(), value: 'н' }, { id: v1(), value: 4 },
					{ id: v1(), value: 2 }, { id: v1(), value: 'н' }, { id: v1(), value: 4 }],
				'physics': [
					{ id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: 5 }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 5 }, { id: v1(), value: 3 }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 5 }, { id: v1(), value: '.' }],
				'computerScience': [
					{ id: v1(), value: '.' }, { id: v1(), value: 5 }, { id: v1(), value: 5 }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 5 }, { id: v1(), value: 4 }, { id: v1(), value: 4 },
					{ id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: 3 },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }]
			}, finalAssessment: null
		},
		{
			id: v1(), firstName: 'Лиза', lastName: 'Подопригора', lesson: null,
			grades: {
				'maths': [
					{ id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: 3 }, { id: v1(), value: 3 },
					{ id: v1(), value: '4' }, { id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 3 }, { id: v1(), value: 'н' }, { id: v1(), value: 4 },
					{ id: v1(), value: 2 }, { id: v1(), value: 'н' }, { id: v1(), value: 4 }],
				'physics': [
					{ id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: 5 }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 3 }, { id: v1(), value: 3 }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 5 }, { id: v1(), value: '.' }],
				'computerScience': [
					{ id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: 3 }, { id: v1(), value: '.' }, { id: v1(), value: 4 },
					{ id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: 3 },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }]
			}, finalAssessment: null
		},
		{
			id: v1(), firstName: 'Евгения', lastName: 'Кудряшова', lesson: null,
			grades: {
				'maths': [
					{ id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: 3 },
					{ id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: 4 },
					{ id: v1(), value: 2 }, { id: v1(), value: 'н' }, { id: v1(), value: 4 }],
				'physics': [
					{ id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: 3 }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: '.' }],
				'computerScience': [
					{ id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: 5 }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: 3 }, { id: v1(), value: 4 },
					{ id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: 2 }, { id: v1(), value: 3 },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }]
			}, finalAssessment: null
		},
		{
			id: v1(), firstName: 'Кирилл', lastName: 'Вавилин', lesson: null,
			grades: {
				'maths': [
					{ id: v1(), value: 5 }, { id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: 3 },
					{ id: v1(), value: 5 }, { id: v1(), value: 5 }, { id: v1(), value: 5 }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 3 }, { id: v1(), value: 4 }, { id: v1(), value: 4 },
					{ id: v1(), value: 4 }, { id: v1(), value: 5 }, { id: v1(), value: 4 }],
				'physics': [
					{ id: v1(), value: 5 }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: 5 },
					{ id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: 4 },
					{ id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: 3 }, { id: v1(), value: 3 },
					{ id: v1(), value: 3 }, { id: v1(), value: 5 }, { id: v1(), value: '.' }],
				'computerScience': [
					{ id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: 5 }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 5 }, { id: v1(), value: 3 }, { id: v1(), value: 4 },
					{ id: v1(), value: 'н' }, { id: v1(), value: 3 }, { id: v1(), value: 5 }, { id: v1(), value: 3 },
					{ id: v1(), value: 'н' }, { id: v1(), value: 3 }, { id: v1(), value: 4 }]
			}, finalAssessment: null
		},
		{
			id: v1(), firstName: 'Александра', lastName: 'Комарова', lesson: null,
			grades: {
				'maths': [
					{ id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: 4 },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: 4 }],
				'physics': [
					{ id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }],
				'computerScience': [
					{ id: v1(), value: 4 }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 'н' }, { id: v1(), value: 4 }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: 3 },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }]
			}, finalAssessment: null
		},
		{
			id: v1(), firstName: 'Иван', lastName: 'Бакалейщиков', lesson: null,
			grades: {
				'maths': [
					{ id: v1(), value: '.' }, { id: v1(), value: 3 }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: 4 }, { id: v1(), value: 'н' }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' }],
				'physics': [
					{ id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: 3 }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: 3 }, { id: v1(), value: 4 }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' }],
				'computerScience': [
					{ id: v1(), value: '.' }, { id: v1(), value: 5 }, { id: v1(), value: 'н' }, { id: v1(), value: 'н' },
					{ id: v1(), value: 5 }, { id: v1(), value: '.' }, { id: v1(), value: 2 }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: 5 }, { id: v1(), value: 4 }, { id: v1(), value: 3 },
					{ id: v1(), value: 5 }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }]
			}, finalAssessment: null
		},
		{
			id: v1(), firstName: 'Анастасия', lastName: 'Фирстова', lesson: null,
			grades: {
				'maths': [
					{ id: v1(), value: '.' }, { id: v1(), value: 3 }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 3 }, { id: v1(), value: 'н' }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' }],
				'physics': [
					{ id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: 2 }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 3 }, { id: v1(), value: 3 }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: 3 }, { id: v1(), value: 4 }, { id: v1(), value: '.' },
					{ id: v1(), value: 5 }, { id: v1(), value: '.' }, { id: v1(), value: '.' }],
				'computerScience': [
					{ id: v1(), value: '.' }, { id: v1(), value: 4 }, { id: v1(), value: 'н' }, { id: v1(), value: 'н' },
					{ id: v1(), value: 3 }, { id: v1(), value: 'н' }, { id: v1(), value: 2 }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: 3 }, { id: v1(), value: 4 }, { id: v1(), value: 3 },
					{ id: v1(), value: 4 }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }]
			}, finalAssessment: null
		},
		{
			id: v1(), firstName: 'Глеб', lastName: 'Радионов', lesson: null,
			grades: {
				'maths': [
					{ id: v1(), value: '.' }, { id: v1(), value: 3 }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 4 }, { id: v1(), value: 'н' }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' }],
				'physics': [
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: 'н' },
					{ id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: 3 }, { id: v1(), value: 'н' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 3 }, { id: v1(), value: 3 }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' }],
				'computerScience': [
					{ id: v1(), value: 'н' }, { id: v1(), value: 5 }, { id: v1(), value: 'н' }, { id: v1(), value: 'н' },
					{ id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: 2 }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: 4 }, { id: v1(), value: 3 },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }]
			}, finalAssessment: null
		},
		{
			id: v1(), firstName: 'Валерия', lastName: 'Тарасова', lesson: null,
			grades: {
				'maths': [
					{ id: v1(), value: 5 }, { id: v1(), value: 'н' }, { id: v1(), value: 3 }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 3 }, { id: v1(), value: 5 }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' }],
				'physics': [{ id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
				{ id: v1(), value: 5 }, { id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: '.' },
				{ id: v1(), value: 4 }, { id: v1(), value: 5 }, { id: v1(), value: 3 }, { id: v1(), value: '.' },
				{ id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }],
				'computerScience': [{ id: v1(), value: 5 }, { id: v1(), value: 5 }, { id: v1(), value: '.' }, {
					id: v1(),
					value: 5
				},
				{ id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: '.' },
				{ id: v1(), value: 4 }, { id: v1(), value: 5 }, { id: v1(), value: 4 }, { id: v1(), value: 3 },
				{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }]
			}, finalAssessment: null
		},
		{
			id: v1(), firstName: 'Ганзель', lastName: 'Фирстов', lesson: null,
			grades: {
				'maths': [
					{ id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: 3 },
					{ id: v1(), value: '.' }, { id: v1(), value: 4 }, { id: v1(), value: 'н' }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 3 }, { id: v1(), value: 'н' }, { id: v1(), value: 4 },
					{ id: v1(), value: 2 }, { id: v1(), value: 'н' }, { id: v1(), value: 4 }],
				'physics': [
					{ id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: 5 }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 3 }, { id: v1(), value: 3 }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }],
				'computerScience': [
					{ id: v1(), value: 'н' }, { id: v1(), value: 5 }, { id: v1(), value: 3 }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 3 }, { id: v1(), value: 4 }, { id: v1(), value: 4 },
					{ id: v1(), value: 4 }, { id: v1(), value: 3 }, { id: v1(), value: 4 }, { id: v1(), value: 3 },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }]
			}, finalAssessment: null
		},
		{
			id: v1(), firstName: 'Илья', lastName: 'Вавилин', lesson: null,
			grades: {
				'maths': [
					{ id: v1(), value: '.' }, { id: v1(), value: 5 }, { id: v1(), value: 3 }, { id: v1(), value: 3 },
					{ id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: 5 }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 5 }, { id: v1(), value: 'н' }, { id: v1(), value: 4 },
					{ id: v1(), value: 2 }, { id: v1(), value: 'н' }, { id: v1(), value: 4 }],
				'physics': [
					{ id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: 5 }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: '.' },
					{ id: v1(), value: 5 }, { id: v1(), value: 5 }, { id: v1(), value: 3 }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 5 }, { id: v1(), value: '.' }],
				'computerScience': [
					{ id: v1(), value: '.' }, { id: v1(), value: 5 }, { id: v1(), value: 5 }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 5 }, { id: v1(), value: 4 }, { id: v1(), value: 4 },
					{ id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: 3 },
					{ id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: '.' }]
			}, finalAssessment: null
		},
		{
			id: v1(), firstName: 'Анна', lastName: 'Ермошина', lesson: null,
			grades: {
				'maths': [
					{ id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: 3 },
					{ id: v1(), value: '.' }, { id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 3 }, { id: v1(), value: 'н' }, { id: v1(), value: 4 },
					{ id: v1(), value: 2 }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }],
				'physics': [
					{ id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: 3 }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 5 }, { id: v1(), value: '.' }],
				'computerScience': [
					{ id: v1(), value: '.' }, { id: v1(), value: 5 }, { id: v1(), value: 5 }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 5 }, { id: v1(), value: '.' }, { id: v1(), value: 4 },
					{ id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: 4 }, { id: v1(), value: 3 },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }]
			}, finalAssessment: null
		},
		{
			id: v1(), firstName: 'Богдан', lastName: 'Римов', lesson: null,
			grades: {
				'maths': [
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: 3 }, { id: v1(), value: 3 },
					{ id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: 4 }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: 4 },
					{ id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: 4 }],
				'physics': [
					{ id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: 5 }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: 3 }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: '.' }],
				'computerScience': [
					{ id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: 5 }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: 4 },
					{ id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: 3 },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }]
			}, finalAssessment: null
		},
		{
			id: v1(), firstName: 'Рудольф', lastName: 'Адольфовинов', lesson: null,
			grades: {
				'maths': [
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 'н' }, { id: v1(), value: 2 }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: 3 }, { id: v1(), value: 'н' }],
				'physics': [
					{ id: v1(), value: 4 }, { id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' },
					{ id: v1(), value: 2 }, { id: v1(), value: 'н' }, { id: v1(), value: 3 }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 3 }, { id: v1(), value: 2 }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' }],
				'computerScience': [
					{ id: v1(), value: 'н' }, { id: v1(), value: 5 }, { id: v1(), value: '.' }, { id: v1(), value: 'н' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: 5 }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 5 }, { id: v1(), value: 4 }, { id: v1(), value: 3 },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }]
			}, finalAssessment: null
		},
		{
			id: v1(), firstName: 'Павел', lastName: 'Кураев', lesson: null,
			grades: {
				'maths': [
					{ id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: 3 }, { id: v1(), value: 3 },
					{ id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: 4 }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 3 }, { id: v1(), value: 'н' }, { id: v1(), value: 4 },
					{ id: v1(), value: 2 }, { id: v1(), value: 'н' }, { id: v1(), value: 4 }],
				'physics': [
					{ id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: 5 }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: 3 }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }],
				'computerScience': [
					{ id: v1(), value: '.' }, { id: v1(), value: 5 }, { id: v1(), value: 'н' }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 5 }, { id: v1(), value: 'н' }, { id: v1(), value: 4 },
					{ id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: 3 },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }]
			}, finalAssessment: null
		},
		{
			id: v1(), firstName: 'Сергей', lastName: 'Запределькин', lesson: null,
			grades: {
				'maths': [
					{ id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: 3 }, { id: v1(), value: 3 },
					{ id: v1(), value: '.' }, { id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 3 }, { id: v1(), value: 'н' }, { id: v1(), value: 4 },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: 'н' }],
				'physics': [
					{ id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: 3 }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 5 }, { id: v1(), value: '.' }],
				'computerScience': [
					{ id: v1(), value: '.' }, { id: v1(), value: 5 }, { id: v1(), value: 5 }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 5 }, { id: v1(), value: 'н' }, { id: v1(), value: 4 },
					{ id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: 'н' }, { id: v1(), value: 3 },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }]
			}, finalAssessment: null
		},
		{
			id: v1(), firstName: 'Сергей', lastName: 'Мамонов', lesson: null,
			grades: {
				'maths': [
					{ id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: 3 }, { id: v1(), value: 3 },
					{ id: v1(), value: '.' }, { id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 3 }, { id: v1(), value: 'н' }, { id: v1(), value: 4 },
					{ id: v1(), value: 2 }, { id: v1(), value: 'н' }, { id: v1(), value: 4 }],
				'physics': [
					{ id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: 3 }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }],
				'computerScience': [
					{ id: v1(), value: '.' }, { id: v1(), value: 5 }, { id: v1(), value: 5 }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: 4 },
					{ id: v1(), value: 4 }, { id: v1(), value: 'н' }, { id: v1(), value: 4 }, { id: v1(), value: 3 },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }]
			}, finalAssessment: null
		},
		{
			id: v1(), firstName: 'Александр', lastName: 'Киркоров', lesson: null,
			grades: {
				'maths': [
					{ id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' }],
				'physics': [
					{ id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: 5 }, { id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: 3 }, { id: v1(), value: 4 }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' }],
				'computerScience': [
					{ id: v1(), value: 5 }, { id: v1(), value: 5 }, { id: v1(), value: '.' }, { id: v1(), value: 'н' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: 5 }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 5 }, { id: v1(), value: 4 }, { id: v1(), value: 3 },
					{ id: v1(), value: 5 }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }]
			}, finalAssessment: null
		},
		{
			id: v1(), firstName: 'Евгения', lastName: 'Бирова', lesson: null,
			grades: {
				'maths': [
					{ id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: 3 },
					{ id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: 4 },
					{ id: v1(), value: 2 }, { id: v1(), value: 'н' }, { id: v1(), value: 4 }],
				'physics': [
					{ id: v1(), value: 3 }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: 3 }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: '.' }],
				'computerScience': [
					{ id: v1(), value: 4 }, { id: v1(), value: 'н' }, { id: v1(), value: 5 }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: 3 }, { id: v1(), value: 4 },
					{ id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: 2 }, { id: v1(), value: 3 },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }]
			}, finalAssessment: null
		},
		{
			id: v1(), firstName: 'Роман', lastName: 'Кудрявцев', lesson: null,
			grades: {
				'maths': [
					{ id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: 3 }, { id: v1(), value: 3 },
					{ id: v1(), value: 'н' }, { id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 3 }, { id: v1(), value: 'н' }, { id: v1(), value: 4 },
					{ id: v1(), value: 2 }, { id: v1(), value: 'н' }, { id: v1(), value: 4 }],
				'physics': [
					{ id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: 5 }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: 5 }, { id: v1(), value: 3 }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: 5 }, { id: v1(), value: '.' }],
				'computerScience': [
					{ id: v1(), value: '.' }, { id: v1(), value: 5 }, { id: v1(), value: 5 }, { id: v1(), value: '.' },
					{ id: v1(), value: 3 }, { id: v1(), value: 5 }, { id: v1(), value: 4 }, { id: v1(), value: 4 },
					{ id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: 3 },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }]
			}, finalAssessment: null
		},
		{
			id: v1(),
			firstName: 'Юлия',
			lastName: 'Ахламонова',
			lesson: null,
			grades: {
				'maths': [
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: 5 }, { id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' }],
				'physics': [
					{ id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 4 }, { id: v1(), value: '.' }, { id: v1(), value: '.' },
					{ id: v1(), value: 'н' }, { id: v1(), value: '.' }, { id: v1(), value: 3 }, { id: v1(), value: '.' },
					{ id: v1(), value: '.' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }],
				'computerScience': [
					{ id: v1(), value: 5 }, { id: v1(), value: 5 }, { id: v1(), value: '.' }, { id: v1(), value: 'н' },
					{ id: v1(), value: 3 }, { id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' },
					{ id: v1(), value: 4 }, { id: v1(), value: 3 }, { id: v1(), value: 4 }, { id: v1(), value: 3 },
					{ id: v1(), value: 'н' }, { id: v1(), value: 'н' }, { id: v1(), value: '.' }]
			},
			finalAssessment: null
		}
	],
	lessons: [
		{ name: 'maths', countGrades: 15 },
		{ name: 'physics', countGrades: 15 },
		{ name: 'computerScience', countGrades: 15 }
	]
}

export const slice = createSlice({
	name: 'Students',
	initialState: initialPeople,
	reducers: {
		addStudentAC: (state, action: PayloadAction<{ firstName: string, lastName: string }>) => {

			const oldGrades: gradesType = {}

			for (let i = 0; i < state.lessons.length; i++) {
				const blankGrade = []

				for (let q = 1; q <= state.lessons[i].countGrades; q++) {
					blankGrade.push({ id: v1(), value: '.' })
				}

				oldGrades[state.lessons[i].name] = blankGrade
			}
			state.students.unshift({
				id: v1(),
				firstName: action.payload.firstName,
				lastName: action.payload.lastName,
				lesson: null,
				grades: oldGrades,
				finalAssessment: null
			})

		},
		removeStudentAC: (state, action: PayloadAction<{ idStudent: string }>) => {

			const indexStudent = state.students.findIndex(student => {
				return student.id === action.payload.idStudent
			})
			if (indexStudent > -1) {
				state.students.splice(indexStudent, 1)
			}

		},
		changeFirstNameAC: (state, action: PayloadAction<{ id: string, value: string }>) => {
			const indexStudent = state.students.findIndex(student => student.id === action.payload.id)
			state.students[indexStudent].firstName = action.payload.value
			/*state.map((student) => student.id === action.id ? {...student, firstName: action.value} : student)*/
		},
		changeLastNameAC: (state, action: PayloadAction<{ id: string, value: string }>) => {
			const indexStudent = state.students.findIndex(student => student.id === action.payload.id)
			state.students[indexStudent].lastName = action.payload.value
		},
		sortFNameDecAC: (state) => {
			state.students.sort((studentA, studentB) => studentA.firstName.localeCompare(studentB.firstName))
		},
		sortLNameDecAC: (state) => {
			state.students.sort((studentA, studentB) => studentA.lastName.localeCompare(studentB.lastName))
		},
		sortFNameIncAC: (state) => {
			state.students.sort((studentA, studentB) => studentB.firstName.localeCompare(studentA.firstName))
		},
		sortLNameIncAC: (state) => {
			state.students.sort((studentA, studentB) => studentB.lastName.localeCompare(studentA.lastName))
		},
		changeGradeAC: (state, action: PayloadAction<{ idStudent: string, idGrade: string, lessons: string, newGrade: string | number }>) => {
			const indexStudent = state.students.findIndex(student => student.id === action.payload.idStudent)
			const indexGrade = state.students[indexStudent].grades[action.payload.lessons].findIndex(grade => grade.id === action.payload.idGrade)
			state.students[indexStudent].grades[action.payload.lessons][indexGrade].value = action.payload.newGrade
		},
		calculationOfGradesAC: (state, action: PayloadAction<{ lessons: string }>) => {
			state.students.forEach((student) => {

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
			state.students.forEach(student => student.finalAssessment = null)
		},
		addNewLessonAC: (state, action: PayloadAction<{ newLesson: string, NumbersOfLessons: number }>) => {

			let numbersOfLesson: any = []
			for (let i = 1; i <= action.payload.NumbersOfLessons; i++) {
				numbersOfLesson.push({ id: v1(), value: '.' })
			}

			state.students.forEach(student => student.grades[action.payload.newLesson] = numbersOfLesson)
			state.lessons.push({ name: action.payload.newLesson, countGrades: action.payload.NumbersOfLessons })

		}
	}
})

export const StudentsReducer = slice.reducer
export const { addStudentAC, removeStudentAC, changeFirstNameAC, changeLastNameAC, sortFNameDecAC, sortLNameDecAC,
	sortFNameIncAC, sortLNameIncAC, changeGradeAC, calculationOfGradesAC, resettingFinalAssessmentAC,
	addNewLessonAC } = slice.actions
//types
export type StateType = {
	students: Array<StudentType>
	lessons: Array<LessonsType>
}
export type StudentType = {
	id: string
	firstName: string
	lastName: string
	lesson: null | string
	grades: gradesType
	finalAssessment: null | boolean
}
type LessonsType = {
	name: string
	countGrades: number
}
type gradesType = {
	[key: string]: gradeType[]
}
type gradeType = {
	id: string;
	value: number | string;
}