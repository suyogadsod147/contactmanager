const express = require('express');
const errorHandler = require('./Middleware/errorHandler');
const connectDb = require('./congfig/dbConnection');
const dotnev = require('dotenv').config();
const userRouter = require('./routes/userRoutes')


connectDb()
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/api/contacts", require('./routes/contactRoutes'))
app.use("/api/users", require('./routes/userRoutes'))
app.use(errorHandler)



app.listen(PORT , ()=>{
    console.log(`listening on http://localhost:${PORT}`)
})