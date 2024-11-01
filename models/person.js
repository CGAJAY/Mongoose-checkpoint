import { Schema, model } from "mongoose";

const personSchema = new Schema({
	name: { type: String, required: true },
	age: Number,
	favoriteFoods: [String],
});

// Export the model
export const Person = model("Person", personSchema);
