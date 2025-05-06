import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const birdsIndex = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/birds`)
        return response
    } catch (error) {
        console.log(error);
        throw error
    }
}

export const singleBird = async (birdId) => {
    try {
        const response = await axios.get(`${BASE_URL}/birds/${birdId}`)
        return response
    } catch (error) {
        console.log(error);
        throw error
    }
}