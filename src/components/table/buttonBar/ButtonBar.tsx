import React, {useState} from 'react';
import style from "./ButtonBar.module.scss";
import magnifier from "../../../icon/loupe_icon.png";
import {MyInput} from "../../others/editableSpan/inputText/MyInput";
import {Box, Modal, Typography} from "@mui/material";
import {Counter} from "../../others/counter/Counter";

export const ButtonBar: React.FC<ButtonBarType> = React.memo((
    {
        addStudent, text, setText, setNameLesson, nameLesson
    }) => {

    const [toggle, setToggle] = useState<boolean>(false)

    const styles = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #1976d2',
        boxShadow: 24,
        p: 4,
    };

    const handleClose = () => {
        setToggle(false);
    };

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
                    <Modal
                        open={toggle}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={styles}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Введите название урока и кол-во занятий
                            </Typography>
                            <MyInput text={nameLesson} onChangeText={setNameLesson}/>
                            <Counter/>
                        </Box>
                    </Modal>
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