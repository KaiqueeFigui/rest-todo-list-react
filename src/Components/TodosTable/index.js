import React, { useEffect, useState } from "react";
import { Card } from "../Card"
import { Select } from "../Select/style"
import { CardContainer, Container } from "./style"
import { getTodos, getTodosPorStatus } from "../../services/TodosService"
import { converteStatusEnum } from "../../utils/StatusUtil";

export function TodosTable(){

    let [todos, setTodos] = useState([]);

    useEffect(() => {
        async function buscaTodos() {
            let todosData = await getTodos()
    
            if (!isStatusCodeValido(todosData.status)){
                console.log(todosData.data.message)
                return
            }
    
            setTodos(todosData.data)
        }
        buscaTodos()
    }, [])

    async function getAllTodos() {
        let todosData = await getTodos()

        if (!isStatusCodeValido(todosData.status)){
            console.log(todos.data.message)
            return
        }

        setTodos(todosData.data)
    }

    async function getAllTodosPorStatus(status){
        if (status.toUpperCase() === "TODOS"){
            getAllTodos()
        }
        
        let todosData = await getTodosPorStatus(status)
        if (!isStatusCodeValido(todosData.status)){
            console.log(todos.data.message)
            return
        }
        setTodos(todosData.data)
    }

    function isStatusCodeValido(statusCode){
        if (statusCode === 200){
            return true
        } else {
            return false
        }
    }

    return(
        <div>
        <Container>
            <div>
            <Select onChange={e => getAllTodosPorStatus(e.target.value)} className="status">
                <option value="TODOS">Todos</option>
                <option value="A_FAZER">A Fazer</option>
                <option value="EM_PROGRESSO">Em progresso</option>
                <option value="FEITO">Feito</option>
            </Select>
            </div>
        </Container>
        <CardContainer>
            Todos aqui:
            {todos?.map(todo => <Card key={todo.id} titulo={todo.nome} status={converteStatusEnum(todo.status)} descricao={todo.descricao} id={todo.id} tag={todo.tag} />)}
        </CardContainer>
        </div>
    )
}