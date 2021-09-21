import { REMOVE_CHAT, ADD_CHAT } from "../actions/chats"

const initialState={}

export default function addChat(state=initialState,action){
switch(action.type){
    case ADD_CHAT: {
        return {
            ...state,
            [action.payload.id]:action.payload
        }
    }
    case REMOVE_CHAT: {
        delete state[action.payload.chatId]

        return {
            ...state,
        }
    }
    default: 
    return state
}
}