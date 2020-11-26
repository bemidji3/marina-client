import {useDispatch, useSelector} from "react-redux";
import {createNewBoat, deleteBoat, initialFetch} from "../../store/boats/actions";

const useBoats = () => {
    const dispatch = useDispatch();

    const boatInfo = useSelector(state => {
        return (
            state.boatsReducer.boatData
        )
    } );
    const slipInfo = useSelector(state => {
        return (
            state.boatsReducer.slipData
        )
    } );


    const createBoat = (boatData) => {
        console.log("boatData ", boatData);
        return dispatch(createNewBoat(boatData));
    };

    const deleteBoatById = (boatId) => {
        return dispatch(deleteBoat(boatId))
    };

    const changeBoatSlip = (boatId, slipId) => {

    };

    const getAllBoats = () => {
        return dispatch(initialFetch());
    };

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
