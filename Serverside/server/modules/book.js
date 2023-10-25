import mongoose from "mongoose"

const bookDetails = new mongoose.Schema({
    title: String,
    author: String,
    country: String,
    bookcover: String,
})

export const Books = mongoose.model("YOUR_OWN_DB_NAME", bookDetails)