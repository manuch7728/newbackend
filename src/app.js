import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Enable CORS with credentials and origin from env
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// Parse JSON and URL-encoded data
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// Import user routes
import userRoutes from "./routes/user.routes.js";

// Declare user routes
app.use("/users/v1/user", userRoutes); // e.g. http://localhost:8000/users/v1/user/register

export { app };