const express = require('express');
const cors = require('cors');
const staff = require('./staff');
// const { sendMail } = require('./mailer')
// const Visitor = require('./model/visitorModel')
const dbconnect = require('./dbConnection/dbConnect');
const submitData = require('./controller/visitorsController');

const PORT = 5000;

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}))

app.use(express.json())
dbconnect();

app.get('/staff', (req, res) => {
    res.send(staff)
})


app.post('/submitForm', (req,res)=>{
    const data = req.body.data
    submitData(data);
    // console.log('submit form called')
    res.status(200).send(`Mail sent to ${data.came_to_meet}`)
})

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`)
})