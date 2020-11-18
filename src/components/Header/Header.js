import React from "react";
import { Header as SemanticHeader } from "semantic-ui-react";
import classNames from "classnames";
import "semantic-ui-css/components/header.css";

function Header({ className, children, ...restProps }) {
    const extraClassName = classNames("Header ", {
        [className]: !!className,
    });
    return (
        <SemanticHeader className={extraClassName} {...restProps}>
            {children}
        </SemanticHeader>
    );
}

export default Header;