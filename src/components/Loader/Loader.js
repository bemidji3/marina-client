import React from "react";
import { Loader as SemanticLoader } from "semantic-ui-react";
import "semantic-ui-css/components/loader.css";
import classNames from "classnames";

function Loader({children, extraClassnames, ...restProps}){
    const extraClassName = classNames(`Loader `, {
        [extraClassnames]: !!extraClassnames,
    });

    return (
        <SemanticLoader className={extraClassName}>
            {children}
        </SemanticLoader>
    );
}

export default Loader;
