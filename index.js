const express = require("express");
const cors  = require("cors")
const connectdb = require("./config/db");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config()
const cookieParser = require("cookie-parser");

const app = express();

connectdb();

// Middlewares for body parsing
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin: 'http://localhost:5173', // your frontend
    credentials: true
}));

// Middleware for cookie parsing
app.use(cookieParser());

const port = process.env.PORT || 8000;

app.get('/api/',(req,res) => { res.send("Index Router"); })

app.use('/api/users', require("./routes/usersRoute"));

app.use('/api/products', require("./routes/productsRoute"));

app.use('/api/orders', require("./routes/orderRoute"));

app.use(errorHandler);
app.use(notFound);

app.listen(port, () => {
    console.log("Server connected succesfully!")
})