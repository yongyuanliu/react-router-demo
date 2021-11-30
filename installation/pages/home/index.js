import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
    render() {
        return (
            <>
                <main>
                    <h2>Welcome to the homepage!</h2>
                    <p>You can do this, I believe in you.</p>
                </main>
                <nav>
                    <Link to="/about">About</Link>
                </nav>
            </>
        );
    }
}