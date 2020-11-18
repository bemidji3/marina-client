import React, { useState, useEffect } from "react";
import { Dropdown as SemanticDropdown } from "semantic-ui-react";
import classNames from "classnames";
import "semantic-ui-css/components/dropdown.css";
import "./Dropdown.scss";

function Dropdown({ className, items, value, onChange, children, label, ...restProps }) {
    const extraClassName = classNames(`Dropdown`, {
        [className]: !!className,
    });

    const [displayValue, setDisplayValue] = useState(value);

    useEffect(() => {
        if (value !== displayValue) {
            console.log("changing display value ", value);
            setDisplayValue(value);
        }
    }, [value]);

    const handleChange = (event, { options, value }) => {
        const itemSelected = options.find((item) => item.value === value);
        if (onChange) onChange(event, itemSelected);
    };

    return (
        <div className="DropdownContainer">
            {label && <label className="DropdownLabel">{label}</label>}
            <SemanticDropdown options={items} onChange={handleChange} className={extraClassName} value={displayValue} {...restProps}>
                {children}
            </SemanticDropdown>
        </div>
    );
}

export default Dropdown;
