import React from "react";
import { Card as SemanticCard } from "semantic-ui-react";
import "semantic-ui-css/components/card.css";

function CardContent({children, ...restProps}){

    return (
        <SemanticCard.Content {...restProps}>
            {children}
        </SemanticCard.Content>
    );
}

export default CardContent;
