import {combineReducers, createStore} from "redux";
import {StudentsReducer} from "./tableReducer";
//import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    StudentsReducer: StudentsReducer
})

const store = createStore(reducers)//applyMiddleware(thunkMiddleware)

export default store

export type AppStoreType = ReturnType<typeof reducers>