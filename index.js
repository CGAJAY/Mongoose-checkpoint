// Import required packages
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Person } from "./models/person.js";

dotenv.config();

// Connect to MongoDB
mongoose
	.connect(process.env.MONGO_URI)
	.then(() =>
		console.log("Database connected successfully")
	)
	.catch((err) =>
		console.error("Database connection error:", err)
	);
