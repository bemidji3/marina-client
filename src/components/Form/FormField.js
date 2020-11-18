import React from "react";
import { Form as SemanticForm } from "semantic-ui-react";
import "semantic-ui-css/components/form.css";

function FormField({children, ...restProps}) {

    return <SemanticForm.Field {...restProps}>{children}</SemanticForm.Field>;
}

export default FormField;
