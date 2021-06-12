import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router';
import {useSelector} from 'react-redux'



function Review() {

    const history = useHistory();

    //selecting varibles from the store of reducers
    const feeling = useSelector(store => store.feeling)
    const understanding = useSelector(store => store.understanding)
    const support = useSelector(store => store.support)
    const comments = useSelector(store => store.comments)

    const handleSubmit = () => {
        axios.post('/feedback', {
            feeling: feeling.feeling,
            understanding: understanding.understanding,
            support: support.support,
            comments: comments.comments
        })
        .then(response => {
            console.log(response)
            history.push('/success')
        }).catch(err => {
            console.log(err);
        })
    }
    

    return (
        <>
            <h1>Review Your Feedback</h1>
            <div>
                <p>feeling:{feeling.feeling}</p>
                <p>understanding:{understanding.understanding}</p>
                <p>support:{support.support}</p>
                <p>comments:{comments.comments}</p>
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )

}

export default Review;