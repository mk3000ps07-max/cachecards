const express = require("express");
const app = require("./src/app");
const config = require("./src/config/config");
const connectDB = require("./src/db/db");

const PORT = config.PORT || 3000

connectDB()

app.use(express.static("frontend"));
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})