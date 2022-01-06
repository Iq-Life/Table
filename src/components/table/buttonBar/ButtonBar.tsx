import React, { useState } from 'react';
import style from "./ButtonBar.module.scss";
import magnifier from "../../../icon/loupe_icon.png";
import { MyInput } from "../../others/editableSpan/inputText/MyInput";
import { ModalForLesson } from "../../modal/forLesson/ModalForLesson";
import { ModalForStudent } from "../../modal/forStudent/ModalForStudent";

export const ButtonBar: React.FC<ButtonBarType> = React.memo((
	{
		addStudent, text, setText, lessonsArr
	}) => {
	const toggleFor = ['student', 'lesson']
	const [toggle, setToggle] = useState<null | string>(null)

	const onModalForLesson = () => {
		setToggle('lesson')
	}
	const onModalForStudent = () => {
		setToggle('student')
	}



	return (

		<div className={style.buttonBar}>
			<button className={style.buttonAdd} onClick={onModalForStudent}>
				Добавить студента
			</button>
			{toggle === 'student' ?
				<ModalForStudent
					addStudent={addStudent}
					toggle={toggle}
					setToggle={setToggle}
					lessonsArr={lessonsArr}
				/>
				: ''}
			<div className={style.searchInput}>
				<img src={magnifier} alt={'magnifier'} />
				<MyInput text={text} onChangeText={setText} />
			</div>
			<button className={style.addLesson} onClick={onModalForLesson}>Добавить урок</button>
			{toggle === 'lesson' ?
				<ModalForLesson
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
	addStudent: (firstName: string, lastName: string) => void
	text: string
	setText: (value: string) => void
	lessonsArr: string[]
}