import React, {FC, memo} from 'react';
import style from './TableHeader.module.scss'
import settings from '../../../icon/settings.png'
import question from "../../../icon/question.png";
import exclamation from "../../../icon/exclamation.png";
import {SuperSelect} from "../../others/select/SuperSelect";

export const TableHeader: FC<TableHeaderType> = memo((
    {
        setToggle, toggle, sortFNameInc, sortFNameDec, calculationOfGrades,
        sortLNameInc, sortLNameDec, setText, setLessons, lessonsArr
    }) => {

    const changeToggle = () => {
        console.log(toggle)
        setToggle(!toggle)
        if (toggle) setText('')
    }

    return (
        <div className={style.header}>
            <button className={style.butSettings} onClick={() => changeToggle()}>
                <img src={settings} alt={'settings'}/>
            </button>
            <div className={style.firstNameHeader}>
                <button className={style.buttonDec} onClick={() => sortFNameDec()}>_</button>
                Имя
                <button className={style.buttonInc} onClick={() => sortFNameInc()}>_</button></div>
            <div className={style.lastNameHeader}>
                <button className={style.buttonDec} onClick={() => sortLNameDec()}>_</button>
                Фамилия
                <button className={style.buttonInc} onClick={() => sortLNameInc()}>_</button>
            </div>
            <div className={style.lessonHeader}>
                Предмет:
                <SuperSelect options={lessonsArr} onChangeOption={setLessons}/>
            </div>
            <div className={style.gradesHeader}>Оценки/посещаемость</div>
            <div className={style.finalAssessmentHeader}>Зачёт</div>
            <button className={style.butFinalAssessment} onClick={() => calculationOfGrades()}>
                <img src={question} alt={'question'}/>
            </button>
        </div>
    )
})
//types
type TableHeaderType = {
    toggle: boolean
    lessonsArr: string[]
    setLessons: (value: string) => void
    sortFNameInc: () => void
    sortFNameDec: () => void
    sortLNameInc: () => void
    sortLNameDec: () => void
    calculationOfGrades: () => void
    setText: (text: string) => void
    setToggle: (toggle: boolean) => void
}