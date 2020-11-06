import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js'
import cors from 'cors'

// App config
const app = express()
const PORT =process.env.PORT || 8001
const connect_url = 'mongodb+srv://admin:Mb2eTpZLOjavQKL2@cluster0.jkxr1.mongodb.net/tinderdb?retryWrites=true&w=majority'

// Middlewares
app.use(express.json())
app.use(cors())

// DB config
mongoose.connect(connect_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

// API endpoints
app.get('/', (req, res) => res.status(200).send('Hello World!'))
app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

// Listener
app.listen(PORT, () => console.log(`listening on localhost: ${PORT}...`))