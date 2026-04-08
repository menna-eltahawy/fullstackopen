const Blog = require('../models/blog')
const mongoose = require('mongoose')

exports.getBlogs = async (request, response) => {
  const { search, author, sortBy, order, page, limit } = request.query
  let query = {}

  if (search) {
    query.title = { $regex: search, $options: 'i' }
  }

  if (author) {
    query.author = author
  }

  let sortOptions = {}
  if (sortBy) {
    if (sortBy !== 'likes') {
      return response.status(400).json({ error: 'unsupported sort field' })
    }
    sortOptions[sortBy] = order === 'desc' ? -1 : 1
  }

  const pageNumber = Number(page) || 1
  const pageSize = Number(limit) || 10
  const skip = (pageNumber - 1) * pageSize

  const totalItems = await Blog.countDocuments(query)

  const blogs = await Blog.find(query)
    .sort(sortOptions)
    .skip(skip)
    .limit(pageSize)
    .populate('user', { username: 1, name: 1 })

  const totalPages = Math.ceil(totalItems / pageSize)

  response.json({
    blogs,
    metadata: {
      currentPage: pageNumber,
      pageSize,
      totalItems,
      totalPages
    }
  })
}

exports.createBlog = async (request, response, next) => {
  const body = request.body

  try {
    const user = request.user

    if (!user) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }

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

exports.deleteBlog = async (request, response, next) => {
  try {
    const blog = await Blog.findById(request.params.id)

    if (!blog) {
      return response.status(404).end()
    }

    const user = request.user

    if (!user || blog.user.toString() !== user.id.toString()) {
      return response.status(401).json({ error: 'only the creator can delete this blog' })
    }

    await Blog.findByIdAndDelete(request.params.id)
    response.status(204).end()
  } catch (error) {
    next(error)
  }
}