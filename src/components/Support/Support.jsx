import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux';
import  { useState } from "react";
import Button from '@material-ui/core/Button';
import '../App/App.css';

function Support() {
    // make use dispatch accessible through 'dispatch'
    const dispatch = useDispatch();
    // make history accessible through 'history'
    const history = useHistory();

    //manages state of support variable
    let [support, setSupport] =useState('1')

    //handles state change of radio input
    const handleChange = (event) => {

        setSupport(
            event.target.value,
        )
    }

    //handles next button and dispatch & page change
    const addSupport = (event) => {
        event.preventDefault();
        
        dispatch({
            type: 'ADD_SUPPORT',
            payload: support
        })

        history.push('/comments')
    }

    return (
        <>
            <form>
                <div className='card'>
                    How well are you being supported?
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
                    <Button onClick={addSupport}
                    variant="contained" 
                    color="primary">Next</Button>
                </div>
            </form>
        </>
    )

}

export default Support;