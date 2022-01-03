import React, { useState } from 'react';
import style from "./ButtonBar.module.scss";
import magnifier from "../../../icon/loupe_icon.png";
import { MyInput } from "../../others/editableSpan/inputText/MyInput";
import { ModalIcon } from "../../modal/ModalIcon";


export const ButtonBar: React.FC<ButtonBarType> = React.memo((
    {
        addStudent, text, setText, lessonsArr
    }) => {

    const [toggle, setToggle] = useState<boolean>(false)

    const onModal = () => setToggle(!toggle)
    const clickAddStudent = () => addStudent()



    return (

        <div className={style.buttonBar}>
            <button className={style.buttonAdd} onClick={clickAddStudent}>Добавить студента</button>
            <div className={style.searchInput}>
                <img src={magnifier} alt={'magnifier'} />
                <MyInput text={text} onChangeText={setText} />
            </div>
            <button className={style.addLesson} onClick={onModal}>Добавить урок</button>
            {toggle ?
                <ModalIcon
                    toggle={toggle}
                    setToggle={setToggle}
                    lessonsArr={lessonsArr}
                />
                : ''}
        </div>
    )
})
//types
type ButtonBarType = {
    addStudent: () => void
    text: string
    setText: (value: string) => void
    lessonsArr: string[]
}