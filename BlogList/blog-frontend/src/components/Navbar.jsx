import { Link } from 'react-router'

function Navbar({ user, onLogout }) {
    return (
        <header className="navbar">
            <div className="navbar__brand">
                <Link to="/">Blog List</Link>
            </div>

            <nav className="navbar__links">
                <Link to="/">Blogs</Link>
                <Link to="/create">Create</Link>

                {user ? (
                    <>
                        <span className="navbar__user">
                            {user.name || user.username} logged in
                        </span>
                        <button className="btn btn--ghost" onClick={onLogout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </nav>
        </header>
    )
}

export default Navbar