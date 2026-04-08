const express = require('express')
const router = express.Router()
const blogsController = require('../controllers/blogs')
const middleware = require('../utils/middleware')

router.get('/', blogsController.getBlogs)
router.post('/', middleware.userExtractor, blogsController.createBlog)
router.patch('/:id/like', blogsController.likeBlog)
router.delete('/:id', middleware.userExtractor, blogsController.deleteBlog)

module.exports = router