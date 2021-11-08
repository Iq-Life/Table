import {combineReducers, createStore} from "redux";
import {StudentsReducer} from "./tableReducer";

const reducers = combineReducers({
    StudentsReducer: StudentsReducer
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>