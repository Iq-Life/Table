import React, {useState} from 'react';
import style from './Table.module.scss'
import {
    addStudentAC,
    calculationOfGradesAC,
    changeFirstNameAC,
    changeGradeAC,
    changeLastNameAC, removeStudentAC,
    sortFNameDecAC,
    sortFNameIncAC,
    sortLNameDecAC,
    sortLNameIncAC,
    StudentType
} from "../../redux/tableReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redux/Redux-store";
import {ButtonBar} from "./buttonBar/ButtonBar";
import {EditableSpanForName} from "../others/editableSpan/EditableSpanForName";
import {EditableSpanFromGrades} from "../others/editableSpan/EditableSpanFromGrades";

const lessonsArr: string[] = ['maths', 'physics', 'computerScience']

export const Table: React.FC = () => {

    const dispatch = useDispatch()
    const students = useSelector<AppStoreType, StudentType[]>(state => state.StudentsReducer)
    const [lessons, setLessons] = useState<string>(lessonsArr[0])

//add and remove student
    const addStudent = () => {
        dispatch(addStudentAC())
    }
    const removeStudent = (idStudent: string) => {
      dispatch(removeStudentAC(idStudent))
    }
//change first and last name
    const changeFirstname = (id: string, fName: string) => {
        dispatch(changeFirstNameAC(id, fName))
    }
    const changeLastname = (id: string, lName: string) => {
        dispatch(changeLastNameAC(id, lName))
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
//change grade
    const changeGrade = (idStudent: string, idGrade:string, lessons: string, newGrade: string|number) => {
        dispatch(changeGradeAC(idStudent, idGrade, lessons, newGrade))
    }
//calculation of grades
    const passed = () => {
        dispatch(calculationOfGradesAC(lessons))
    }


    const finalPeople = students.map((student: StudentType) => (
        <div key={student.id} className={style.rowTable}>
            <button className={style.buttonRemove} onClick={()=>{removeStudent(student.id)}}>X</button>
            <div className={style.firstName}>
                <EditableSpanForName title={student.firstName} onChangeText={(newName) => changeFirstname(student.id, newName)}/>
            </div>
            <div className={style.lastName}>
                <EditableSpanForName title={student.lastName} onChangeText={(newName) => changeLastname(student.id, newName)}/>
            </div>
            <div className={style.lesson}>
                {lessons  === 'maths' ? 'Математика' : lessons === 'physics' ? 'Физика' : 'Информатика'}
            </div>
            <div className={style.grades}>
                {student.grades[lessons].map(grade =>
                        <div className={style.oneGrade} key={grade.id}>
                            <EditableSpanFromGrades item={grade.value} onChangeText={(newGrade) =>
                                changeGrade(student.id, grade.id, lessons, newGrade)}/>
                        </div>)
                }</div>
            <div className={style.finalAssessment}>{student.finalAssessment === null ? ' ' :
                student.finalAssessment === true ? 'зачёт' : 'нет'}</div>
        </div>
    ))

    return (
        <div className={style.table}>
            <div>
                <div className={style.header}>
                    <div className={style.firstName}>Имя</div>
                    <div className={style.lastName}>Фамилия</div>
                    <div className={style.lesson}>Предмет</div>
                    <div className={style.grades}>Оценки/посещаемость</div>
                    <div className={style.finalAssessment}>Зачёт</div>
                </div>
            </div>
            <div className={style.bodyTable}>
                {finalPeople}
            </div>
            <ButtonBar sortFNameDec={sortFNameDec}
                       sortFNameInc={sortFNameInc}
                       sortLNameDec={sortLNameDec}
                       sortLNameInc={sortLNameInc}
                       lessonsArr={lessonsArr}
                       setLessons={setLessons}
                       calculationOfGrades={passed}
                       addStudent={addStudent}
            />
        </div>
    )
}