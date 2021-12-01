import React from "react";
import { useParams } from "react-router-dom";
import { getInvoice } from "../../controller/invoices/index"

class Invoice extends React.Component {
    render() {
        const { invoiceId } = this.props.params;
        const invoice = getInvoice(parseInt(invoiceId));
        return (
            <main className="invoice">
                <h2>Total Due:{invoice.amount}</h2>
                <p>
                    {invoice.name}:{invoice.number}
                </p>
                <p>Due Date:{invoice.due}</p>
            </main>
        );
    }
}

export default (props) => (
    <Invoice {...props} params={useParams()} />
);