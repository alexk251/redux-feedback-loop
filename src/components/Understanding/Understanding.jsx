import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux'

function Understanding() {
    // make use dispatch accessible through 'dispatch'
    const dispatch = useDispatch();

    return (
        <>
            Understanding
        </>
    )

}

export default Understanding;