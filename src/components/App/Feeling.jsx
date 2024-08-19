import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Feeling(){
    const dispatch = useDispatch()
    const history = useHistory();

    let [feelingRating, setFeelingRating] = useState ('')

    const handleAddFeeling = () =>{

        dispatch({
            type: 'ADD_FEELING_RATING',
            payload: feelingRating,
        })
        history.push('/understand')
        setFeelingRating('')

    }

    return (
        <>
        <h2> How well are you feeling today?</h2>
        <input
        type="number"
        data-testid="input"
        onChange={(event) => setFeelingRating(event.target.value)}
        value={feelingRating}/>
        <button
        data-testid="next"
        onClick = {handleAddFeeling}>
        NEXT </button>


        </>
    )
}

export default Feeling;