const express = require('express');
const cors = require('cors');
const staff = require('./staff')
const PORT = 5000;

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}))

app.use(express.json())

app.get('/staff', (req, res) => {
    res.send(staff)
})

app.post('/submitForm',(req,res)=>{
    const data = req.body
    res.status(200).send(`Details submitted!, ${JSON.stringify(data)}`)
})

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`)
})