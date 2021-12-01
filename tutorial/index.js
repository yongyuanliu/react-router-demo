import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './pages/app/index';
import Expenses from "./pages/expenses/index";
import Invoices from "./pages/invoices/index";

const reactRoot = document.querySelector("#react_root");
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/expenses" element={<Expenses />}></Route>
                <Route path="/invoices" element={<Invoices />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>,
    reactRoot
);