import React from "react";
import { Form, Input as SemanticInput } from "semantic-ui-react";
import "semantic-ui-css/components/input.css";
import classNames from "classnames";
import "./Input.scss"

function Input({ label, extraClassnames, ...inputProps }) {
    const inputClassnames = classNames("InputContainer", {
        [extraClassnames]: !!extraClassnames,
    });

    return (
        <Form.Field className="InputContainer">
            {label && <label className="InputLabel">{label}</label>}
            <SemanticInput className={inputClassnames} {...inputProps} />
        </Form.Field>
    );
}

export default Input;
