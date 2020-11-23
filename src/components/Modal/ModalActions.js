import React from "react";
import { Modal as SemanticModal } from "semantic-ui-react";
import "semantic-ui-css/components/modal.css";

function ModalActions({ className, children, ...restProps }) {
    return (
        <SemanticModal.Actions {...restProps}>
            {children}
        </SemanticModal.Actions>
    );
}

export default ModalActions;
