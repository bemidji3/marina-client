import {omit} from "lodash";
const initialState = {
    slipData: {},
    boatData: {},
    errors: [],
};

export default function boatsReducer(state = initialState, action){
    switch(action.type) {
        case "RECEIVE_INITIAL_COLLECTION":
            console.log("data ", action);
            return {
                ...state,
                slipData: {...state.slipData, ...action.data},
                // boatData: {...state.boatData, ...action.data.boatData},
            };
        case "CREATE_BOAT_SUCCESS":
            return {
                ...state,
                boatData: {...state.boatData, ...action.data},
                slipData: {
                    ...state.slipData,
                    [action.data.slip_number]: {
                        occupied: true,
                        boat_id: action.data.boat_id
                    }
                }
            };
        case "CREATE_BOAT_FAILURE":
            return {
                ...state,
                errors: [...state.errors, {message: action.error.message} ],
            };
        case "CHANGE_SLIP_SUCCESS":
            return {
                ...state,
                boatData: {...state.boatData, ...action.data},
                slipData: {
                    ...state.slipData,
                    [action.data.old_slip_number]: {
                        occupied: false,
                        boat_id: null,
                    },
                    [action.data.new_slip_number]: {
                        occupied: true,
                        boat_id: action.data.boat_id,
                    }
                }
            };
        case "CHANGE_SLIP_FAILURE":
            return {
                ...state,
                errors: [...state.errors, {message: action.error.message} ]
            };
        case "DELETE_BOAT_SUCCESS":
            return {
                ...state,
                boatData: omit(state.boatData, action.data.boat_id),
                slipData: {
                    ...state.slipData,
                    [action.data.slip_number]: {
                        occupied: false,
                        boatId: null,
                    }
                }
            };
        case "DELETE_BOAT_FAILURE":
            return {
                ...state,
                errors: [...state.errors, {message: action.error.message} ],
            };
        default:
            return state
    }
}