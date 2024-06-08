import express from "express"
import cors from "cors";
import authRouter from "./routhes/auth.route.js"
import postRouter from "./routhes/post.routhe.js"
import testRouter from "./routhes/test.route.js"
import userRouter from "./routhes/user.route.js"
import savedPostRouter from "./routhes/saved_post.route.js"

import cookieParser from 'cookie-parser';



const app = express();
app.use(cookieParser());
// Konfiguracija CORS-a
const corsOptions = {
    origin: 'http://localhost:5173', // Dozvoljeni origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Rukovanje preflight zahtjevima


// Middleware za parsiranje JSON tijela
app.use(express.json());

//rute
app.use("/api/post", postRouter);
app.use("/api/save-post", savedPostRouter);
app.use("/api/auth", authRouter);
app.use("/api/test", testRouter);
app.use("/api/user", userRouter);




app.listen(8800, () => (
    console.log("server is running")
))