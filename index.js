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

// Create and save a new person
const createAndSavePerson = () => {
	const person = new Person({
		name: "John Doe",
		age: 25,
		favoriteFoods: ["Pizza", "Pasta"],
	});

	// Save person to the database
	person.save((err, data) => {
		if (err) console.error(err);
		else console.log("Person saved:", data);
	});
};

// Create and save a multiple persons
const createManyPeople = (arrayOfPeople) => {
	Person.create(arrayOfPeople, (err, people) => {
		if (err) console.error(err);
		else console.log("People saved:", people);
	});
};

// Example
createManyPeople([
	{
		name: "Alice",
		age: 30,
		favoriteFoods: ["Salad", "Pizza"],
	},
	{
		name: "Bob",
		age: 22,
		favoriteFoods: ["Burgers", "Pasta"],
	},
]);
