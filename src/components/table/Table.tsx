import React from 'react';
import s from './Table.module.scss'
import {initialPeople, StudentType} from "../../redux/tableReducer";


export const Table: React.FC = () => {

    const finalPeople = initialPeople.map((p:StudentType) => (
        <tr key={p.id} className={s.rowTable}>
            <td>{p.firstName}</td>
            <td>{p.lastName}</td>
            <td>{p.class}</td>
            <td>{p.lesson}</td>
            <td>{p.grades}</td>
            <td>{p.finalAssessment}</td>
        </tr>
    ))

    return (
        <table className={s.table}>
            <thead >
            <tr className={s.header}>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Курс</th>
                <th>Предмет</th>
                <th>Оценки/посещаемость</th>
                <th className={s.finalAssessment}>Зачёт</th>
            </tr>
            </thead>
            <tbody className={s.bodyTable}>
            {finalPeople}
            </tbody>
        </table>
    )
}