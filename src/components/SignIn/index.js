import React, { useState } from 'react';
import { Redirect } from 'react-router';

const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirectHome, setRedirectHome] = useState(false)
    const navigateUser = {
        name: "ABCD",
        pass: "QQQQ"
    }

    const updateValues = (e) => {
        console.log(e.target.value, e.target.name)
        e.target.name === "username" && setUsername(e.target.value);
        e.target.name === "password" && setPassword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const { name, pass } = navigateUser;
        if (name === username && pass === password) {
            setRedirectHome(true)
            window.localStorage.setItem("username", username) //window.localStorage.getItem("username")
            window.localStorage.setItem("password", password)
        }
    }

    return (<div className="d-flex justify-content-center">
        {redirectHome && <Redirect to="/" />}
        <form onSubmit={onSubmit}>
            <label>User Name</label>
            <input type="text" name="username" value={username} placeholder="Enter Username" onChange={updateValues} /><br />
            <label>Password</label>
            <input type="password" name="password" value={password} placeholder="Enter Password" onChange={updateValues} /><br />
            <input type="submit" />
        </form>
    </div>);
}

export default SignIn;