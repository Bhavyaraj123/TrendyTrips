import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import dbConnect from "./config/db.js";
import tourRoute from "./routes/tour.js"
import userRoute from "./routes/user.js"
import authCont from "./routes/auth.js"
import reviewRoute from "./routes/review.js"
import bookingRoute from "./routes/bookings.js"
import path from 'path'
import { fileURLToPath } from "url";
// npm run start dev for starting the backend ,
const app = express();
dotenv.config(); 

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 8000;
const allowedOrigins = [
   
    'https://trendytrips-1.onrender.com',
  ];
  
  const corsOp = {
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  };
  app.use(cors(corsOp));
  
dbConnect();
app.use("/uploads", express.static("uploads"));

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth",authCont)  
app.use("/api/v1/tours",tourRoute)
app.use("/api/v1/user",userRoute)
app.use("/api/v1/review",reviewRoute)
app.use("/api/v1/booking",bookingRoute)


 
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
});
// create tour


app.listen(8000,()=>{
     ("Server started")
})