import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Form from './Form';

const Login = (props) => {
    // let initial = localStorage.getItem("login") ? JSON.parse(localStorage.getItem("login")) : false
    // const [status, setStatus] = useState(initial);
    let navigate = useNavigate();

    if (props.status) {
        // alert("is loogged in ")
        // this.props.history.goback();
        return navigate(-1)
    }

    // return props.status ? <Navigate to="/users" /> :
    return <div>
        <h1>login...</h1>
        <Form setStatus={props.setStatus} />  // props drilling
    </div>

    // return (

    // );
}

export default Login;
