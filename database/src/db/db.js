const mongoose = require("mongoose");

const dns = require("dns")

dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])

async function connectDB() {
        await mongoose.connect(
            "mongodb+srv://Danush-user-01:nqknv%21vqM%21hc52j@cluster0.a4izugf.mongodb.net/halley"
        );
        console.log("Connected to DB");
}

module.exports = connectDB;