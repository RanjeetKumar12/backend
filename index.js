// const fs = require("fs");
// const a = "daddaaafadfsdfd";
// // const a = fs.readFileSync("./sample.txt", "utf-8");
// fs.writeFileSync("./sample.txt", a);


// console.log("hi");

// const express = require('express')

// const app = express();
// const port = 4400;

// app.get("/", (req, res) => {
//     res.send("<h1>hello</h1>");
// })
// app.get("/about", (req, res) => {
//     res.send("<h1>about</h1>");
// })
// app.get("/new", (req, res) => {
//     res.send("<h1>new</h1>");
// })
// app.post("/", (req, res) => {
//     const userName = req.body.name;  
// })


// app.listen(port, () => {
//     console.log(`server started at: ${port}`)
// })


const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb://localhost:27017",{useNewUrlParser: true, useUnifiedTopology: true}).then(() => {console.log("connected")}).catch(err => console.error(err))