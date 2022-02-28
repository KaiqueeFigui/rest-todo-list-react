import { DeleteButton, EditButton } from "../Button/style";
import { ButtonContainer, CardContainer, DateContainer, StatusContainer, TagContainer } from "./style";
import { deleteTodo } from "../../services/todoService";

export function Card({ id, title, description, createdAt, statusOf, finalDate, tag, update }){

    function removeTodo(todoId){
        deleteTodo(todoId)
        update()
    }

    return(
        <CardContainer>
            <div>
                <h1>{title}</h1>
                <StatusContainer statusOf={statusOf}>
                    <p>{statusOf}</p>
                </StatusContainer>
                <p>{description}</p>
            </div>
            <DateContainer>
                <p>criado em: {createdAt}</p>
                <p>data esperada: {finalDate}</p>
            </DateContainer>
            <TagContainer>
            <p>tag: {tag}</p>
            </TagContainer>
            <ButtonContainer>
                <li>
                <DeleteButton onClick={() => removeTodo(id)} to="">Excluir</DeleteButton>
                </li>
                <li>
                <EditButton to="">Editar</EditButton>
                </li>
            </ButtonContainer>
        </CardContainer>
    )
}