import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import { v2 as cloudinary } from 'cloudinary';
import cookieParser from 'cookie-parser';

import userRoute from './routes/user.route.js';
import blogRoute from './routes/blog.route.js';

import cors from 'cors';
const app = express()
dotenv.config()
const port = process.env.PORT;
const MONOGO_URL = process.env.MONGO_URI;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173", // Replace with your frontend URL
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir:'/tmp/',
}));

//DB Code

try {
   mongoose.connect(MONOGO_URL)
   console.log("connected to MonogoDB")
} catch (error) {
    console.error(error);
}

// defining routes
app.use("/api/users", userRoute);
app.use("/api/blogs", blogRoute);

// CLOUDINARY
cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, // Click 'View API Keys' above to copy your Cloudinary cloud name
        api_key: process.env.CLOUD_API_KEY, // Click 'View API Keys' above to copy your API key
        api_secret: process.env.CLOUD_SECRET_KEY
    });

app.listen(port, () => {
  console.log(`Surver is running on port ${port}`)
});