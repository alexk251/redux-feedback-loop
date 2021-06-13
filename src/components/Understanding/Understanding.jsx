import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux';
import  { useState } from "react";

function Understanding() {
    // make use dispatch accessible through 'dispatch'
    const dispatch = useDispatch();
    // make history accessible through 'history'
    const history = useHistory();

    //manages state of understanding variable
    let [understanding, setUnderstanding] =useState('1')

    //handles state change of radio input
    const handleChange = (event) => {

        setUnderstanding(
            event.target.value,
        )
    }
    //handles next button and dispatch & page change
    const addUnderstanding = (event) => {
        event.preventDefault();
        
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understanding
        })

        history.push('/support')
    }

    return (
        <>
            <form>
                <div>
                    How well are you understanding the content?
                    <h6>(A value must be provided)</h6>
                    <div onChange={handleChange}>
                    <label>
                    <input 
                    
                    name='value'
                    type='radio'
                    value='1'
                    defaultChecked
                    />
                    1
                    </label>
                    <label>
                    <input 
                    
                    name='value'
                    type='radio'
                    value='2'
                    />
                    2
                    </label>
                    <label>
                    <input 
                    
                    name='value'
                    type='radio'
                    value='3'
                    />
                    3
                    </label>
                    <label>
                    <input 
                    
                    name='value'
                    type='radio'
                    value='4'
                    />
                    4
                    </label>
                    <label>
                    <input 
                    
                    name='value'
                    type='radio'
                    value='5'
                    />
                    5
                    </label>
                    </div>
                    <br/>
                    <button onClick={addUnderstanding}>Next</button>
                </div>
            </form>
        </>
    )

}

export default Understanding;