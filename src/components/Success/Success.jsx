import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux'

function Success() {
    // make use dispatch accessible through 'dispatch'
    const dispatch = useDispatch();

    return (
        <>
            Thank you
        </>
    )

}

export default Success;