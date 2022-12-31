import 'express-async-errors'
import mongoose from "mongoose";
import { app } from './app';

const start = async()=>{
    /*uncomment to enable mongo db connection
    try{
        await mongoose.connect('url');
        console.log('Connected to mongodb')
    }catch(err){
        console.error(err)
    }
    */
    app.listen(3000,()=>{
        console.log('listening on port 3000');
    })
}

start();
