import { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'

function App() {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(() => {
    const storedUser = window.localStorage.getItem('loggedBlogUser')
    return storedUser ? JSON.parse(storedUser) : null
  })
  const [notification, setNotification] = useState(null)
  const timeoutRef = useRef(null)

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type })

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setNotification(null)
    }, 3000)
  }

  useEffect(() => {
    if (user) {
      blogService.setToken(user.token)
    }
  }, [user])

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await blogService.getAll()
        setBlogs(data.blogs.sort((a, b) => b.likes - a.likes))
      } catch (error) {
        console.error('Error fetching blogs:', error)
        showNotification('Failed to load blogs', 'error')
      }
    }

    fetchBlogs()
  }, [])

  const handleLogin = async (credentials) => {
    const loggedUser = await loginService.login(credentials)

    setUser(loggedUser)
    window.localStorage.setItem('loggedBlogUser', JSON.stringify(loggedUser))

    showNotification(`Welcome ${loggedUser.name || loggedUser.username}`)

    return loggedUser
  }

  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogUser')
    setUser(null)
    blogService.clearToken()

    showNotification('Logged out successfully')
  }

  const createBlog = async (newBlog) => {
    const createdBlog = await blogService.create(newBlog)

    setBlogs((prev) =>
      [...prev, createdBlog].sort((a, b) => b.likes - a.likes)
    )

    showNotification(`Blog "${createdBlog.title}" added`)

    return createdBlog
  }

  const likeBlog = async (id) => {
    const updatedBlog = await blogService.updateLike(id)

    setBlogs((prev) =>
      prev
        .map((blog) => (blog.id === id ? updatedBlog : blog))
        .sort((a, b) => b.likes - a.likes)
    )

    return updatedBlog
  }

  const deleteBlog = async (id) => {
    await blogService.remove(id)

    setBlogs((prev) => prev.filter((blog) => blog.id !== id))

    showNotification('Blog deleted')
  }

  return (
    <div className="app-shell">
      <Navbar user={user} onLogout={handleLogout} />

      <main className="main-container">
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
          />
        )}

        <Outlet
          context={{
            blogs,
            setBlogs,
            user,
            handleLogin,
            createBlog,
            likeBlog,
            deleteBlog,
            showNotification,
          }}
        />
      </main>
    </div>
  )
}

export default App