const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connector = require('./utils/db')
const noticeRoutes = require('./routes/noticeROutes')
dotenv.config()

const PORT = process.env.PORT

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{
    res.send("Yo dumbo")
})

app.use('/notices', noticeRoutes);

connector()

app.listen(PORT, ()=>{
    console.log(`Server started http://localhost:${PORT}/`)
})