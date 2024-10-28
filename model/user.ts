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
        match: /.+\@.+\..+/
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        default: "user"
    },
    image: { type: String },
    authProviderId: { type: String },
});

const User = mongoose.models?.User || mongoose.model("User", userSchema);

export default User;