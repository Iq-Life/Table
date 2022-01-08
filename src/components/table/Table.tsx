import React, { useState } from 'react';
import style from './Table.module.scss'
import {
	addNewLessonAC, StateType,
	addStudentAC, calculationOfGradesAC, changeFirstNameAC, changeGradeAC, changeLastNameAC,
	removeStudentAC, resettingFinalAssessmentAC, sortFNameDecAC, sortFNameIncAC, sortLNameDecAC,
	sortLNameIncAC, StudentType
} from "../../redux/tableReducer";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../../redux/redux-store";
import { TableHeader } from "./tableHeader/TableHeader";
import { ButtonBar } from "./buttonBar/ButtonBar";
import { EditableSpanForName } from "../others/editableSpan/EditableSpanForName";
import { EditableSpanFromGrades } from "../others/editableSpan/EditableSpanFromGrades";
import { getStepLabelUtilityClass } from '@mui/material';

export const Table: React.FC = React.memo(() => {

	const state = useSelector<AppStoreType, StateType>(state => state.StudentsReducer)
	const dispatch = useDispatch()

	let lessonsArr: string[] = []
	for (let i = 0; i < state.lessons.length; i++) {
		lessonsArr.push(state.lessons[i].name);
	}

	const [lessons, setLessons] = useState<string>(lessonsArr[0])   //for select, current lesson
	const [toggle, setToggle] = useState<boolean>(false)
	const [text, setText] = useState<string>('')    //for input, search to first and last name

	//add and remove student
	const addStudent = (firstName: string, lastName: string) => {
		dispatch(addStudentAC({ firstName, lastName }))
	}
	const removeStudent = (idStudent: string) => {
		dispatch(removeStudentAC({ idStudent }))
	}
	//change first and last name
	const changeFirstname = (id: string, fName: string) => {
		dispatch(changeFirstNameAC({ id, value: fName }))
	}
	const changeLastname = (id: string, lName: string) => {
		dispatch(changeLastNameAC({ id, value: lName }))
	}
	//change grade
	const changeGrade = (idStudent: string, idGrade: string, lessons: string, newGrade: string | number) => {
		dispatch(changeGradeAC({ idStudent, idGrade, lessons, newGrade }))
	}
	//sort first and last Name
	const sortFNameDec = () => {
		dispatch(sortFNameDecAC())
	}
	const sortFNameInc = () => {
		dispatch(sortFNameIncAC())
	}
	const sortLNameDec = () => {
		dispatch(sortLNameDecAC())
	}
	const sortLNameInc = () => {
		dispatch(sortLNameIncAC())
	}
	//calculation of grades
	const passed = () => {
		dispatch(calculationOfGradesAC({ lessons }))
	}
	//set lessons and resetting finalAssessment
	const setLessonAndResettingFinalAssessment = (value: string) => {
		setLessons(value)
		dispatch(resettingFinalAssessmentAC())
	}
	//!
	//set newLesson and number of lessons
	//const setNewLesson = (newLesson:string, NumbersOfLessons: number) => {
	//  lessonsArr.push(newLesson)
	//dispatch(addNewLessonAC({newLesson, NumbersOfLessons}))
	//}

	const filterByName = state.students.filter(student => text ?
		(student.firstName + student.lastName).toLowerCase().includes(text.toLowerCase())
		: student
	)

	const finalPeople = filterByName.map((student: StudentType) => {
		const fnClNameForFnAssessment = student.finalAssessment ?
			`${style.finalAssessmentBody}` : `${style.finalAssessmentRed}`
		return (
			<div key={student.id} className={style.rowTable}>
				<button className={style.buttonRemove} onClick={() => removeStudent(student.id)}>
					X
				</button>
				<div className={style.firstNameBody}>
					<EditableSpanForName title={student.firstName}
						onChangeText={(newName) => changeFirstname(student.id, newName)} />
				</div>
				<div>
					<EditableSpanForName title={student.lastName}
						onChangeText={(newName) => changeLastname(student.id, newName)} />
				</div>
				<div>
					{lessons}
				</div>

				<div className={style.gradesBody}>
					{student.grades[lessons].map(grade =>
						<div className={style.oneGrade} key={grade.id}>
							<EditableSpanFromGrades item={grade.value} onChangeText={(newGrade) =>
								changeGrade(student.id, grade.id, lessons, newGrade)} />
						</div>
					)}
				</div>
				<div className={fnClNameForFnAssessment}>{student.finalAssessment === null ? ' ' :
					student.finalAssessment ? 'зачёт' : 'нет'}
				</div>
			</div>
		)
	})

	return (
		<div className={style.table}>
			<TableHeader toggle={toggle}
				setText={setText}
				setToggle={setToggle}
				calculationOfGrades={passed}
				sortFNameDec={sortFNameDec}
				sortFNameInc={sortFNameInc}
				sortLNameDec={sortLNameDec}
				sortLNameInc={sortLNameInc}
				lessonsArr={lessonsArr}
				setLessons={setLessonAndResettingFinalAssessment}
			/>
			{toggle ?
				<ButtonBar
					addStudent={addStudent}
					text={text}
					setText={setText}
					lessonsArr={lessonsArr}
				/>
				: ''}
			<div className={style.bodyTable}>
				{finalPeople}
			</div>

		</div>
	)
})