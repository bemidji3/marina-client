import React from "react";
import { Card as SemanticCard } from "semantic-ui-react";
import "semantic-ui-css/components/card.css";

function CardHeader({children, ...restProps}){

    return (
        <SemanticCard.Header {...restProps}>
            {children}
        </SemanticCard.Header>
    );
}

export default CardHeader;
