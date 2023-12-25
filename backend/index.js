const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
const DB = "mongodb+srv://yashasvi:yashasvi@cluster0.p463vaq.mongodb.net/qoala"

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Connected to Database")
}).catch((err)=>{
    console.log(err.message);
})

app.get('/',(req,res)=>{
    res.json({message: "hey"})
})
app.use(cors())
//routes
app.use(express.json())
app.use('/api/extract',require('./routes/extract'))

app.listen(5000,()=>{
    console.log(`listening on 5000`)
})