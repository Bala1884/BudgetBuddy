import mongoose from "mongoose";

const username=process.env.MONGODB_USERNAME;
const password=process.env.MONGODB_PASSWORD;

const conn=mongoose.connect(`mongodb+srv://Bala:2u0dAZtSUB5dUhx8@expensedetails.evbut5x.mongodb.net/?retryWrites=true&w=majority&appName=expenseDetails`)
    .then(db=>{
        console.log("Database Connected");
        return db;
    })

export default conn;