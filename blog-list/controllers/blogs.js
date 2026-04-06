const Blog = require('../models/blog')
const User = require('../models/user')
const mongoose = require('mongoose')

exports.getBlogs = async (request, response) => {
  let query = {}

  if (request.query.search) {
    query.title = { $regex: request.query.search, $options: 'i' }
  }

  const blogs = await Blog.find(query).populate('user', { username: 1, name: 1 })
  response.json(blogs)
}

exports.createBlog = async (request, response, next) => {
  const body = request.body

  try {
    const user = await User.findOne()

    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes || 0,
      user: user.id
    })

    const savedBlog = await blog.save()
    
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()

    response.status(201).json(savedBlog)
  } catch (error) {
    next(error)
  }
}

exports.likeBlog = async (request, response, next) => {
  try {
    const id = request.params.id

    if (!mongoose.isValidObjectId(id)) {
      return response.status(400).json({ error: 'malformed id' })
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { $inc: { likes: 1 } },
      { new: true }
    ).populate('user', { username: 1, name: 1 })

    if (!updatedBlog) {
      return response.status(404).end()
    }

    response.json(updatedBlog)
  } catch (error) {
    next(error)
  }
}