import { DeleteButton, EditButton } from "../Button/style";
import { ButtonContainer, CardContainer } from "./style";

export function Card({ title, description, createdAt, status, finalDate, tag }){
    return(
        <CardContainer>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <p>Status: {status}</p>
                <p>criado em: {createdAt}</p>
                <p>data esperada: {finalDate}</p>
                <p>tag: {tag}</p>
            </div>
            <ButtonContainer>
                <li>
                <DeleteButton to="">Excluir</DeleteButton>
                </li>
                <li>
                <EditButton to="">Editar</EditButton>
                </li>
            </ButtonContainer>
        </CardContainer>
    )
}