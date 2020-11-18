import React from "react";
import "./MainLayout.scss";
import BoatActionCard from "../../components/BoatActionCard";
import MarinaTable from "../../components/MarinaTable";
import Header from "../../components/Header";

function MainLayout({formData, handleChange, onSubmit, slipInformation}){
    return (
        <div className="MainLayout">
            <BoatActionCard
                formData={formData}
                handleChange={handleChange}
                onSubmit={onSubmit}
            />
            <Header as="h1">View your Marina Data Below</Header>
            <MarinaTable />
        </div>
    )
}

export default MainLayout;
