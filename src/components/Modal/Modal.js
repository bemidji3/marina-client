import React from "react";
import { Modal as SemanticModal } from "semantic-ui-react";
import classNames from "classnames";
import "semantic-ui-css/components/modal.css";

function Modal({ className, children, ...restProps }) {
    const extraClassName = classNames(`Modal`, {
        [className]: !!className,
    });
    return (
        <SemanticModal className={extraClassName} {...restProps}>
            {children}
        </SemanticModal>
    );
}

export default Modal;
