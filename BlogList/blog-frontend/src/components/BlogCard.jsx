import { useState } from 'react'
import { Link } from 'react-router'

function BlogCard({ blog, user, onLike, onDelete, expanded = false }) {
    const [visible, setVisible] = useState(expanded)

    const ownerId =
        typeof blog.user === 'object' && blog.user !== null
            ? blog.user.id
            : blog.user

    const isOwner = user && String(ownerId) === String(user.id)

    return (
        <article className="blog-card card">
            <div className="blog-card__top">
                <div>
                    <h3>{blog.title}</h3>
                    <p>{blog.author}</p>
                </div>

                {!expanded && (
                    <button
                        className="btn btn--small btn--ghost"
                        onClick={() => setVisible((current) => !current)}
                    >
                        {visible ? 'Hide' : 'View'}
                    </button>
                )}
            </div>

            {visible && (
                <div className="blog-card__details">
                    <p>
                        <strong>URL:</strong>{' '}
                        <a href={blog.url} target="_blank" rel="noreferrer">
                            {blog.url}
                        </a>
                    </p>

                    <p>
                        <strong>Likes:</strong> {blog.likes}
                    </p>

                    <div className="blog-card__actions">
                        {user && (
                            <button className="btn btn--small" onClick={() => onLike(blog.id)}>
                                Like
                            </button>
                        )}

                        {isOwner && (
                            <button
                                className="btn btn--small btn--danger"
                                onClick={() => onDelete(blog.id)}
                            >
                                Delete
                            </button>
                        )}

                        <Link className="btn btn--small btn--ghost" to={`/blogs/${blog.id}`}>
                            Open page
                        </Link>
                    </div>
                </div>
            )}
        </article>
    )
}

export default BlogCard