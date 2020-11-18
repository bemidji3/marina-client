import React from "react";
import { Form as SemanticForm } from "semantic-ui-react";
import "semantic-ui-css/components/form.css";
import classNames from "classnames";

function Form({children, extraClassNames, ...restProps}) {

    const wrappedClassNames = classNames(`Form `, {
        [extraClassNames]: !!extraClassNames,
    });

    return <SemanticForm classname={wrappedClassNames} {...restProps}>{children}</SemanticForm>;
}

export default Form;
