import React, { useState } from 'react';
import ApiManager from '../modules/ApiManager'

const AccountForm = props => {
    const [credentials, setCredentials] = useState({ username: '', email: '', password: '' })

    const handleFieldChange = e => {
        const stateToChange = { ...credentials }
        stateToChange[e.target.id] = e.target.value
        setCredentials(stateToChange)
    }

    const constructNewUser = e => {
        e.preventDefault()
        ApiManager.getByProperty('users', 'username', credentials.username)
            .then(data => {
                console.log(data)
                if (data.length > 0) {
                    window.alert('Username taken. Please try another username or log in if you already have an account.')
                } else {
                    ApiManager.post('users', credentials)
                        .then(() => props.history.push('/'))
                }
            })
    }

    const handleLogin = e => {
        e.preventDefault()
        ApiManager.getByProperty('users', 'username', credentials.username)
            .then(data => {
                if (data.length > 0) {
                    console.log('data', data, 'creds', credentials)
                    if (data[0].email === credentials.email && data[0].password === credentials.password) {
                        props.setUser(credentials)
                        props.history.push('/')
                    } else {
                        window.alert('Incorrect email or password. Please try again.')
                    }
                } else {
                    window.alert('No username found. Please try again or create an account.')
                }
            })
    }

    return (
        <>
            <h3>Please log in to continue</h3>
            <form>
                <fieldset>

                    <label htmlFor="inputUsername">Username</label>
                    <input type="text" required onChange={handleFieldChange} id="username" placeholder="username"></input>

                    <label htmlFor="inputEmail">Email</label>
                    <input type="email" required onChange={handleFieldChange} id="email" placeholder="email"></input>

                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" required onChange={handleFieldChange} id="password" placeholder="password"></input>

                    <button type="button" onClick={constructNewUser}>Create Account</button>
                    <button type="button" onClick={handleLogin}>Log In</button>
                    
                </fieldset>
            </form>
        </>
    )
}

export default AccountForm