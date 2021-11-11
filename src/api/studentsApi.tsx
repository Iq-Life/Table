/*import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://School-table.com/',
    withCredentials: true,
    headers: {
        "API-KEY": "d9baecdc-1ca4-440c-8d10-aee3256853c8"
    }
})

export const studentsAPI = {
    getStudents(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post<APIResponseType>(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete<APIResponseType>(`follow/${userId}`)
            .then(response => response.data)
    }
}
//types*/
import React from 'react'

export const a = () => {
    return <div></div>
}