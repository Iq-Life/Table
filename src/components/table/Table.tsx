import React, {useState} from 'react';
import style from './Table.module.scss'
import {
    calculationOfGradesAC,
    changeFirstNameAC, changeGradeAC,
    changeLastNameAC,
    gradType,
    sortFNameDecAC,
    sortFNameIncAC,
    sortLNameDecAC,
    sortLNameIncAC,
    StudentType
} from "../../redux/tableReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redux/Redux-store";
import {ButtonBar} from "./buttonBar/ButtonBar";
import {EditableSpanForName} from "../others/span/EditableSpanForName";
import {EditableSpanFromGrades} from "../others/span/EditableSpanFromGrades";
import {v1} from "uuid";

const lessonsArr: string[] = ['Maths', 'Physics', 'ComputerScience']

export const Table: React.FC = () => {

    const dispatch = useDispatch()
    const students = useSelector<AppStoreType, StudentType[]>(state => state.StudentsReducer)
    const [lessons, setLessons] = useState<string>(lessonsArr[0])

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
    const changeGrade = (idStudent: string, lessons: string, newGrade: gradType) => {
        dispatch(changeGradeAC(idStudent, lessons, newGrade))
    }
//calculation of grades
    const passed = () => {
        dispatch(calculationOfGradesAC(lessons))
    }


    const finalPeople = students.map((student: StudentType) => (
        <div key={student.id} className={style.rowTable}>
            <div className={style.firstName}>
                <EditableSpanForName title={student.firstName} onChangeText={(newName) => changeFirstname(student.id, newName)}/>
            </div>
            <div className={style.lastName}>
                <EditableSpanForName title={student.lastName} onChangeText={(newName) => changeLastname(student.id, newName)}/>
            </div>
            <div className={style.lesson}>
                {lessons  === 'Maths' ? 'Математика' : lessons === 'Physics' ? 'Физика' : 'Информатика'}
            </div>
            <div className={style.grades}>
                {student.grades.map((grade) =>
                    grade[lessons].map(item =>
                        <div className={style.oneGrade}>
                            <EditableSpanFromGrades item={item} onChangeText={(newGrade) => changeGrade(student.id, lessons, newGrade)}/>
                        </div>)
                )}</div>
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
            />
        </div>
    )
}