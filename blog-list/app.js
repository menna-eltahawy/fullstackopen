const config = require('./utils/config')
const express = require('express')
const app = express()
const blogRoutes = require('./routes/blogRoutes')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

mongoose.connect(config.MONGODB_URI)
  .then(() => console.log('connected to MongoDB'))
  .catch((error) => console.log('error connecting to MongoDB:', error.message))

app.use(express.json())

app.use('/api/blogs', blogRoutes)

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})