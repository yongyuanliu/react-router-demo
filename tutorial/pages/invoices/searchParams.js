import React from "react";
import { useSearchParams, NavLink, Outlet } from "react-router-dom";
import { getInvoices } from "../../controller/invoices/index"

import "./invoices.css";

class Invoices extends React.Component {
    render() {
        let invoices = getInvoices();
        let [searchParams, setSearchParams] = this.props.params;
        return (
            <div className="invoices">
                <nav className="invoices-list">
                    <label htmlFor="filter">name: </label>
                    <input id="filter" value={searchParams.get("filter") || ""}
                        onChange={event => {
                            let filter = event.target.value;
                            if (filter) {
                                setSearchParams({ filter });
                            }
                        }} />
                    <label htmlFor="number">number:</label>
                    {/* <input id="number" value={searchParams.get("number") || ""}
                        onChange={event => {
                            let number = event.target.value;
                            if (number) {
                                setSearchParams({ number });
                            }
                        }} /> */}
                    {invoices
                        .filter(invoice => {
                            let filter = searchParams.get("filter");
                            if (!filter) {
                                return true;
                            }
                            let name = invoice.name.toLowerCase();
                            return name.startsWith(filter.toLowerCase());
                        })
                        // .filter(invoice => {
                        //     let number = searchParams.get("number");
                        //     if (!number) {
                        //         return true;
                        //     }
                        //     return number.startsWith(invoice.number.toString().toLowerCase());
                        // })
                        .map(invoice => (
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



export default (props) => (
    <Invoices {...props} params={useSearchParams()} />
);