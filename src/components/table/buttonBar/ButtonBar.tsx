import React from 'react';
import style from "./buttonBar.module.scss";
import {SuperSelect} from "../../others/select/SuperSelect";

export const ButtonBar: React.FC<ButtonBarType> = (
    {
        sortFNameInc, sortFNameDec, sortLNameDec,addStudent,
        sortLNameInc, setLessons, calculationOfGrades,

        lessonsArr
    }) => {


    return (
        <div className={style.buttonBar}>
            <div className={style.divButFSort}>
                <button className={style.buttonDec} onClick={() => sortFNameDec()}>sort _</button>
                <button className={style.buttonInc} onClick={() => sortFNameInc()}>sort _</button>
            </div>
            <div className={style.divButLSort}>
                <button className={style.buttonDec} onClick={() => sortLNameDec()}>sort _</button>
                <button className={style.buttonInc} onClick={() => sortLNameInc()}>sort _</button>
            </div>

            <div className={style.selectLessons}>
                <SuperSelect options={lessonsArr} onChangeOption={setLessons}/>
            </div>
            <div className={style.divAdd}>
                <button className={style.buttonAdd} onClick={()=> addStudent()}>add student</button>
            </div>

            <div className={style.divCalculation}>
                <button className={style.butCalculation} onClick={()=> calculationOfGrades()}>
                    Calculation of grades
                </button>
            </div>
        </div>
    )
}

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
}