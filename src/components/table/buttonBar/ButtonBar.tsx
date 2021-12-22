import React from 'react';
import style from "./ButtonBar.module.scss";
import magnifier from "../../../icon/loupe_icon.png";
import {InputForName} from "../../others/editableSpan/inputText/InputForName";

export const ButtonBar: React.FC<ButtonBarType> = React.memo((
    {
        addStudent, text, setText
    }) => {

    return (
        <div className={style.buttonBar}>
            <div className={style.divAdd}>
                <button className={style.buttonAdd} onClick={() => addStudent()}>Добавить студента</button>
            </div>
            <div className={style.searchInput}>
                <img src={magnifier} alt={'magnifier'}/><InputForName text={text} onChangeText={setText}/>
            </div>
        </div>
    )
})
//types
type ButtonBarType = {
    addStudent: () => void
    text: string
    setText: () => void
}