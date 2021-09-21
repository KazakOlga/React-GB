import { SET_ERROR_STATUS,SET_IDLE_STATUS, SET_LOADING_STATUS,SET_FACTS_LIST} from '../actions/catfacts'

export const FACTS_REQUEST_STATUS = {
    LOADING: 'loading',
    ERROR: 'error',
    IDLE: 'idle',
}

const initialState = {
    list: [],
    status: FACTS_REQUEST_STATUS.IDLE,
}

export default function catsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_IDLE_STATUS:
            return {
                ...state,
                status: FACTS_REQUEST_STATUS.IDLE,
            }
        case SET_LOADING_STATUS:
            return {
                ...state,
                status: FACTS_REQUEST_STATUS.LOADING,
            }
        case SET_ERROR_STATUS:
            return {
                ...state,
                status: FACTS_REQUEST_STATUS.ERROR,
            }
        case SET_FACTS_LIST: {
            return {
                ...state,
                list: action.payload.factsList,
            }
        }
        default:
            return state
    }
}