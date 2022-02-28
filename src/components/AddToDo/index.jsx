import { useState } from "react"
import { saveTodo } from "../../services/todoService"
import { SubmitButton } from "../Button/style"
import { AddToDoContainer, AddInput, Description } from "./style"

export function AddToDo({ update }){

    const [toDo, setToDo] = useState({
        nome: "",
        descricao: "",
        status: "A_FAZER",
        dataEsperada: "",
        tag: ""
    })

    function handle(e){
        const newToDo = {...toDo}
        newToDo[e.target.id] = e.target.value
        setToDo(newToDo)
    }

    function save(){
        saveTodo(toDo)
        update()
    }

    return(
        <div>
        <AddToDoContainer>
            <h1>Add To Do</h1>
            <div>
                <label htmlFor="nome" >Título</label>
                <AddInput id="nome" name="nome" onChange={(e) => handle(e)} />
            </div>
            <div>
                <label htmlFor="descricao" >Descrição</label>
                <Description id="descricao" name="descricao" onChange={(e) => handle(e)} />
            </div>
            <div>
                <label htmlFor="dataEsperada" >Data final esperada</label>
                <AddInput type="date" id="dataEsperada" name="dataEsperada" onChange={(e) => handle(e)} />
            </div>
            <div>
                <label htmlFor="tag" >Tag</label>
                <AddInput type="tag" id="tag" name="tag" onChange={(e) => handle(e)} />
            </div>
        </AddToDoContainer>
        <SubmitButton to="" onClick={() => save()}>Salvar To Do</SubmitButton>
        </div>
    )
}