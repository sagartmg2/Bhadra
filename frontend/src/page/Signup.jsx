import React, { useState } from 'react';
import axios from "axios"
function Signup(props) {

    const [email, setEmail] = useState(props.email);
    const [name, setName] = useState("user s name");

    const [payload, setPayload] = useState({
        name: "name",
        email: "email@email.com",
        password: "password",
        role: "seller",
        phone: "23423",
        wod: "2",
        terms: false,
    })

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target.email.value)

        axios.post("https://mern-ecommerce70.herokuapp.com/api/users/signup", payload).then(res => {
            console.log({ res })
        }).catch(err => {
            console.log({ err })
        })
    }

    function handleChange(event) {
        // object destructiong // spread... 
    }

    return (
        <div>
            <h1>Signup Form</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name'
                        onChange={(e) => setPayload({
                            name: e.target.value
                        })}
                        value={payload.name} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email'
                        onChange={(e) => setPayload({
                            email: e.target.value
                        })}
                        value={payload.email}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">password</label>
                    <input type="password" className="form-control" id="password" name='password'
                        onChange={(e) => setEmail(e.target.value)}
                        value={payload.password} />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Role</label>
                    <select className="form-select" aria-label="Default select example" value={payload.role}>
                        <option value="buyer">Buyer</option>
                        <option value="seller">Seller</option>
                    </select>
                </div>
                <div className="mb-3">
                    <input type="checkbox" id='terms' checked={payload.terms} />
                    <label htmlFor="terms" className="form-label">agree terms and conditions</label>
                </div>
                <button type="submit" className="btn btn-primary" disabled={payload.terms ? false : true} >Submit</button>
            </form>

        </div>
    );
}

export default Signup;
