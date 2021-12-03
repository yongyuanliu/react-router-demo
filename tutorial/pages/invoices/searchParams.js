import React from "react";
import { useSearchParams, NavLink, Outlet } from "react-router-dom";
import { getInvoices } from "../../controller/invoices/index"

import "./invoices.css";

class Invoices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            matchs: {
                filter: "",
                number: ""
            }
        }
    }
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
                            let matchs = this.state.matchs;
                            matchs.filter = filter;
                            this.setState({ matchs });
                            setSearchParams(matchs, { replace: true });
                        }} />
                    <label htmlFor="number">number:</label>
                    <input id="number" value={searchParams.get("number") || ""}
                        onChange={event => {
                            let number = event.target.value;
                            let matchs = this.state.matchs;
                            matchs.number = number;
                            this.setState({ matchs });
                            setSearchParams(matchs, { replace: true });
                        }} />
                    {invoices
                        .filter(invoice => {
                            let filter = searchParams.get("filter");
                            if (!filter) {
                                return true;
                            }
                            let name = invoice.name.toLowerCase();
                            return name.startsWith(filter.toLowerCase());
                        })
                        .filter(invoice => {
                            let number01 = searchParams.get("number");
                            if (!number01) {
                                return true;
                            }
                            let number = invoice.number.toString().toLowerCase();
                            return number.startsWith(number01.toLowerCase());
                        })
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