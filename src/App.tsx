import React from 'react';
import './App.css';
import {Menu} from "./components/menu/Menu";
import {Footer} from "./components/footer/Footer";
import {TableForm} from "./components/table/Table";


function App() {
    return (
        <div className="App">
            <Menu/>
            <div className="body"><TableForm/></div>
            <footer className="footer"><Footer/></footer>
        </div>
    );
}

export default App;
