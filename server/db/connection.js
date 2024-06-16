import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({path: './config.env' })
const username=process.env.MONGODB_USERNAME;
const password=process.env.MONGODB_PASSWORD;

const conn=mongoose.connect(`mongodb+srv://${username}:${password}@expensedetails.evbut5x.mongodb.net/?retryWrites=true&w=majority&appName=expenseDetails`)
    .then(db=>{
        console.log("Database Connected");
        return db;
    })

export default conn;
