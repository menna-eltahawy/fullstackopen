import { useState } from 'react'

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        await onLogin({ username, password })
        setUsername('')
        setPassword('')
    }

    return (
        <form className="form card" onSubmit={handleSubmit}>
            <h2>Login</h2>

            <label>
                Username
                <input
                    type="text"
                    value={username}
                    onChange={({ target }) => setUsername(target.value)}
                />
            </label>

            <label>
                Password
                <input
                    type="password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                />
            </label>

            <button className="btn" type="submit">
                Login
            </button>
        </form>
    )
}

export default LoginForm