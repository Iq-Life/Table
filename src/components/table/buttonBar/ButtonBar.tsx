import React, {useState} from 'react';
import style from "./ButtonBar.module.scss";
import magnifier from "../../../icon/loupe_icon.png";
import {MyInput} from "../../others/editableSpan/inputText/MyInput";
import {ModalIcon} from "../../modal/ModalIcon";


export const ButtonBar: React.FC<ButtonBarType> = React.memo((
    {
        addStudent, text, setText, setNameLesson, nameLesson
    }) => {

    const [toggle, setToggle] = useState<boolean>(false)

    return (

        <div className={style.buttonBar}>

            <div className={style.divAdd}>
                <button className={style.buttonAdd} onClick={() => addStudent()}>Добавить студента</button>
            </div>
            <div className={style.searchInput}>
                <img src={magnifier} alt={'magnifier'}/><MyInput text={text} onChangeText={setText}/>
            </div>
            <div>
                <button className={style.addLesson} onClick={() => setToggle(!toggle)}>Добавить урок</button>
                {toggle ?
                    <ModalIcon
                        toggle={toggle}
                        setToggle={setToggle}
                        nameLesson={nameLesson}
                        setNameLesson={setNameLesson}
                    />
                    : ''}
            </div>
        </div>
    )
})
//types
type ButtonBarType = {
    addStudent: () => void
    text: string
    setText: (value: string) => void
    setNameLesson: (value: string) => void
    nameLesson: string
}