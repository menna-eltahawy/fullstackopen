import { useOutletContext } from 'react-router'
import BlogCard from '../components/BlogCard'

function BlogListPage() {
    const { blogs, user, likeBlog, deleteBlog } = useOutletContext()

    return (
        <section className="page">
            <h1>Blogs</h1>

            {blogs.length === 0 ? (
                <p>No blogs yet.</p>
            ) : (
                <div className="stack">
                    {blogs.map((blog) => (
                        <BlogCard
                            key={blog.id}
                            blog={blog}
                            user={user}
                            onLike={likeBlog}
                            onDelete={deleteBlog}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}

export default BlogListPage