import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const signUp = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, formData)
        return response
    } catch (error) {
        console.log(error);
        throw error
    }
}

export const signIn = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, formData)
        return response
    } catch (error) {
        console.log(error);
        throw error
    }
}
