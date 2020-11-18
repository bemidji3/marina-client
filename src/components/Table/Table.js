import React from "react";
import { Table as SemanticTable } from "semantic-ui-react";
import "semantic-ui-css/components/table.css";
import "./Table.scss";
import classNames from "classnames";

function Table({
    className,
    shadow,
    celled,
    striped,
    children,
    ...restProps
}) {
    const TableClassnames = classNames("Table ", {
        [className]: !!className,
    });

    return (
        <SemanticTable
            className={TableClassnames}
            celled={celled}
            striped={striped}
            {...restProps}
        >
            {children}
        </SemanticTable>
    );
}

export default Table;
