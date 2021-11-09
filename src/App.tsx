import React from 'react';
import s from './App.module.scss';
import {Footer} from "./components/footer/Footer";
import {Header} from "./components/header/Header";
import {Table} from "./components/table/Table";

function App() {
    return (
        <div className={s.App}>
            <Header/>
            <div className={s.body}>
                <Table/>
            </div>
            <footer className={s.footer}><Footer/></footer>
        </div>
    );
}

export default App;
