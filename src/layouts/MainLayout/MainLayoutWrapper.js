import React from "react";
import MainLayout from "./MainLayout";
import useForm from "../../lib/hooks/useForm";
import {initialValues} from "./config";
import useBoats from "../../lib/hooks/useBoats";
import {pickBy, isEmpty} from "lodash";

function MainLayoutWrapper(){

    const {
        createBoat,
        deleteBoatById,
        boatInfo,
        slipInfo,
    } = useBoats();

    const onSubmitNewBoat = (data) => {
        createBoat(data);
        resetForm();
    };

    const onDeleteBoat = (boatId) => {
        deleteBoatById(boatId);
    };

    const {
        formData,
        handleChange,
        simpleSubmit,
        resetForm,
    } = useForm(initialValues, onSubmitNewBoat);

    const validSlips = !isEmpty(slipInfo) && pickBy(slipInfo, (key) => {
        return !key.occupied
    });


    return (
        <MainLayout
            formData={formData}
            handleChange={handleChange}
            onSubmitNewBoat={simpleSubmit}
            onDeleteBoat={onDeleteBoat}
            slipInformation={slipInfo}
            openSlips={validSlips}
            boatInformation={boatInfo}
        />
    )
}

export default MainLayoutWrapper;
