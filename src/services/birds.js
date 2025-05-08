import axios from "axios";
import { getToken } from "../lib/users";

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

export const createBird = async (formData) => {
    try {
        return axios.post(`${BASE_URL}/birds`, formData, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
    } catch (error) {
        console.log(error);
        throw error
    }
}

export const editBird = async (birdId, formData) => {
    try {
        return axios.put(`${BASE_URL}/birds/${birdId}`, formData, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
    } catch (error) {
       console.log(error);
        throw error
    }
}

export const deleteBird = async (birdId) => {
    try {
        return axios.delete(`${BASE_URL}/birds/${birdId}`, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
    } catch (error) {
        console.log(error);
        throw error
    }
}