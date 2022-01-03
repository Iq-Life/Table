import React, { useCallback, useState } from 'react';
import style from './ModalIcon.module.scss';
import { Box, Modal, Typography } from "@mui/material";
import { MyInput } from "../others/editableSpan/inputText/MyInput";
import { useDispatch } from 'react-redux';
import { addNewLessonAC } from '../../redux/tableReducer';

export const ModalIcon: React.FC<ModalType> = (
    {
        toggle, setToggle, lessonsArr
    }) => {

    const [count, setCount] = useState(15)
    const [nameLesson, setNameLesson] = useState<string>('')
    const [error, setError] = useState<string>('')

    let increment = () => count < 30 ? setCount(count + 1) : count
    let decrement = () => count > 10 ? setCount(count - 1) : count

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
    }

    //set newLesson and number of lessons
    const setNewLesson = (newLesson: string, NumbersOfLessons: number) => {
        console.log('new lesson = ' + newLesson)
        lessonsArr.push(newLesson)
        dispatch(addNewLessonAC({ newLesson, NumbersOfLessons }))
    }

    const dispatch = useDispatch()

    const handleClose = () => {
        setToggle(false);
    }

    const addLesson = () => {
        if (nameLesson.trim()) {
            setNewLesson(nameLesson, count)
            setToggle(false)
        } else {
            setError('Ввидите название урока')
        }
    }
    const resetError = useCallback(() => {
        if (nameLesson.trim() === "") {
            setError("")
        }
    }, [nameLesson])

    const finalDisplayClassName = count === 10 || count ===30 ? `${style.errorDisplay}`  : `${style.display}`

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
                        <MyInput
                            text={nameLesson}
                            onChangeText={setNameLesson}
                            error={error}
                            resetError={resetError}

                        />
                        <div className={style.counter}>
                            <div className={finalDisplayClassName}>{count}</div>
                            <div className={style.arrows}>
                                <button className={style.inc} onClick={increment} />
                                <button className={style.dec} onClick={decrement} />
                            </div>
                        </div>
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
    lessonsArr: string[]
    setToggle: (value: boolean) => void
}