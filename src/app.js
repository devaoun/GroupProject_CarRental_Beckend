const express = require('express')
require('dotenv').config()
const cors = require('cors')
const errorMiddleware = require('./middlewares/error-middleware')
const notFoundMiddleware = require('./middlewares/notFound-middleware')
const authRouter = require('./routes/auth-route')
const limiter = require('./middlewares/rate-limit')
const app = express()

app.use(cors())
app.use(express.json())
app.use(limiter)

app.use('/auth',authRouter)


app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 8000
app.listen(port , console.log('car rental server running :' , port))