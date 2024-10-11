import { userInterface } from "./userInterface";

export interface SignUpData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    githubUsername: string;
}

export interface SignupResponse {
    data: userInterface | null,
    success: boolean,
    message: string
}