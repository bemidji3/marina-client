import {useDispatch, useSelector} from "react-redux";
import {createNewBoat, deleteBoat, fetchAllBoats} from "../../store/boats/actions";

const useBoats = () => {
    const dispatch = useDispatch();

    const boatInfo = useSelector(state => state.boatData);
    const slipInfo = useSelector(state => state.slipData);

    const createBoat = (boatData) => {
        return dispatch(createNewBoat(boatData));
    };

    const deleteBoatById = (boatId) => {
        return dispatch(deleteBoat(boatId))
    };

    const changeBoatSlip = (boatId, newSlip) => {

    };

    const getAllBoats = () => {
        return dispatch(fetchAllBoats());
    }

    return {
        createBoat,
        deleteBoatById,
        changeBoatSlip,
        getAllBoats,
        boatInfo,
        slipInfo,
    };
};

export default useBoats;
