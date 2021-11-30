/**
 * react
 */
import React from 'react';

/**
 * react router plugin
 */
import { Routes, Route } from 'react-router-dom';

import About from '../about';
import Home from '../home';

import "../../assets/variable.css";
import "./app.css";

/**
 * Application
 * 
 * register router
 * showin first page
 */
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Welcome to React Router</h1>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </div>
        )
    }s
}

export default App;