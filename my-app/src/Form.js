import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { AuthContext } from './App';
import { setLoginStatus } from './redux/slice/authSlice';


const Form = (props) => {
    const auth = useContext(AuthContext);
    console.log({ auth })
    const dispatch = useDispatch();


    return (
        <div>
            <input />
            <input />
            <button onClick={() => {
                // setStatus(true)
                // props.setStatus(true)
                localStorage.setItem("login", JSON.stringify(true))
                dispatch(setLoginStatus(true))
                auth.setStatus(true)
            }}>login</button>



        </div>
    );
}

export default Form;
