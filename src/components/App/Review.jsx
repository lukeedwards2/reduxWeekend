import { useSelector } from "react-redux"
import axios from "axios"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

function Review(){
 const history = useHistory()
 const feeling = useSelector(store => store.feelingRating)   
 const understandRating = useSelector(store => store.undestandRating) 
 const supportedRating = useSelector(store => store.supportedRating) 
 const commentsRating = useSelector(store => store.commentsRating) 

 const postReview =()=>{

    const allReview = {
        feeling: feeling,
        understanding: understandRating,
        support: supportedRating,
        comments: commentsRating
    };
    axios.post('/api/feedback', allReview)
        .then(response =>{
            console.log('Feedback posted successfully:', response);
        })
        .catch(err=>{
            console.error('Error in post order', err)
        })

  }

  const historyClick = () => {
    history.push('/thankyou')

  }

  const handleBoth = () =>{
    historyClick()
    postReview()
    
  }

    return(
    <>
    <h2> Review Your Feedback</h2>
   <p> Feelings: {feeling}</p>
    <p> Understanding: {understandRating}</p>
    <p> Support: {supportedRating} </p>
    <p> Comments:{commentsRating} </p>

    <button 
    data-testid="next"
    onClick={handleBoth}>  SUBMIT </button>

    </>
    )
}

export default Review