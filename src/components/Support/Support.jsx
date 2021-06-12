import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux'

function Support() {
    // make use dispatch accessible through 'dispatch'
    const dispatch = useDispatch();

    return (
        <>
            Support
        </>
    )

}

export default Support;