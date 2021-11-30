import React from 'react';
import style from "./ButtonBar.module.scss";
import {SuperSelect} from "../../others/select/SuperSelect";
import magnifier from "../../../icon/loupe_icon.png";
import {InputForName} from "../../others/editableSpan/inputText/InputForName";

export const ButtonBar: React.FC<ButtonBarType> = React.memo((
    {
        sortFNameInc, sortFNameDec, sortLNameDec,addStudent,
        sortLNameInc, setLessons, calculationOfGrades,text, setText,

        lessonsArr
    }) => {


    return (
        <div className={style.buttonBar}>
            <div className={style.divAdd}>
                <button className={style.buttonAdd} onClick={()=> addStudent()}>Добавить студента</button>
            </div>
            <div className={style.searchInput}>
                <img src={magnifier} alt={'magnifier'}/><InputForName text={text} onChangeText={setText}/>
            </div>
            <div className={style.selectLessons}>
                <SuperSelect options={lessonsArr} onChangeOption={setLessons}/>
            </div>


            <div className={style.divCalculation}>
                <button className={style.butCalculation} onClick={()=> calculationOfGrades()}>
                    Calculation of grades
                </button>
            </div>
        </div>
    )
})
//types
type ButtonBarType = {
    sortFNameInc: () => void
    sortFNameDec: () => void
    sortLNameInc: () => void
    sortLNameDec: () => void
    calculationOfGrades: ()=> void
    lessonsArr: string[]
    setLessons:(value:string)=>void
    addStudent: ()=> void
    text: string
    setText: () => void
}