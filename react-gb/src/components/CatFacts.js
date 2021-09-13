import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchFactsByAxios, setFactsList } from "../state/actions/catfacts"
import { FACTS_REQUEST_STATUS } from "../state/reducers/catfacts"


export default function CatFacts(){

    const { status, list } = useSelector((state) => state.facts)
        const dispatch = useDispatch()
    
        const loadDataByAxios = () => dispatch(fetchFactsByAxios())
        const clearData = () => dispatch(setFactsList([]))
    
        if (status === FACTS_REQUEST_STATUS.LOADING) {
            return <p>Loading...</p>
        }
        if (status === FACTS_REQUEST_STATUS.ERROR) {
            return (<div>
            <p>ERROR!!</p>
            <button onClick={loadDataByAxios}>Try again</button>
            </div>
            )
        }
        
    return (
        <div>
            
            <button onClick={loadDataByAxios}>Load Data By Axios</button>
            <button onClick={clearData}>Очистить данные</button>

            {status !== FACTS_REQUEST_STATUS.ERROR ? (
                <ol>
                    {Object.values(list).map((factsItem) => (
                        <li key={factsItem._id}>
                            <p>{factsItem.text}</p>
                        </li>
                    ))}
                </ol>
            ) : (
                <p>ERROR!!!</p>
            )}
        </div>
    )
}