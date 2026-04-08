import { createBrowserRouter } from 'react-router'
import App from './App'
import BlogListPage from './pages/BlogListPage'
import LoginPage from './pages/LoginPage'
import BlogPage from './pages/BlogPage'
import CreateBlogPage from './pages/CreateBlogPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <BlogListPage />,
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'create',
                element: <CreateBlogPage />,
            },
            {
                path: 'blogs/:id',
                element: <BlogPage />,
            },
        ],
    },
])

export default router