import express, { Request, Response } from 'express'

const PORT = process.env.PORT || 3001

// App
const app = express()
app.get('/', (req: Request, res: Response) => {
  res.send('Hello world')
})

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`)
})

