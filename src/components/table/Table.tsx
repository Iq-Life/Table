import React from 'react';
import s from './Table.module.scss'
import {changeFirstNameAC, initialPeople, sortFirstNameAC, StudentType} from "../../redux/tableReducer";
import SuperEditableSpan from "./span/SuperEditableSpan";
import {useDispatch} from "react-redux";


export const Table: React.FC = () => {
    const dispatch = useDispatch()
    //const students = useSelector<AppStoreType, StudentType[]>(state=> state.StudentsReducer)


    const changeFirstname=(id:string, fName:string)=>{
        dispatch(changeFirstNameAC(id,fName))
    }
    const sortFirstName = () => {
        dispatch(sortFirstNameAC())
    }
    const finalPeople = initialPeople.map((p: StudentType) => (
        <tr key={p.id} className={s.rowTable}>
            <td className={s.firstName}>
                <SuperEditableSpan
                title={p.firstName}
                onChangeText={ () => {changeFirstname(p.id, p.firstName)}}
                /*spanProps={{children: value ? undefined : 'enter text...'}}*//>
            </td>
            <td className={s.lastName}>{p.lastName}</td>
            <td className={s.class}>{p.class}</td>
            <td className={s.lesson}>{p.lesson}</td>
            <td className={s.grades}>{p.grades}</td>
            <td>{p.finalAssessment}</td>
        </tr>
    ))

    return (
        <table className={s.table}>
            <thead>
            <tr className={s.header}>
                <th onClick={()=>{sortFirstName()}}>Имя</th>
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