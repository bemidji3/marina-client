import React from "react";
import "./MainLayout.scss";
import BoatActionCard from "../../components/BoatActionCard";
import MarinaTable from "../../components/MarinaTable";
import Header from "../../components/Header";

function MainLayout({formData, handleChange, onSubmitNewBoat, onDeleteBoat, slipInformation, boatInformation, openSlips}){
    return (
        <div className="MainLayout">
            <Header as="h1">Welcome to Jack's Marina Manager</Header>
            <BoatActionCard
                formData={formData}
                handleChange={handleChange}
                onSubmit={onSubmitNewBoat}
                openSlipDropdownItems={openSlips}
                slipInformation={slipInformation}
            />
            <Header as="h1">View your Marina Data Below</Header>
            <MarinaTable
                onDeleteBoat={onDeleteBoat}
                openSlipDropdownItems={openSlips}
                boatInformation={boatInformation}
            />
        </div>
    )
}

export default MainLayout;
