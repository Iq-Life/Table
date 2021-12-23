import React from 'react';
import style from './ModalIcon.module.scss';
import {Box, Modal, Typography} from "@mui/material";
import {MyInput} from "../others/editableSpan/inputText/MyInput";
import {Counter} from "../others/counter/Counter";


export const ModalIcon: React.FC<ModalType> = (
    {
        toggle, setToggle, nameLesson, setNameLesson
    }) => {

    const styles = {
        position: 'absolute' as 'absolute',
        display: 'flex',
        justifyContent: 'center',
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
    }

    const addLesson = () => {

        setToggle(false);
    }

    return (
        <Modal
            open={toggle}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
        >
            <Box sx={styles}>
                <div className={style.box}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Введите название урока и кол-во занятий
                    </Typography>
                    <div className={style.enter}>
                        <MyInput text={nameLesson} onChangeText={setNameLesson}/>
                        <Counter/>
                    </div>
                    <div className={style.divButtonAdd}>
                        <button className={style.buttonAdd} onClick={addLesson}>Добавить урок</button>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}
type ModalType = {
    toggle: boolean
    nameLesson: string
    setToggle: (value: boolean) => void
    setNameLesson: (value: string) => void
}
