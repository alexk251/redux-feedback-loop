import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux';
import  { useState } from "react";
import Button from '@material-ui/core/Button';
import '../App/App.css';

function Feeling() {
    // make use dispatch accessible through 'dispatch'
    const dispatch = useDispatch();
    // make history accessible through 'history'
    const history = useHistory();

    //manages state of feeling variable
    let [feeling, setFeeling] =useState('1')

    //handles state change of radio input
    const handleChange = (event) => {

        setFeeling(
            event.target.value,
        )
    }

    //handles next button and dispatch & page change
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
                <div className='card'>
                    How are you doing today?
                    <h6>(A value must be provided)</h6>
                    <div onChange={handleChange} >
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
                    <Button onClick={addFeeling} 
                    variant="contained" 
                    color="primary">Next</Button>
                </div>
            </form>
        </>
    )

}

export default Feeling;