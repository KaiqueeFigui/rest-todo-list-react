import { api } from "./api"

export async function getAllTodos(){
    const response = await api.get(`/todos`)
    if (response.status === 200){
        return response.data
    } else {
        throw Error("Deu ruim")
    }
}

export async function deleteTodo(id){
    const response = await api.delete(`/todos/${id}`)
    if (response.status === 200){
        return response.data
    } else {
        throw Error("Deu ruim")
    }
}

export async function saveTodo(toDo){
    const response = await api.post(`/todos/`, toDo)
    if (response.status === 201){
        return response.data
    } else {
        throw Error("Deu ruim")
    }
}