import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux'

function Feeling() {
    // make use dispatch accessible through 'dispatch'
    const dispatch = useDispatch();

    return (
        <>
            feeling
        </>
    )

}

export default Feeling;