import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config()
const dbConn = mongoose.connect(process.env.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })

if (dbConn) {
    console.log("Db connected");
}
else {
    console.log("Error in db connection");
}