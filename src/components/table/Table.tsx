import React from 'react';
import s from './Table.module.scss'
import {
    changeFirstNameAC,
    changeLastNameAC,
    sortFNameDecAC, sortFNameIncAC, sortLNameDecAC, sortLNameIncAC,
    StudentType
} from "../../redux/tableReducer";
import SuperEditableSpan from "../others/span/SuperEditableSpan";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redux/Redux-store";
import {ButtonBar} from "./buttonBar/ButtonBar";

const classArr = ['Математика', 'Физика', 'Информатика']

export const Table: React.FC = () => {
    const dispatch = useDispatch()
    const students = useSelector<AppStoreType, StudentType[]>(state => state.StudentsReducer)

//change first/last name
    const changeFirstname = (id: string, fName: string) => {
        dispatch(changeFirstNameAC(id, fName))
    }
    const changeLastname = (id: string, lName: string) => {
        dispatch(changeLastNameAC(id, lName))
    }
//sort First and Last Name
    const sortFNameDec = () => {
        dispatch(sortFNameDecAC())
    }
    const sortFNameInc = () => {
        dispatch(sortFNameIncAC())
    }
    const sortLNameDec = () => {
        dispatch(sortLNameDecAC())
    }
    const sortLNameInc = () => {
        dispatch(sortLNameIncAC())
    }

    const finalPeople = students.map((p: StudentType) => (
        <div key={p.id} className={s.rowTable}>
            <div className={s.firstName}>
                <SuperEditableSpan title={p.firstName} onChangeText={(newName) => changeFirstname(p.id, newName)}/>
            </div>
            <div className={s.lastName}>
                <SuperEditableSpan title={p.lastName} onChangeText={(newName) => changeLastname(p.id, newName)}/>
            </div>
            <div className={s.lesson}>{p.lesson}</div>
            <div className={s.grades}>{p.grades}</div>
            <div>{p.finalAssessment}</div>
        </div>
    ))

    return (
        <div className={s.table}>
            <div>
                <div className={s.header}>
                    <div className={s.firstName}>Имя</div>
                    <div className={s.lastName}>Фамилия</div>
                    <div className={s.lesson}>Предмет</div>
                    <div className={s.grades}>Оценки/посещаемость</div>
                    <div className={s.finalAssessment}>Зачёт</div>
                </div>
            </div>
            <div className={s.bodyTable}>
                {finalPeople}
            </div>
            <ButtonBar sortFNameDec={sortFNameDec}
                       sortFNameInc={sortFNameInc}
                       sortLNameDec={sortLNameDec}
                       sortLNameInc={sortLNameInc}
                       classArr={classArr}
            />
        </div>
    )
}