export const BUTTON_CHECK = "PROFILE::BUTTON_CHECK"

export const buttonCheck= (showName)=>({
    type: BUTTON_CHECK,
    payload: {
        showName
    }
   
})