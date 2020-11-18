import { useState } from "react";
import { isUndefined } from "lodash";

const useForm = (initialValues, submit) => {
    const [formData, setValues] = useState(initialValues.formData);

    const simpleSubmit = (clientData) => {
        setValues(clientData);
        submit(clientData);
    };

    const handleChange = (name, value) => {
        if (isUndefined(value)) {
            // eslint-disable-next-line no-console
            console.error(
                `This form is not working properly: value for ${name} is undefined`
            );
        } else {
            setValues((formData) => ({
                ...formData,
                [name]: value,
            }));
        }
    };

    const resetForm = () => {
        setValues(initialValues.formData);
    };

    return {
        formData,
        handleChange,
        resetForm,
        simpleSubmit,
    };
};

export default useForm;
