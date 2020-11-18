import React from "react";
import { Button as SemanticButton } from "semantic-ui-react";
import classNames from "classnames";
import "semantic-ui-css/components/button.css";
import "./Button.scss";

function Button({ className, children, ...restProps }) {
    const extraClassName = classNames(`Button`, {
        [className]: !!className,
    });
    return (
        <SemanticButton className={extraClassName} {...restProps}>
            {children}
        </SemanticButton>
    );
}

export default Button;
