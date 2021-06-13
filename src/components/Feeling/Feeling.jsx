import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux';
import  { useState } from "react";

function Feeling() {
    // make use dispatch accessible through 'dispatch'
    const dispatch = useDispatch();
    // make history accessible through 'history'
    const history = useHistory();

    //manages state of feeling variable
    let [feeling, setFeeling] =useState('')

    //handles state change of radio input
    const handleChange = (event) => {

        setFeeling(
            event.target.value,
        )
    }

    const addFeeling = (event) => {
        event.preventDefault();
        
        dispatch({
            type: 'ADD_FEELING',
            payload: feeling
        })

        history.push('/understanding')
    }

    return (
        <>
            <form>
                <div>
                    How are you doing today?
                    <br/>
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
                    <button onClick={addFeeling}>Next</button>
                </div>
            </form>
        </>
    )

}

export default Feeling;