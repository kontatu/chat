import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const SignUp = () => {
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        firebase.auth().createUseWithEmailAndPasswoed(email, password)
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        name='email'
                        type='email'
                        id='email'
                        placeholder='Email'
                        value={email}
                        onChange={e => {
                            setEmail(e.terget.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        name='password'
                        type='password'
                        id='password'
                        placeholder='Password'
                        value="password"
                        onChange={e => {
                            setPassword(e.terget.value)
                        }}
                    />
                </div>
                <button type='submit'>Sign Up</button>
            </form>
            <Link to="/login">login</Link>
        </div>
    )
}

export default SignUp