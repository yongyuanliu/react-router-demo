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
                <Route path="/expenses" element={<Expenses />} />
                <Route path="/invoices" element={<Invoices />}>
                    <Route index element={
                        <main style={{ padding: "1rem" }}>
                            <p>Select an invoice</p>
                        </main>
                    } />
                    <Route path=":invoiceId" element={
                        <ErrorBoundary>
                            <Invoice />
                        </ErrorBoundary>
                    }></Route>
                </Route>
                <Route path="*" element={<NoMatch />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>,
    reactRoot
);