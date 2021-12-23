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
            <div>
                <button className={style.buttonDec} onClick={() => sortLNameDec()}>_</button>
                Фамилия
                <button className={style.buttonInc} onClick={() => sortLNameInc()}>_</button>
            </div>
            <div>
                Предмет:
                <SuperSelect options={lessonsArr} onChangeOption={setLessons}/>
            </div>
            <div >Оценки/посещаемость</div>
            <div >Зачёт</div>
            <button className={style.butFinalAssessment} onClick={() => calculationOfGrades()}>
                {toggle ? <img src={question} alt={'question'}/> : <img src={exclamation} alt={'exclamation'}/>}
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