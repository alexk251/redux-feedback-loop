import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router';
import { useSelector ,useDispatch } from 'react-redux';
import { useState } from "react";
import Button from '@material-ui/core/Button';
import '../App/App.css';


function Review() {

    // make use dispatch accessible through 'dispatch'
    const dispatch = useDispatch();
    // make history accessible through 'history'
    const history = useHistory();

    //selecting varibles from the store of reducers
    const feeling = useSelector(store => store.feeling)
    const understanding = useSelector(store => store.understanding)
    const support = useSelector(store => store.support)
    const comments = useSelector(store => store.comments)

    //holds states for conditional renders for updating reducer values
    const [updateFeeling,setUpdateFeeling] = useState('1');
    const [UpdateUnderstanding, setUpdateUnderstanding] = useState('1');
    const [updateSupport,setUpdateSupport] = useState('1');
    const [updateComments,setUpdateComments] = useState('');
    //holds states for toggling conditional renders of inputs
    const [toggleFeeling,setToggleFeeling] =useState(true);
    const [toggleUnderstanding,setToggleUnderstanding] =useState(true);
    const [toggleSupport,setToggleSupport] = useState(true);
    const [toggleComments,setToggleComments] =useState(true);

    //handles state change of radio input
    const handleFeelingChange = (event) => {

        setUpdateFeeling(
            event.target.value,
        )
    }

    //handles state change of radio input
    const handleUnderstandingChange = (event) => {

        setUpdateUnderstanding(
            event.target.value,
        )
    }

        //handles state change of radio input
    const handleSupportChange = (event) => {

        setUpdateSupport(
            event.target.value,
        )
    }

        //handles state change of radio input
        const handleCommentsChange = (event) => {

            setUpdateComments(
                event.target.value,
            )
        }
    

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

    const toggleUpdateFeeling = () => {
        event.preventDefault();
        dispatch({
            type: 'ADD_FEELING',
            payload: updateFeeling
        })
        setToggleFeeling(!toggleFeeling);
    }

    const toggleUpdateUnderstanding = () => {
        event.preventDefault();
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: UpdateUnderstanding
        })
        setToggleUnderstanding(!toggleUnderstanding);
    }

    const toggleUpdateSupport = () => {
        event.preventDefault();
        dispatch({
            type: 'ADD_SUPPORT',
            payload: updateSupport
        })
        setToggleSupport(!toggleSupport);
    }

    const toggleUpdateComments = () => {
        event.preventDefault();
        dispatch({
            type: 'ADD_COMMENTS',
            payload: updateComments
        })
        setToggleComments(!toggleComments);
    }

    return (
        <div className='card'>
            <h1>Review Your Feedback</h1>
            <div>
            {toggleFeeling ?
                <>
                <p>Feeling:{feeling.feeling}</p>
                <Button onClick={toggleUpdateFeeling}
                variant="contained" 
                color="primary">Update Feeling</Button>
                </>
                :
                <form>
                        How are you doing today?
                    <h6>(A value must be provided)</h6>
                        <div onChange={handleFeelingChange}>
                            <label>
                                <input

                                    name='feelingvalue'
                                    type='radio'
                                    value='1'
                                    defaultChecked 
                                />
                    1
                    </label>
                            <label>
                                <input

                                    name='feelingvalue'
                                    type='radio'
                                    value='2'
                                />
                    2
                    </label>
                            <label>
                                <input

                                    name='feelingvalue'
                                    type='radio'
                                    value='3'
                                />
                    3
                    </label>
                            <label>
                                <input

                                    name='feelingvalue'
                                    type='radio'
                                    value='4'
                                />
                    4
                    </label>
                            <label>
                                <input

                                    name='feelingvalue'
                                    type='radio'
                                    value='5'
                                />
                    5
                    </label>
                        </div>
                        <Button onClick={toggleUpdateFeeling}
                        variant="contained" 
                        color="primary">Finalize Feeling</Button>
                </form>
}
            {toggleUnderstanding ?
            <>
                    <p>Understanding:{understanding.understanding}</p>
                    <Button onClick={toggleUpdateUnderstanding}
                    variant="contained" 
                    color="primary">Update Understanding</Button>
            </>
                    :
                <form>
                        How well are you understanding the content?
                    <h6>(A value must be provided)</h6>
                        <div onChange={handleUnderstandingChange}>
                            <label>
                                <input

                                    name='understandingvalue'
                                    type='radio'
                                    value='1'
                                    defaultChecked 
                                />
                    1
                    </label>
                            <label>
                                <input

                                    name='understandingvalue'
                                    type='radio'
                                    value='2'
                                />
                    2
                    </label>
                            <label>
                                <input

                                    name='understandingvalue'
                                    type='radio'
                                    value='3'
                                />
                    3
                    </label>
                            <label>
                                <input

                                    name='understandingvalue'
                                    type='radio'
                                    value='4'
                                />
                    4
                    </label>
                            <label>
                                <input

                                    name='understandingvalue'
                                    type='radio'
                                    value='5'
                                />
                    5
                    </label>
                        </div>
                        <Button onClick={toggleUpdateUnderstanding}
                        variant="contained" 
                        color="primary">Finalize Understanding</Button>
                </form>
}
                {toggleSupport ?
                <>
                    <p>Support:{support.support}</p>
                    <Button onClick={toggleUpdateSupport}
                    variant="contained" 
                    color="primary">Update Support</Button>
                </>
                    :
                    <form>
                    <div>
                    How well are you being supported?
                    <h6>(A value must be provided)</h6>
                    <div onChange={handleSupportChange}>
                    <label>
                    <input 
                    
                    name='supportvalue'
                    type='radio'
                    value='1'
                    defaultChecked
                    />
                    1
                    </label>
                    <label>
                    <input 
                    
                    name='supportvalue'
                    type='radio'
                    value='2'
                    />
                    2
                    </label>
                    <label>
                    <input 
                    
                    name='supportvalue'
                    type='radio'
                    value='3'
                    />
                    3
                    </label>
                    <label>
                    <input 
                    
                    name='supportvalue'
                    type='radio'
                    value='4'
                    />
                    4
                    </label>
                    <label>
                    <input 
                    
                    name='supportvalue'
                    type='radio'
                    value='5'
                    />
                    5
                    </label>
                    </div>
                    </div>
                    <Button onClick={toggleUpdateSupport}
                    variant="contained" 
                    color="primary">Finalize Support</Button>
                    </form>
}
                {toggleComments ?
                <>
                    
                    <p>Comments:{comments.comments}</p> 
                    <Button onClick={toggleUpdateComments} 
                    variant="contained" 
                    color="primary">Update Comments</Button>
                </>
                    :
                    <form>
                    <div>
                    Do you have any comments?
                    <br/>
                    <div onChange={handleCommentsChange}>
                    <input type='text' />
                    </div>
                    </div>
                    <Button onClick={toggleUpdateComments} 
                    variant="contained" 
                    color="primary">Finalize Comments</Button>
            </form>
                }
            </div>
            <br />
                {toggleFeeling && toggleUnderstanding && toggleSupport && toggleComments 
                ?  <Button onClick={handleSubmit}
                variant="contained" 
                color="primary">Submit</Button> : ''}
        </div>
    )

}

export default Review;