import axios from "axios";

export async function postLead(body) {
    try {
        const data=await axios.post(`${process.env.BACKEND_URL}/api/lead/`, body);
        return data.data;
    } catch (error) {
        throw ('Error Posting Lead')
    }
}