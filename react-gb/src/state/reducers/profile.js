import { BUTTON_CHECK } from "../actions/profile";

const initialState={
    showName: true,
    name: "Olga",
    age: 27
}

export default function profileReducer(state=initialState,action){
switch(action.type){
    case BUTTON_CHECK:
        return {
            ...state,
            showName : !state.showName
        }
    
    default: 
    return state
}
}