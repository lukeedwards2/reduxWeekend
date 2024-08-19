import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Understand(){
 const history = useHistory()   
 const dispatch = useDispatch()    
let [understandRating,setUnderstandRating] = useState('')  

  const handleAddUnderstand = () =>{
   
    dispatch({
        type: 'ADD_UNDERSTAND_RATING',
        payload: understandRating,
    })
    history.push('/supported')
    setUnderstandRating('')

    }
   
    return (
        <>
        <h2> How well are you understanding the content?</h2>
        <input
        type="number"
        data-testid="input"
        onChange={(event) => setUnderstandRating(event.target.value)}
        value={understandRating}/>
        <button
        data-testid="next"
         onClick = {handleAddUnderstand}>
         NEXT </button>
        </>
    )
}

export default Understand;