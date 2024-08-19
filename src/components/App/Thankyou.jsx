import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

function Thankyou(){
    const history = useHistory()
    const handleThankyou = () => {
        history.push('/')
    }
    return(
        <>
        <header>
        Feedback!
        </header>
        <p>
        Thank you!
        </p>
        <button 
         data-testid="next"
        onClick={handleThankyou}> Leave new Feedback</button>
        </>
    )
}

export default Thankyou;