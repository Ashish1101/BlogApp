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
app.use(express.urlencoded({extended : false}))



//middleware Route
app.use('/auth' , require('./routes/auth'))
app.use('/register', require('./routes/register'))


app.listen(port , () => console.log('connected on port' + port))