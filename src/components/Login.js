import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import ManagerLogin from './manager/ManagerLogin';


 
const Login = () => {

    const [person,setPerson] = useState('');

    const handleChange=(e)=>{
        setPerson(e.target.value);
    };
    const handleClick = () => {
        if(person==='Manager'){
            <Link to='./manager/ManagerLogin'/>
        }
        else{
            <Link to="./employee"/>
        }
        console.log(person)
    }

    return(
        <div>
            <div className='ui form'>
                <div className='grouped fields'>
                    <h2>Select your Area of Operation</h2>
                    <h4>to Login</h4>
                    <div className='field'>
                        <div className='ui radio checkbox'>
                            <input type='radio' value='Manager' name='person' onChange={handleChange}/>
                            <label>Manager</label>        
                        </div>
                    </div>
                    <div className='field'>
                        <div className='ui radio checkbox'>
                                <input type='radio' value='Employee' name='person' onChange={handleChange}/>
                                <label>Employee</label>         
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <button className='ui primary button' onClick={handleClick}>
                Next
            </button>
        </div>
    );
}

export default Login;