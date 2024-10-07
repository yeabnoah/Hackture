import mongoose from "mongoose";
import { tree } from "next/dist/build/templates/app-page";

const userSchema = new mongoose.Schema({
    first_name : {
        type : String,
        required : true
    },
    last_name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    github_username : {
        type : String
    },
    password :{
        type : String
    }

})

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;