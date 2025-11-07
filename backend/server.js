const mongoose =require("mongoose")
const express = require("express")
const cors = require("cors")
const app = express();

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/portfolio")
    .then(() => console.log("DB is connected"))
    .catch((err) => console.log("Error connecting DB:", err))

app.listen(2000, ()=>{
    console.log("the server is running")
})