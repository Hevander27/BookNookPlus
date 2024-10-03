import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
//import giftData from '../data/gifts.js'
import GiftsController from '../controllers/gifts.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

// Route to get all gifts as JSON
//router.get('/', (req, res) => {
//  res.status(200).json(giftData)
//})

// Add the new route using GiftsController
router.get('/', GiftsController.getGifts)

// Route to get individual gift data as JSON
router.get('/:giftId/data', (req, res) => {
  const giftId = parseInt(req.params.giftId)
  const gift = giftData.find(g => g.id === giftId)
  if (gift) {
    res.status(200).json(gift)
  } else {
    res.status(404).json({ message: 'Gift not found' })
  }
})

// Route to serve the gift details page (HTML)
router.get('/:giftId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
})

export default router


