/*import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://School-table.com/',
    withCredentials: true,
    headers: {
        "API-KEY": "d9ba4coc-1ca4-440c-8b10-aee3236853c8"
    }
})

export const studentsAPI = {
    getStudents(currentPage = 1, pageSize = 10) {
        return instance.get(`students?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    getGrades(studentId: number, lessons: string) {
        return instance.get<APIResponseType>(`grades`)
            .then(response => response.data)
    },
    updateGrade(studentId: number, gradeId, lessons: string) {
        return instance.post<APIResponseType>(`grades/${studentId}/${lessons}/${gradeId}`)
            .then(response => response.data)
    }
}
//types
APIResponseType = {}
*/

import React from 'react'

export const a = () => {
    return <div></div>
}