import express from "express";
const app = express();
import connectDB from "./database/database_connect.js";
const connect_url = "mongodb://localhost:27017"
import route from "./router/stud_route.js";
const port = 2000;

connectDB(connect_url)

app.use("/", route)
// app.use("/" , (req,resp)=>{
//     resp.send("oudhf")
// })

app.listen(port, () => {
    console.log(`Listening port at http://localhost:${port}`)
})