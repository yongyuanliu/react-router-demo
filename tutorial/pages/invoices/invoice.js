import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteInvoice, getInvoice } from "../../controller/invoices/index"

class Invoice extends React.Component {
    render() {
        const navigate = this.props.navigate;
        const { invoiceId } = this.props.params;
        const invoice = getInvoice(parseInt(invoiceId));
        return (
            <main className="invoice">
                <h2>Total Due:{invoice.amount}</h2>
                <p>
                    {invoice.name}:{invoice.number}
                </p>
                <p>Due Date:{invoice.due}</p>
                <p>
                    <button onClick={() => {
                        deleteInvoice(invoice.number);
                        navigate("/invoices")
                    }}>Delete</button>
                </p>
            </main>
        );
    }
}

export default (props) => (
    <Invoice {...props} params={useParams()} navigate={useNavigate()} />
);