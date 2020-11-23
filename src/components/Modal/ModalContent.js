import React from "react";
import { Modal as SemanticModal } from "semantic-ui-react";
import "semantic-ui-css/components/modal.css";

function ModalContent({ className, children, ...restProps }) {
    return (
        <SemanticModal.Content {...restProps}>
            {children}
        </SemanticModal.Content>
    );
}

export default ModalContent;
