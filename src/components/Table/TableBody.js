import React from "react";
import { Table as SemanticTable } from "semantic-ui-react";
import "semantic-ui-css/components/table.css";
import "./Table.scss";

function TableBody({ children, ...props }) {
    return (
        <SemanticTable.Body {...props}>
            {children}
        </SemanticTable.Body>
    );
}

export default TableBody;
