const config = require('./utils/config')
const express = require('express')
const app = express()
const blogRoutes = require('./routes/blogRoutes')
const userRoutes = require('./routes/userRoutes')
const loginRouter = require('./controllers/login')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

mongoose.connect(config.MONGODB_URI)
  .then(() => console.log('connected to MongoDB'))
  .catch((error) => console.log('error connecting to MongoDB:', error.message))

app.use(express.json())
app.use(middleware.tokenExtractor)

app.use('/api/blogs', blogRoutes)
app.use('/api/users', userRoutes)
app.use('/api/login', loginRouter)

app.use(middleware.errorHandler)

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})