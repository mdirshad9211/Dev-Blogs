import express from 'express'; 
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();


mongoose.connect('mongodb+srv://itsmdirshad:Irshad2003@dev-blogs.mr2hexu.mongodb.net/devblogs?retryWrites=true&w=majority&appName=dev-blogs').then( () => {
    console.log("MongoDB Conntected");
}).catch((err) =>{
    console.log(err);
});

const app  = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


app.use('/api/user' , userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res,next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json 
    ({
        success :false,
        statusCode,
        message
    });
});