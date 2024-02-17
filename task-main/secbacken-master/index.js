const express = require('express')
const app  = express();
const DbConnection = require('./database');
const cors= require('cors')
const task= require('./routes/task')
const bodyParser =require('body-parser')
require('dotenv').config()


app.use(express.json())
app.use(cors())

app.use('/api/task',task)

DbConnection();
app.listen(5001 ||  process.env.PORT , () => {
    console.log(`Port listen in ${process.env.PORT}`);
});

