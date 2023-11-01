const mongoose = require('mongoose');

// Define the schema for the model
const emailSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }
});

// Create the model using the schema
const EmailModel = mongoose.model("Email", emailSchema);

module.exports = EmailModel;
