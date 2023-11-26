import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import {getApiHealth} from './controlors/health.js';
import {postApiTransiton , getApiTransition} from './controlors/teansition.js'
dotenv.config();

const app = express();
app.use(express.json());

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.Mongo_url);
    if (conn) {
        console.log(`MongoBD connected `)
    }
};

// ------ Get health API -------------
app.get('/api/health',getApiHealth)

//------ Post Transition API ----------
app.post('/api/transition',postApiTransiton);

//------Get All fetched Transition API ------
app.get('/api/transitions',getApiTransition)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running  : ${PORT}`);
    connectDB();
});