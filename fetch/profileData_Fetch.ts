import sessionInterface from "@/interface/session_Interface"
import axios from "axios"


const fetchProfileData = async () => {
    const response = await axios.get("/api/profile")
    return response.data.data as sessionInterface
}



export default fetchProfileData