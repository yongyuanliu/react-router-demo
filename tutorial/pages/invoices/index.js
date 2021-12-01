import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "../../controller/invoices/index"

import "./invoices.css";

export default class Invoices extends React.Component {
    render() {
        let invoices = getInvoices();
        return (
            <div className="invoices">
                <nav className="invoices-list">
                    {invoices.map(invoice => (
                        <Link className="invoices-item" to={`/invoices/${invoice.number}`} key={invoice.number}>
                            {invoice.name}
                        </Link>
                    ))}
                </nav>
                <Outlet />
            </div>
        );
    }
}