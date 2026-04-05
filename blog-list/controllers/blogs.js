const Blog = require('../models/blog')

exports.getBlogs = (request, response) => {
  Blog.find({}).then(blogs => {
    response.json(blogs)
  })
}

exports.createBlog = (request, response, next) => {
  const blog = new Blog(request.body)
  blog.save()
    .then(result => {
      response.status(201).json(result)
    })
    .catch(error => next(error))
}