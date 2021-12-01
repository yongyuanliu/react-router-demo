import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './pages/app/index';
import Expenses from "./pages/expenses/index";
import Invoices from "./pages/invoices/index";
import Invoice from "./pages/invoices/invoice";
import NoMatch from "./pages/notmatch";
import ErrorBoundary from "./pages/error/boundary";

const reactRoot = document.querySelector("#react_root");
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index path="/expenses" element={<Expenses />}></Route>
                <Route path="/invoices" element={<Invoices />}>
                    <Route path=":invoiceId" element={
                        <ErrorBoundary>
                            <Invoice idx={123} />
                        </ErrorBoundary>
                    }></Route>
                </Route>
                <Route path="*" element={<NoMatch />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>,
    reactRoot
);