import { BUTTON_CHECK, CHANGE_IS_AUTH } from "../actions/profile";

const initialState={
    showName: true,
    name: "Olga",
    age: 27,
    isAuthed: false,
}

export default function profileReducer(state=initialState,action){
switch(action.type){
    case BUTTON_CHECK:
        return {
            ...state,
            showName : !state.showName
        }
    
    case CHANGE_IS_AUTH: {
            return {
                ...state,
                isAuthed: action.payload.isAuthed,
            }
        }
    default: 
    return state
}

}