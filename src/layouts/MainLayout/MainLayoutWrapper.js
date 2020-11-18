import React from "react";
import MainLayout from "./MainLayout";
import useForm from "../../lib/hooks/useForm";
import {initialValues} from "./config";

function MainLayoutWrapper(){

    const onSubmit = (data) => {
        console.log("data ", data);
        alert("pressed submit!");
    };

    const {
        formData,
        handleChange,
        simpleSubmit
    } = useForm(initialValues, onSubmit);

    return (
        <MainLayout
            formData={formData}
            handleChange={handleChange}
            onSubmit={simpleSubmit}
        />
    )
}

export default MainLayoutWrapper;
