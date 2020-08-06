const express = require('express')
const app = express();
const cors = require('cors')


//datebase
const mongoDB = require('./config/db')
mongoDB();


//CROSS ORGIGIN
app.use(cors())

//setting up the port
const port = process.env.PORT || 5000;


//Parsing incoming Date
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))


//middleware Route
app.use('/auth', require('./routes/auth'))
app.use('/register', require('./routes/register'))
app.use('/forgot', require('./routes/forgot'))
app.use('/reset', require('./routes/reset'))
app.use('/blog', require('./routes/blog/blog'))



app.listen(port, () => console.log('connected on port' + port))