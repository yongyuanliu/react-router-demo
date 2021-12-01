import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { getInvoices } from "../../controller/invoices/index"

import "./invoices.css";

export default class Invoices extends React.Component {
    render() {
        let invoices = getInvoices();
        return (
            <div className="invoices">
                <nav className="invoices-list">
                    {invoices.map(invoice => (
                        <NavLink className={({ isActive }) => isActive ? "invoices-item active" : "invoices-item"}
                            to={`/invoices/${invoice.number}`}
                            key={invoice.number}>
                            {invoice.name}
                        </NavLink>
                    ))}
                </nav>
                <Outlet />
            </div>
        );
    }
}