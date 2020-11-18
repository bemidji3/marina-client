import React from "react";
import { Table as SemanticTable } from "semantic-ui-react";
import "semantic-ui-css/components/table.css";
import "./Table.scss";

function TableFooter({ as, children, ...props }) {
    return (
        <SemanticTable.Footer as={as} {...props}>
            {children}
        </SemanticTable.Footer>
    );
}

export default TableFooter;
