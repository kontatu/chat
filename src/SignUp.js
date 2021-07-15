import React from 'react'

import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        name='email'
                        type='email'
                        id='email'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        name='password'
                        type='password'
                        id='password'
                        placeholder='Password'
                    />
                </div>
                <button type='submit'>Sign Up</button>
            </form>
            <Link to="/login">login</Link>
        </div>
    )
}

export default SignUp