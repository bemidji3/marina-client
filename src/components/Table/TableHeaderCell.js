import React from "react";
import { Table as SemanticTable } from "semantic-ui-react";
import "semantic-ui-css/components/table.css";
import "./Table.scss";

function TableHeaderCell({
     as,
     children,
     ...restProps
                         }) {
    return (
        <SemanticTable.HeaderCell
            as={as}
            {...restProps}
        >
            {children}
        </SemanticTable.HeaderCell>
    );
}

export default TableHeaderCell;
