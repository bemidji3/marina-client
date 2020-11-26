import {omit} from "lodash";
const initialState = {
    slipData: {},
    boatData: {},
    errors: [],
    isLoading: false,
};

export default function boatsReducer(state = initialState, action){
    switch(action.type) {
        case "RECEIVE_INITIAL_SLIPS_COLLECTION":
            return {
                ...state,
                slipData: {
                    ...state.slipData,
                    ...action.data
                },
            };
        case "RECEIVE_INITIAL_BOATS_COLLECTION":
            return {
                ...state,
                boatData: {
                    ...state.boatData,
                    ...action.data
                },
            };
        case "COLLECTION_FETCH_START":
            return {
                ...state,
                isLoading: true,
            };
        case "COLLECTION_FETCH_END":
            return {
                ...state,
                isLoading: false,
            };
        case "CREATE_BOAT_SUCCESS":
            console.log("action data in create boat success ", action.data);
            return {
                ...state,
                // boatData: {
                //     ...state.boatData,
                //     ...action.data
                // },
                // slipData: {
                //     ...state.slipData,
                //     [action.data.slip_number]: {
                //         occupied: true,
                //         boat_id: action.data.boat_id
                //     }
                // }
            };
        case "CREATE_BOAT_FAILURE":
            console.log("action data in create boat failure ", action.data);
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
            console.log("action in delete boat success ", action);
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