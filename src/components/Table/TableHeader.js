import React from "react";
import { Table as SemanticTable } from "semantic-ui-react";
import "semantic-ui-css/components/table.css";
import "./Table.scss";

function TableHeader({ as, fullWidth, children, ...props }) {
    return (
        <SemanticTable.Header as={as} fullWidth={fullWidth} {...props}>
            {children}
        </SemanticTable.Header>
    );
}

export default TableHeader;
