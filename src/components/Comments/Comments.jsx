import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux'

function Comments() {
    // make use dispatch accessible through 'dispatch'
    const dispatch = useDispatch();

    return (
        <>
            Comments
        </>
    )

}

export default Comments;