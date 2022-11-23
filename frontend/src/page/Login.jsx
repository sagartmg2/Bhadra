import React, { useState } from 'react';
import axios from "axios"
import ErrorMessage from '../component/ErrorMessage';

const Login = () => {

    /* 
            database operations CRUD
                create
                read
                update
                delete   
            
            http methods
                POST
                GET
                PUT / PATCH
                DELEET

            STATUS code
             2
                200
                // 201 - ceated...
                // 204 - created with not content
             3 - redirect  
             4
                400 - bad 
                401 - unauthencitate
                403 - forbidden / unauthorized
                404 - resource not found
            5
                500 - server error. 



    */

    const [error, setError] = useState(null)

    const [payload, setPayload] = useState({
        email: "email@email.com",
        password: "password",
    })


    function handleSubmit(event) {
        event.preventDefault()

        axios.post("https://mern-ecommerce70.herokuapp.com/api/users/login", payload).then(res => {
            console.log({ res })
        }).catch(err => {
            console.log({ err })
            if (err.response.status == 400 || err.response.status == 401 ) {
                setError(err.response.data.msg)
            }
        })
    }

    function handleChange(event) {
        // object destructiong // spread... 
        setPayload({ ...payload, [event.target.name]: event.target.value })
        // setError([...errors.filter(el => el.param != event.target.name), { param: event.target.name, msg: "" }])
    }

    return (
        <div>
            <h1>Login</h1>
            {
                error
                &&
                <div class="alert alert-danger" role="alert">
                    {error}
                </div>

            }
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email'
                        onChange={handleChange}
                        value={payload.email}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">password</label>
                    <input type="password" className="form-control" id="password" name='password'
                        onChange={handleChange}
                        value={payload.password} />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>

            </form>

        </div>
    );
}

export default Login;
