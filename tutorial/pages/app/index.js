/**
 * react
 */
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

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
            <div>
                <h1>Bookkeeper</h1>
                <nav className="nav">
                    <Link to="/invoices">Invoices</Link> |{" "}
                    <Link to="/expenses">Expenses</Link>
                </nav>
                <Outlet />
            </div>
        )
    }
}

export default App;