import express from "express";
import connectDB from "./database/database_connect.js";
import route from "./router/stud_route.js";
const app = express();
const connect_url = "mongodb://localhost:27017"
const port = 2000;

connectDB(connect_url)
app.use(express.json())

app.use("/", route)

app.listen(port, () => {
    console.log(`Listening port at http://localhost:${port}`)
})