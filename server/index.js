import express from 'express';
import mongoose from "mongoose";
// Login from './models/user.js';
import Transition from './models/transition.js';

// import User from './models/user.js';
import dotenv from "dotenv";
import { getApiHealth } from './controlors/health.js';
import { postApiTransiton, getApiTransition, postApiSignup, postApiLogin, getApiTransitionById, getApiTransitionUserById} from './controlors/teansition.js'
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
app.get('/api/health', getApiHealth)

//------ Post Transition API ----------
app.post('/api/transition', postApiTransiton);

//------Get All fetched Transition API ------
app.get('/api/transitions', getApiTransition);

//-------post Signup ---------
app.post('/api/signup', postApiSignup);

//-------get Login ---------
app.post('/api/login', postApiLogin);

//-------get transiton id ---------
app.get('/api/transition/:id', getApiTransitionById);

//-------get transition user id  ---------
app.get('/api/transition/user/:id', getApiTransitionUserById);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running  : ${PORT}`);
    connectDB();
});