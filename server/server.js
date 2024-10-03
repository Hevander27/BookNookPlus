import express from 'express'
import dotenv from 'dotenv'
import giftsRouter from './routes/gifts.js'

const app = express()

// Serve static files from the 'public' directory
app.use('/public', express.static('./public'))

// Serve static files from the 'scripts' directory
app.use('/scripts', express.static('./public/scripts'))

// Use the gifts router
app.use('/gifts', giftsRouter)

// Define root route
app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">BookNook API</h1>')
})

// Start the server
const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
