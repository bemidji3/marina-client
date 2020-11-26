import React, {useState, useEffect} from "react";
import Table from "../Table/Table";
import TableRow from "../Table/TableRow";
import TableCell from "../Table/TableCell";
import TableHeaderCell from "../Table/TableHeaderCell";
import TableBody from "../Table/TableBody";
import TableHeader from "../Table/TableHeader";
import Modal from "../Modal";
import Button from "../Button";
import Dropdown from "../Dropdown";
import {Modal as SemanticModal} from "semantic-ui-react";
import "semantic-ui-css/components/button.css";
import { boatSlips, COLUMN_HEADERS } from "./config"
import {createDropdownItems} from "../BoatActionCard/config";
import "./MarinaTable.scss";

const MarinaTableHeaders = () => {
    return (
        <TableHeader>
            <TableRow>
                {COLUMN_HEADERS.map((header, index) => {
                    return (
                        <TableHeaderCell
                            key={index}
                            {...header}
                        >
                            {header.title}
                        </TableHeaderCell>
                    )
                })}
            </TableRow>
        </TableHeader>
    )
};

const BoatActions = ({openSlipItems, boatData, boatId, handleBoatDelete, handleSlipChange}) => {
    const [open, setOpen] = useState(false);
    const [newSlipValue, setNewSlipValue] = useState(boatData.slip_id);
    const slipDropdownItems = createDropdownItems(openSlipItems);

    const handleBoatDeleteWrapper = () => {
        handleBoatDelete(boatId);
        setOpen(false);
    };

    const handleSlipChangeWrapper = (boatId, slipId) => {
        handleSlipChange(boatId, slipId);
        setOpen(false);
    };

    useEffect(() => {
        console.log("new slip value ", newSlipValue);
    }, [newSlipValue]);

    return (
        <div>
            <Modal
                className="BoatModal"
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button primary>Click to view this boat</Button>}
            >
                <SemanticModal.Header>
                    Order Details
                </SemanticModal.Header>
                <SemanticModal.Content>
                    <div className="BoatModalContent" >
                        <div className="BoatInfo">
                            <p>Name: {boatData.boat_name}</p>
                            <p>ID: {boatData.boat_id}</p>
                            <p>Color: {boatData.boat_color}</p>
                            <p>Length (ft): {boatData.boat_length}</p>
                            <p>Slip Number: {boatData.slip_number}</p>
                        </div>
                        <div className="BoatActions">
                            <Dropdown
                                label="Change slip number"
                                value={newSlipValue}
                                items={slipDropdownItems}
                                onChange={(_, {value}) => setNewSlipValue(value.id)}
                            />
                            <Button
                                content="Confirm slip change"
                                labelPosition='right'
                                icon='redo'
                                onClick={() => setOpen(false)}
                                primary
                            />
                            <Button
                                content="Delete this Boat"
                                labelPosition='right'
                                icon='delete'
                                onClick={handleBoatDeleteWrapper}
                                negative
                            />
                        </div>
                    </div>
                </SemanticModal.Content>
                <SemanticModal.Actions>
                    <Button
                        content="Close"
                        labelPosition='right'
                        icon='checkmark'
                        onClick={() => setOpen(false)}
                        positive
                    />
                </SemanticModal.Actions>
            </Modal>
        </div>
    )
};

function MarinaTable({boatSlips = boatSlips, allSlips, handleBoatDelete, handleSlipChange}){
    return (
        <Table celled striped className="MarinaTable">
            <MarinaTableHeaders />
            <TableBody>
                {boatSlips && Object.keys(boatSlips).map((key, index)  => {
                    const slip = boatSlips[key];
                    const boat = slip.boat;
                    return (
                        <TableRow key={index}>
                            <TableCell>
                                <p>{slip.id}</p>
                            </TableCell>
                            <TableCell>
                                {boat ? boat.name : "NO BOAT FOUND"}
                            </TableCell>
                            <TableCell>
                                {boat ? boat.color : "NO BOAT FOUND"}
                            </TableCell>
                            <TableCell>
                                {boat ? boat.length : "NO BOAT FOUND"}
                            </TableCell>
                            <TableCell>
                                {boat ? (<BoatActions allSlips={allSlips} openSlipItems={boatSlips} handleBoatDelete={handleBoatDelete} handleSlipChange={handleSlipChange} boatId={boat.id} boatData={boat}/>) : "NO BOAT FOUND"}
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}

export default MarinaTable;
