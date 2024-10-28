import { SignUpData, SignupResponse } from "@/interface/signup_interface";
import axios from "axios";

const signUpFetch = async (userInput: SignUpData) => {
    const response = await axios.post('/api/signup', {
        email: userInput.email,
        password: userInput.password,
        first_name: userInput.firstName,
        last_name: userInput.lastName,
    });

    return response.data as SignupResponse
}

export default signUpFetch