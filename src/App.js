import React from 'react';
import './App.css';
import Game from "./container/Game";
import Header from "./components/Header";

function App() {
    return (
        <div>
            <Header/>
            <div className="App">
                <Game/>
            </div>
        </div>
    );
}

export default App;
