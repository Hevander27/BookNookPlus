import { pool } from '../config/database.js'
import '../config/dotenv.js'
import giftData from '../data/gifts.js'

const createGiftsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS gifts;

    CREATE TABLE IF NOT EXISTS gifts (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      pricePoint VARCHAR(10) NOT NULL,
      audience VARCHAR(50) NOT NULL,
      image VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      submittedBy VARCHAR(50) NOT NULL,
      submittedOn TIMESTAMP NOT NULL
    )
  `

  try {
    await pool.query(createTableQuery)
    console.log('🎉 gifts table created successfully')
  } catch (err) {
    console.error('⚠️ error creating gifts table', err)
  }
}

const seedGiftsTable = async () => {
  await createGiftsTable()

  giftData.forEach((gift) => {
    const insertQuery = {
      text: 'INSERT INTO gifts (name, pricePoint, audience, image, description, submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6, $7)'
    }

    const values = [
      gift.name,
      gift.pricePoint,
      gift.audience,
      gift.image,
      gift.description,
      gift.submittedBy,
      gift.submittedOn
    ]

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error('⚠️ error inserting gift', err)
        return
      }
      console.log(`✅ ${gift.name} added successfully`)
    })
  })
}

seedGiftsTable()
  .then(() => {
    console.log('✅ Gifts table seeded successfully')
    setTimeout(() => {
      console.log('Closing database connection...')
      pool.end()
    }, 2000)
  })
  .catch((err) => {
    console.error('⚠️ Error seeding gifts table:', err)
    pool.end()
  })