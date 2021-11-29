import {combineReducers} from "redux";
import {StudentsReducer} from "./tableReducer";
import {configureStore} from "@reduxjs/toolkit";
//import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    StudentsReducer: StudentsReducer
})

//const store = createStore(reducers)//applyMiddleware(thunkMiddleware)
export const store = configureStore({
    reducer: reducers,
})
export default store

export type AppStoreType = ReturnType<typeof reducers>