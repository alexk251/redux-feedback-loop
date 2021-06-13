import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux';
import  { useState } from "react";

function Comments() {
    // make use dispatch accessible through 'dispatch'
    const dispatch = useDispatch();
    // make history accessible through 'history'
    const history = useHistory();

    return (
        <>
            Comments
        </>
    )

}

export default Comments;