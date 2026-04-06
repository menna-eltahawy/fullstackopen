const express = require('express')
const router = express.Router()
const blogsController = require('../controllers/blogs')

router.get('/', blogsController.getBlogs)
router.post('/', blogsController.createBlog)
router.patch('/:id/like', blogsController.likeBlog)

module.exports = router