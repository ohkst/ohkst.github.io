import axios from "axios";
import { TestPostRequestData } from './EventModel'

const BASE_URL = "https://jsonplaceholder.typicode.com";

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// GET
export async function getData(endpoint: string) {
    try {
        const response = await api.get(endpoint);
        return response.data;
    } catch (error) {
        console.error("GET 요청 실패", error);
        return error;
    }
}


// POST
export async function postData(endpoint: string, payload: TestPostRequestData) {
    try {
        const response = await api.post(endpoint, payload);
        return response.data;
    } catch (error) {
        console.error("POST 요청 실패", error);
        return error;
    }
}

// PUT
export async function putData(endpoint: string, payload: TestPostRequestData) {
    try {
        const response = await api.put(endpoint, payload);
        return response.data;
    } catch (error) {
        console.error("PUT 요청 실패", error);
        return error;
    }
}

// DELETE
export async function deleteData(endpoint: string) {
    try {
        const response = await api.delete(endpoint);
        return response.status === 204;
    } catch (error) {
        console.error("DELETE 요청 실패", error);
        return error;
    }
}