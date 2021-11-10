import React from 'react';
import {initialPeople} from "../../../redux/tableReducer";

export const Grades: React.FC = () => {

    const gradesArr = initialPeople.map((s)=> s.grades.map( (g) => (
        <div>{g}</div>)))

    return(
        <div>
            {gradesArr}
        </div>
    )
}