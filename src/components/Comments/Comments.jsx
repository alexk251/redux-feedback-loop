import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux';
import  { useState } from "react";

function Comments() {
    // make use dispatch accessible through 'dispatch'
    const dispatch = useDispatch();
    // make history accessible through 'history'
    const history = useHistory();


    //manages state of comments variable
    let [comments, setComments] =useState('')

    //handles state change of text input
    const handleChange = (event) => {

        setComments(
            event.target.value,
        )
    }

    //handles next button and dispatch & page change
    const addComments = (event) => {
        event.preventDefault();
        
        dispatch({
            type: 'ADD_COMMENTS',
            payload: comments
        })

        history.push('/review')
    }
    return (
        <>
            <form>
                <div>
                    Do you have any comments?
                    <br/>
                    <div onChange={handleChange}>
                    <input type='text' />
                    </div>
                    <br/>
                    <button onClick={addComments}>Next</button>
                </div>
            </form>
        </>
    )

}

export default Comments;