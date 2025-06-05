const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
const users = require("./data/users");
const products = require("./data/products");
const User = require("./models/userModel");
const Product = require("./models/productModel");
const Order = require("./models/orderModel");
const connectdb = require("./config/db");

// importing data
// wiping the data

dotenv.config();

connectdb();

const importData = async () => {
    try {
        await Order.deleteMany();
        await User.deleteMany();
        await Product.deleteMany();  

        const createdUsers = await User.insertMany(users);

        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map((product) => {
            return { ...product, user : adminUser};
        })

        const createdProducts = await Product.insertMany(sampleProducts);

        console.log('Data created', colors.green.inverse);
    } catch (err) {
        console.log(`${err}`,colors.red.inverse)
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await User.deleteMany();
        await Product.deleteMany();
    } catch (err) {
        console.log(`${err}`,colors.red.inverse)
    }
}


if (process.argv[2] === "-D") {
    destroyData();
}
else {
    importData();
}