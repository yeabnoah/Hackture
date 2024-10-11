import { SignUpData, SignupResponse } from "@/interface/signup_interface";
import axios from "axios";

const signUpFetch = async (userInput: SignUpData) => { // Changed parameter to userInput
    const response = await axios.post('/api/signup', {
        email: userInput.email,
        password: userInput.password,
        first_name: userInput.firstName,
        last_name: userInput.lastName,
        github_username: userInput.githubUsername
    });

    return response.data as SignupResponse
}

export default signUpFetch