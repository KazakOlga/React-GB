
import { API_URL } from '../../components/App/constants'
import transport from '../../transport'

export const SET_FACTS_LIST = 'NEWS::SET_FACTS_LIST'
export const SET_ERROR_STATUS = 'NEWS::SET_ERROR_STATUS'
export const SET_LOADING_STATUS = 'NEWS::SET_LOADING_STATUS'
export const SET_IDLE_STATUS = 'NEWS::SET_IDLE_STATUS'

export const setErrorStatus = () => ({ type: SET_ERROR_STATUS })

export const setLoadingStatus = () => ({ type: SET_LOADING_STATUS })

export const setIdleStatus = () => ({ type: SET_IDLE_STATUS })

export const setFactsList = (factsList) => ({
    type: SET_FACTS_LIST,
    payload: {
        factsList,
    },
})

export const fetchFactsByAxios = () => {
    return async (dispatch, getState) => {
        dispatch(setLoadingStatus())

        try {
            const { data } = await transport.get(API_URL)

            dispatch(setIdleStatus())
            dispatch(setFactsList(data))
        } catch (error) {
            console.error('error', error)

            dispatch(setErrorStatus())
        }
    }
}