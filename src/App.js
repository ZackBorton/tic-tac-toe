import React from 'react';
import './App.css';
import Footer from './components/Footer'
import Game from "./components/Game";

function App() {
    return (
        <div className="App">
            <Game/>
            <Footer></Footer>
        </div>
    );
}

export default App;
