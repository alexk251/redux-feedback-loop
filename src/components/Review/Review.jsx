import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux'
import { useState } from "react";


function Review() {

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
        setToggleFeeling(!toggleFeeling);
    }

    const toggleUpdateUnderstanding = () => {
        setToggleUnderstanding(!toggleUnderstanding);
    }

    const toggleUpdateSupport = () => {
        setToggleSupport(!toggleSupport);
    }

    const toggleUpdateComments = () => {
        setToggleComments(!toggleComments);
    }

    return (
        <>
            <h1>Review Your Feedback</h1>
            <div>
            {toggleFeeling ?
                <>
                <p>Feeling:{feeling.feeling}</p>
                <button onClick={toggleUpdateFeeling}>Update Feeling</button>
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
                        <button onClick={toggleUpdateFeeling}>Finalize Feeling</button>
                </form>
}
            {toggleUnderstanding ?
            <>
                    <p>Understanding:{understanding.understanding}</p>
                    <button onClick={toggleUpdateUnderstanding}>Update Understanding</button>
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
                        <button onClick={toggleUpdateUnderstanding}>Finalize Understanding</button>
                </form>
}
                {toggleSupport ?
                <>
                    <p>Support:{support.support}</p>
                    <button onClick={toggleUpdateSupport}>Update Support</button>
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
                    <button onClick={toggleUpdateSupport}>Finalize Support</button>
                    </form>
}
                {toggleComments ?
                <>
                    
                    <p>Comments:{comments.comments}</p> 
                    <button onClick={toggleUpdateComments}>Update Comments</button>
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
                    <button onClick={toggleUpdateComments}>Finalize Comments</button>
            </form>
                }
            </div>
            <br />
                {toggleFeeling && toggleUnderstanding && toggleSupport && toggleComments ?  <button onClick={handleSubmit}>Submit</button> : ''}
        </>
    )

}

export default Review;