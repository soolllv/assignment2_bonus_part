const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const indexRouter = require('./router/index');

//middleware
app.use(cors());
app.use(express.json());
app.use('/', indexRouter);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server has started ");
})