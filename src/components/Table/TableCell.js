import React from "react";
import { Table as SemanticTable } from "semantic-ui-react";
import "semantic-ui-css/components/table.css";
import "./Table.scss";

function TableCell({children, ...restProps}){
    return (
        <SemanticTable.Cell {...restProps}>{children}</SemanticTable.Cell>
    )
}

export default TableCell;
