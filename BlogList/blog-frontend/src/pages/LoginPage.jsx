import { Navigate, useNavigate, useOutletContext } from 'react-router'
import LoginForm from '../components/LoginForm'

function LoginPage() {
    const { user, handleLogin, showNotification } = useOutletContext()
    const navigate = useNavigate()

    if (user) {
        return <Navigate to="/" replace />
    }

    const login = async (credentials) => {
        try {
            await handleLogin(credentials)
            navigate('/')
        } catch  {
            showNotification('Wrong username or password', 'error')
        }
    }

    return (
        <section className="page">
            <LoginForm onLogin={login} />
        </section>
    )
}

export default LoginPage