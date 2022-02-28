import axios from "axios"

const baseURL = import.meta.env.VITE_TODOS_API
console.log(baseURL)

export const api = axios.create({
    baseURL
})