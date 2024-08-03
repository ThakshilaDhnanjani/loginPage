import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
dotenv.config();
import { UserRouter } from './routes/User.js';


const app = express();
app.use(express.json());
app.use(cors());
app.use('/user', UserRouter);

mongoose.connect('mongodb://localhost:27017/authentication')

app.listen(process.env.PORT, () => {
    console.log("server is running")
})