export const BUTTON_CHECK = "PROFILE::BUTTON_CHECK"
export const CHANGE_IS_AUTH = "PROFILE::CHANGE_IS_AUTH"

export const buttonCheck= (showName)=>({
    type: BUTTON_CHECK,
    payload: {
        showName
    }
   
})
export const changeIsAuth=(isAuthed)=>({
    type:CHANGE_IS_AUTH,
    payload:{
        isAuthed,
    }
})