import axios from "axios";

export async function getVacancies() {
    try {
        const data=await axios.get(`${process.env.BACKEND_URL}/api/vacancy/`);
        return data.data;
    } catch (error) {
        throw ('Error Posting Lead')
    }
}