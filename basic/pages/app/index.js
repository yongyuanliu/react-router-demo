/**
 * react
 */
import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

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
                <h1>Basic Example</h1>
                <p>
                    This example demonstrates some of the core features of React Router
                    including nested <code>&lt;Route&gt;</code>s,{" "}
                    <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
                    "*" route (aka "splat route") to render a "not found" page when someone
                    visits an unrecognized URL.
                </p>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/dashboard" element={<Dashboard />}></Route>
                        <Route path="*" element={<NoMatch />}></Route>
                    </Route>
                </Routes>
            </div>
        )
    }
}

function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/nothing-here">Nothing here</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            <Outlet />
        </div>
    )
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}
function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    )
}
export default App;