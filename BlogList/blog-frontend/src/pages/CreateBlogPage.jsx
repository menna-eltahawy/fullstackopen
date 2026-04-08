import { Navigate, useNavigate, useOutletContext } from 'react-router'
import BlogForm from '../components/BlogForm'

function CreateBlogPage() {
    const { user, createBlog } = useOutletContext()
    const navigate = useNavigate()

    if (!user) {
        return <Navigate to="/login" replace />
    }

    const handleCreate = async (blogData) => {
        const createdBlog = await createBlog(blogData)
        navigate(`/blogs/${createdBlog.id}`)
    }

    return (
        <section className="page">
            <BlogForm onCreate={handleCreate} />
        </section>
    )
}

export default CreateBlogPage