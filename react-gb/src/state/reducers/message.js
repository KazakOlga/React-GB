import { ADD_MESSAGE } from "../actions/message"
import AUTHORS from "../../components/App/constants"

const initialState={}

export default function addMessage(state=initialState,action){
switch(action.type){
    case ADD_MESSAGE:{
        return {
            ...state,
            [action.payload.chatId]:[
                ...state[action.payload.chatId]||[],
                action.payload.message
            ]
        }
    }
    default: 
    return state
}
}