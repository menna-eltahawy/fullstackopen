import { useState } from 'react'

function BlogForm({ onCreate }) {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        await onCreate({ title, author, url, likes: 0 })
        setTitle('')
        setAuthor('')
        setUrl('')
    }

    return (
        <form className="form card" onSubmit={handleSubmit}>
            <h2>Create new blog</h2>

            <label>
                Title
                <input
                    type="text"
                    value={title}
                    onChange={({ target }) => setTitle(target.value)}
                />
            </label>

            <label>
                Author
                <input
                    type="text"
                    value={author}
                    onChange={({ target }) => setAuthor(target.value)}
                />
            </label>

            <label>
                URL
                <input
                    type="url"
                    value={url}
                    onChange={({ target }) => setUrl(target.value)}
                />
            </label>

            <button className="btn" type="submit">
                Save blog
            </button>
        </form>
    )
}

export default BlogForm