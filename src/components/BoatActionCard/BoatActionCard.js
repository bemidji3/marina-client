import React from "react";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardContent from "../Card/CardContent";
import CardMeta from "../Card/CardMeta";
import Form from "../Form";
import FormField from "../Form/FormField";
import Input from "../Input";
import Button from "../Button";
import Dropdown from "../Dropdown";
import "./BoatActionCard.scss";

function BoatActionCard({formData, handleChange, onSubmit, openSlipDropdownItems}) {
    const { color, name, length, slip_number } = formData;

    return (
        <div className="BoatActionCard">
            <Form>
                <Card>
                    <CardContent>
                        <div className="CardHeaderArea">
                            <CardHeader>Boat Actions!</CardHeader>
                            <CardMeta>Create a new Boat</CardMeta>
                        </div>
                        <FormField>
                            <Input
                                label="Name"
                                value={name}
                                onChange={(_, { value }) => {
                                    handleChange("name", value);
                                }}
                            />
                        </FormField>
                        <FormField>
                            <Input
                                label="Color"
                                value={color}
                                onChange={(_, { value }) => {
                                    handleChange("color", value);
                                }}
                            />
                        </FormField>
                        <FormField>
                            <Input
                                label="Length (ft)"
                                value={length}
                                onChange={(_, { value }) => {
                                    handleChange("length", value);
                                }}
                            />
                        </FormField>
                       <FormField>
                            {/*<Dropdown
                                label="Slip #"
                                value={slip_number}
                                items={openSlipDropdownItems}
                                onChange={(_, { value }) => handleChange("slip_number", value)}
                                selection
                            />*/}
                            <Input
                                label="Slip #"
                                value={slip_number}
                                onChange={(_, { value }) => handleChange("slip_number", value)}
                            />
                        </FormField>
                        <Button
                            onClick={() => {
                                onSubmit(formData)
                            }}
                        >
                            Create new boat!
                        </Button>
                    </CardContent>
                </Card>
            </Form>
        </div>
    )
}

export default BoatActionCard;
