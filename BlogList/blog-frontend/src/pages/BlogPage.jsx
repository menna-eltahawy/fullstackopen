import { useNavigate, useOutletContext, useParams, Link } from 'react-router'
import BlogCard from '../components/BlogCard'

function BlogPage() {
    const { blogs, user, likeBlog, deleteBlog } = useOutletContext()
    const { id } = useParams()
    const navigate = useNavigate()

    const blog = blogs.find((item) => item.id === id)

    if (!blog) {
        return (
            <section className="page">
                <p>Blog not found.</p>
                <Link to="/">Back to blogs</Link>
            </section>
        )
    }

    const handleDelete = async (blogId) => {
        await deleteBlog(blogId)
        navigate('/')
    }

    return (
        <section className="page">
            <Link to="/">← Back</Link>
            <BlogCard
                blog={blog}
                user={user}
                onLike={likeBlog}
                onDelete={handleDelete}
                expanded
            />
        </section>
    )
}

export default BlogPage