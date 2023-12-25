const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
import { fileURLToPath } from "url"; // Import the fileURLToPath function
import { dirname } from "path";
import path from "path";
 
const app = express();

 
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

 
const __filename = fileURLToPath(import.meta.url); // Use fileURLToPath to get the filename
const _dirname = dirname(_filename); // Use dirname to get the directory name
 
app.use(express.static(path.join(__dirname, "./Frontend")));
 
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./Frontend/index.html"));
});


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