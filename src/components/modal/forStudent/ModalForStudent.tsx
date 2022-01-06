import React, { useCallback, useState } from 'react';
import style from './ModalForStudent.module.scss';
import { Box, Modal, Typography } from "@mui/material";
import { MyInput } from "../../others/editableSpan/inputText/MyInput";
import { useDispatch } from 'react-redux';
import { addNewLessonAC } from '../../../redux/tableReducer';

export const ModalForStudent: React.FC<ModalType> = (
	{
		toggle, setToggle, lessonsArr
	}) => {

	const dispatch = useDispatch()

	const [firstName, setFirstName] = useState<string>('')
	const [lastName, setLastName] = useState<string>('')
	const [error, setError] = useState<string>('')

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


	const handleClose = () => {
		setToggle(null);
	}

	const addLesson = () => {
		if (firstName.trim() || lastName.trim()) {

			setToggle(null)
		}
		setError('Ввидите имя студента')

	}
	const resetError = useCallback(() => {
		if (firstName.trim() === "" || lastName.trim() === "") {
			setError("")
		}
	}, [firstName, lastName])



	return (
		<Modal
			open={!!toggle}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
		>
			<Box sx={styles}>
				<div className={style.box}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Введите Имя и Фамилию
					</Typography>
					<div className={style.inputs}>
						<div className={style.enterFirstName}>
							<MyInput
								text={firstName}
								onChangeText={setFirstName}
								error={error}
								resetError={resetError}

							/>
						</div>
						<div className={style.enterLastName}>
							<MyInput
								text={lastName}
								onChangeText={setLastName}
								error={error}
								resetError={resetError}

							/>
						</div>
					</div>
					<button className={style.buttonAdd} onClick={addLesson}>Добавить студента</button>
				</div>
			</Box>
		</Modal>
	)
}
type ModalType = {
	toggle: null | string
	lessonsArr: string[]
	setToggle: (value: null | string) => void
}