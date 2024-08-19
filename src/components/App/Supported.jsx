import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Supported(){
const history = useHistory()    
const dispatch = useDispatch()
 let [supportRating,setSupportRating] = useState ('')

    const hanldeSupportRating = () => {
        dispatch({
            type: 'ADD_SUPPORTED_RATING',
            payload: supportRating,
        })
        history.push('/comments')
        setSupportRating('')
    }
    
    return (
        <>
        <h2> How well are you being supported</h2>
        <input
        type="number"
        data-testid="input"
        onChange={(event) => setSupportRating(event.target.value)}
        value={supportRating}/>
        <button
        data-testid="next"
        onClick = {hanldeSupportRating} >
         NEXT </button>
        </>
    )
}

export default Supported;