import { post, deleteRequest, get } from "../../lib/Api"

export const createBoatSuccess = (responseData) => {
    return {
        type: "CREATE_BOAT_SUCCESS",
        data: responseData,
    }
};

export const collectionFetchStart = () => {
    return {
        type: "COLLECTION_FETCH_START"
    }
};

export const collectionFetchEnd = () => {
    return {
        type: "COLLECTION_FETCH_END"
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

export const fetchAllSlipsSuccess = (responseData) => {
    return {
        type: "RECEIVE_INITIAL_SLIPS_COLLECTION",
        data: responseData,
    }
};

export const fetchAllBoatSuccess = (responseData) => {
    return {
        type: "RECEIVE_INITIAL_BOATS_COLLECTION",
        data: responseData,
    }
};


export const createNewBoat = (boatData) => dispatch => {
    const wrappedBoatData = {
        boat: {
            ...boatData,
        }
    };
    dispatch(collectionFetchStart());
    return post(`http://localhost:3000/api/v1/marinas/1/slips/${boatData.slip_id}/boats`, wrappedBoatData).then(response => {
        dispatch(createBoatSuccess(response));
        dispatch(collectionFetchEnd());
    }).catch(error => {
        dispatch(createBoatFailure(error));
        dispatch(collectionFetchEnd());
    })
};

export const deleteBoat = (boatId) => dispatch => {
    const url = `http://localhost:3000/api/v1/marinas/1/slips/1/boats/${boatId}`;
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

export const initialFetch = () => dispatch => {
    const slipUrl = "http://127.0.0.1:3000/api/v1/marinas/1/slips";
    const boatUrl = "http://127.0.0.1:3000/api/v1/marinas/1/boats";
    dispatch(collectionFetchStart());
    return get(slipUrl).then(response => {
        dispatch(fetchAllSlipsSuccess(response));
        return get(boatUrl).then(response => {
            dispatch(fetchAllBoatSuccess(response));
            dispatch(collectionFetchEnd());
        }).catch(error => {
            console.error("error on initial boat fetch: ", error);
            dispatch(collectionFetchEnd());
        })
    }).catch(error => {
        console.error("error on initial slip fetch: ", error);
        dispatch(collectionFetchEnd());
    })
};