import { post, deleteRequest, get } from "../../lib/Api"

export const createBoatSuccess = (responseData) => {
    return {
        type: "CREATE_BOAT_SUCCESS",
        data: responseData,
    }
};

export const createBoatFailure = (error) => {
    return {
        type: "CREATE_BOAT_FAILURE",
        error,
    }
};

export const changeSlipSuccess = (responseData) => {
    return {
        type: "CHANGE_SLIP_SUCCESS",
        data: responseData,
    }
};

export const changeSlipFailure = (error) => {
    return {
        type: "CHANGE_SLIP_FAILURE",
        error,
    }
};

export const deleteBoatSuccess = (responseData) => {
    return {
        type: "DELETE_BOAT_SUCCESS",
        data: responseData,
    }
};

export const deleteBoatFailure = (error) => {
    return {
        type: "DELETE_BOAT_FAILURE",
        error,
    }
};

export const fetchAllBoatsSuccess = (responseData) => {
    return {
        type: "RECEIVE_INITIAL_COLLECTION",
        data: responseData,
    }
};


export const createNewBoat = (boatData) => dispatch => {
    return post(`http://localhost:3000/api/v1/marinas/1/slips/${boatData.slip_id}/boats`, boatData).then(response => {
        dispatch(createBoatSuccess(response))
    }).catch(error => {
        dispatch(createBoatFailure(error))
    })
};

export const deleteBoat = (boatId) => dispatch => {
    const url = `http://localhost:3000/api/v1/boats/${boatId}`;
    return deleteRequest(url).then(response =>{
        dispatch(deleteBoatSuccess(response))
    }).catch(error => {
        dispatch(deleteBoatFailure(error))
    })
};

export const updateBoatSlip = (boatId, slipId, payload) => dispatch => {
    const boatUrl = `http://localhost:3000/api/v1/boats/${boatId}`;
    const slipUrl = `http://localhost:3000/api/v1/slips/${slipId}`;


};

export const fetchAllBoats = () => dispatch => {
    const url = "http://127.0.0.1:3000/api/v1/marinas/1/slips";
    return get(url).then(response => {
        console.log("response in fetch all boats ", response);
        dispatch(fetchAllBoatsSuccess(response))
    }).catch(error => {
        console.error("error on initial fetch: ", error)
    })
};