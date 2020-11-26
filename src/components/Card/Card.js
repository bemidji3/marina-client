import React from "react";
import { Card as SemanticCard } from "semantic-ui-react";
import "semantic-ui-css/components/card.css";
import classNames from "classnames";

function Card({children, extraClassnames, ...restProps}){
    const extraClassName = classNames(`Card `, {
        [extraClassnames]: !!extraClassnames,
    });

    return (
        <SemanticCard className={extraClassName} {...restProps}>
            {children}
        </SemanticCard>
    );
}

export default Card;
