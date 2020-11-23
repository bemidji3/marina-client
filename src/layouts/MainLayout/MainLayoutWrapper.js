import React from "react";
import MainLayout from "./MainLayout";
import useForm from "../../lib/hooks/useForm";
import {initialValues} from "./config";
import useBoats from "../../lib/hooks/useBoats";
import {pickBy} from "lodash";

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

    const validSlips = pickBy(slipInfo, (key) => {
        return !slipInfo[key].occupied;
    });

    // const openSlipDropdownItems = validSlips.map(slip => {
    //     return {
    //         text: `Slip Number ${slip.id}`,
    //         value: slip.id,
    //     }
    // });

    return (
        <MainLayout
            formData={formData}
            handleChange={handleChange}
            onSubmitNewBoat={simpleSubmit}
            onDeleteBoat={onDeleteBoat}
            slipInformation={slipInfo}
            openSlips={[]}
            boatInformation={boatInfo}
        />
    )
}

export default MainLayoutWrapper;
