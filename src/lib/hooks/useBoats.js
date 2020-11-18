import {useState} from "react";
import { post, get, put, deleteRequest, patch } from "../Api";

const useBoats = (initialBoatData) => {
    const [boatData, setBoatData] = useState(initialBoatData);

    const createNewBoat = (boatData) => {

    };

    const deleteBoat = (boatId) => {

    };

    const changeBoatSlip = (boatId, newSlip) => {

    };

    const getAllBoats = () => {

    };

    const getMarinaData = () => {

    };

    return {
        createNewBoat,
        deleteBoat,
        changeBoatSlip,
        getAllBoats,
        boatData,
    };
};

export default useBoats;
