import React from "react";
import { Card as SemanticCard } from "semantic-ui-react";
import "semantic-ui-css/components/card.css";

function CardMeta({children, ...restProps}){

    return (
        <SemanticCard.Meta {...restProps}>
            {children}
        </SemanticCard.Meta>
    );
}

export default CardMeta;
