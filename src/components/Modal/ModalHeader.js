import React from "react";
import { Modal as SemanticModal } from "semantic-ui-react";
import "semantic-ui-css/components/modal.css";

function ModalHeader({ className, children, ...restProps }) {
    return (
        <SemanticModal.Header {...restProps}>
            {children}
        </SemanticModal.Header>
    );
}

export default ModalHeader;
