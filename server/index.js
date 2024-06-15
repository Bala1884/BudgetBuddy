import express from "express";
import cors from "cors";
import routes from "./routes/route.js";
import dotenv from "dotenv";
import con from "./db/connection.js"
const app=express();

dotenv.config({path:"./config.env"})
const port=process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());

//using routes
app.use(routes)

con.then(db=>{
    if(!db) return process.exit(1);

    //listen to http server
    app.listen(port,()=>{
        console.log(`Server is running on port: ${port}`);
    })
    app.on('error',err=>console.log(`Failed to connect with HTTP server:${err}`));
}).catch(error=>{
    console.log(`Connection Failed! ${error}`);
})




