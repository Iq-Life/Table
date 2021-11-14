import React from 'react'
import {Routes, Route,} from "react-router-dom";
import Error404 from "../pages/Error404";
import App from "../App";

export const PATH = {
    APP: '/',
    NOT_FOUND: '/page-not-found'
}

export const RoutesApp = () => {
    return (
        <div>
            <Routes>
                <Route path={PATH.APP} element={<App/>}/>
                <Route path={PATH.NOT_FOUND} element={<Error404/>}/>

                <Route element={<Error404/>}/>
            </Routes>
        </div>
    )
}