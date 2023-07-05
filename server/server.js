require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const connectDB= require("./config/dbConfig");

connectDB();
const port = process.env.PORT || 5000;


const usersRoute = require("./routes/usersRoute");
app.use("/api/users", usersRoute);



app.listen(port, () => console.log(`Node Server started at ${port}`));
