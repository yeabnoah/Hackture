import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    github_username: {
        type: String
    },
    password: {
        type: String
    }
});

// Check if the model is already defined
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;