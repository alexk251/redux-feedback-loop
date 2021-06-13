import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux';
import Button from '@material-ui/core/Button';
import '../App/App.css'

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
        <div className='card'>
            <h2>Thank you</h2>
            <br />
            <br />
            <Button onClick={reset}
            variant="contained" 
            color="primary">Leave New Feedback</Button>
        </div>
    )

}

export default Success;