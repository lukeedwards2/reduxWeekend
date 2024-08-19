import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Comments(){
    const history = useHistory()
    const dispatch = useDispatch()
    let [commentRating, setCommentRating] = useState ('')
    const handleCommentRating=()=>{
        
        dispatch({
            type: 'ADD_COMMENTS_RATING',
            payload: commentRating,
        })
         history.push('/review')
         setCommentRating('')
    }
    return (
        <>
        <h2> Any comments you want to leave?</h2>
        <input
        type="text"
        data-testid="input"
        onChange={(event) => setCommentRating(event.target.value)}
        value={commentRating}
        placeholder="enter comment here"/>
        <button
        data-testid="next"
        onClick = {handleCommentRating}>
        NEXT </button>
        </>
    )
}

export default Comments;