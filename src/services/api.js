import axios from "axios"

const baseURL = import.meta.env.VITE_TODOS_API

export const api = axios.create({
    baseURL
})