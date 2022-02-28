import { useEffect, useState } from "react";
import ReactLoading from "react-loading"
import { AddToDo } from "../components/AddToDo";
import { BodyContainer } from "../components/BodyContainer/style";
import { ToggleButton } from "../components/Button/style";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { getAllTodos } from "../services/todoService";

export function TodosPage(){

    const [todos, setTodos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isToggled, setIsToggled] = useState(false)
    
    useEffect(() => {
        getTodos();
    }, [])
    
    async function getTodos(){
        let response = await getAllTodos()
        setTodos(response)
        setIsLoading(false)
    }

    const updateCard = () => {
        getTodos()
    }

    return (
        <div>
            <Header />
            <BodyContainer>
                <ToggleButton to="" onClick={() => setIsToggled(!isToggled)} >+ Novo To Do</ToggleButton>
                {isToggled && <AddToDo update={updateCard} />}
                {isLoading ? <Loading /> :
                todos.map(todo => 
                    <Card 
                        key={todo.id} 
                        id={todo.id}
                        title={todo.nome}
                        description={todo.descricao}
                        createdAt={todo.dataCriacao}
                        statusOf={todo.status}
                        finalDate={todo.dataEsperada}
                        tag={todo.tag}
                        update={updateCard}    
                    />)
                }
            </BodyContainer>
        </div>
    )
}