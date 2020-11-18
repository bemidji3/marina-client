import React from "react";
import { Table as SemanticTable } from "semantic-ui-react";
import "semantic-ui-css/components/table.css";
import "./Table.scss";

function TableRow({ children, ...props }) {
    return <SemanticTable.Row {...props}>{children}</SemanticTable.Row>;
}

export default TableRow;
