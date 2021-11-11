import React from 'react';
import style from './App.module.scss';
import {Footer} from "./components/footer/Footer";
import {Header} from "./components/header/Header";
import {Table} from "./components/table/Table";

function App() {
    return (
        <div className={style.App}>
            <div className={style.header}><Header/></div>
            <div className={style.body}><Table/></div>
            <footer className={style.footer}><Footer/></footer>
        </div>
    );
}

export default App;
