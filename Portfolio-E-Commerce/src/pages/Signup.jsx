import React from 'react'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

 function SignUp() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })
    async function handleSubmit(e) {
        e.preventDefault()
        navigate('/')
        const response = await fetch(`http://localhost:4005/api/Users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        const data = await response.json()

        if (response.status === 200) {
            
        } else {
            setErrorMessage(data.message)
        }
    }

    return (
    <form className="main__login" onSubmit={handleSubmit}>
    <div className="row">
        <div className="form-text-title">
            <label htmlFor="name"  style={{ display: "block", marginBottom: "5px" }} >Your name</label>
            <input
                type="name"
                required
                value={user.name}
                onChange={e => setUser({ ...user, name: e.target.value })}
                className="form-text-box"
                id="name"
                name="name"
            />
        </div>
        <div className="form-text-title">
            <label htmlFor="email"  style={{ display: "block", marginBottom: "5px" }} >Email</label>
            <input
                type="email"
                required
                value={user.email}
                onChange={e => setUser({ ...user, email: e.target.value })}
                className="form-text-box"
                id="email"
                name="email"
            />
        </div>
        <div className="form-text-title">
            <label htmlFor="password"  style={{ display: "block", marginBottom: "5px", }}>Password</label>
            <input
                type="password"
                required
                value={user.password}
                onChange={e => setUser({ ...user, password: e.target.value })}
                className="form-text-box"
                id="password"
                name="password"
            />
        </div>
    </div>
    <input className="btn btn-primary" type="submit" value="SignUp" />
</form>
  )
}
export default SignUp