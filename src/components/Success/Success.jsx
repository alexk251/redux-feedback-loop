import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux'

function Success() {
    // make use dispatch accessible through 'dispatch'
    const dispatch = useDispatch();

    // make history accessible through 'history'
    const history = useHistory();

    const reset = () => {
        dispatch({type:'SUBMITTED'})
        history.push('/')
    }

    return (
        <>
            Thank you
            <br />
            <button onClick={reset}>Leave New Feedback</button>
        </>
    )

}

export default Success;