import { api } from "../api";

const todosPath = "todos"

export async function getTodos(){
    let response = await api.get(`/${todosPath}`)
        .catch(err => {
            return err.response
        })
    
    return response;
}

export async function getTodosPorStatus(status){
    let response = await api.get(`/${todosPath}/status/${status}`)
        .catch(err => {
            return err.response
        })
    
    console.log(response)
    return response;
}