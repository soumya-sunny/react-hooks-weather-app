import { API_SUCCESS, API_FAILURE } from "../actionTypes";

const initialState={forecasts:[]};

const rootReducer=(state=initialState, action)=>{
    const {type, payload} = action;
switch (type) {
    case API_SUCCESS:
        return {
            ...state,
           forecasts: payload.list
        }
        case API_FAILURE:
            return {
                ...state,
                error: payload
            }
        default:
            return state;
}
}

export default rootReducer;