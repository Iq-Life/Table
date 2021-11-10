import React from 'react';
import s from "./buttonBar.module.scss";
import SuperSelect from "../../others/select/SuperSelect";

export const ButtonBar: React.FC<ButtonBarType> = (
    {
        sortFNameInc, sortFNameDec,
        sortLNameDec, sortLNameInc,

        classArr
    }) => {


    return (
        <div className={s.buttonBar}>
            <div className={s.buttonsFSort}>
                <button className={s.buttonDec} onClick={() => sortFNameDec()}>sort _</button>
                <button className={s.buttonInc} onClick={() => sortFNameInc()}>sort _</button>
            </div>
            <div className={s.buttonsLSort}>
                <button className={s.buttonDec} onClick={() => sortLNameDec()}>sort _</button>
                <button className={s.buttonInc} onClick={() => sortLNameInc()}>sort _</button>
            </div>

            <div><SuperSelect options={classArr}/></div>

            <div className={s.divCalculation}>
                <button className={s.butCalculation}>Calculation of grades</button>
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
    classArr: string[]
}