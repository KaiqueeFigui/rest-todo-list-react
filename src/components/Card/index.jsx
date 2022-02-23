import { DeleteButton, EditButton } from "../Button/style";
import { ButtonContainer, CardContainer, DateContainer, StatusContainer, TagContainer } from "./style";

export function Card({ title, description, createdAt, statusOf, finalDate, tag }){
    return(
        <CardContainer>
            <div>
                <h1>{title}</h1>
                <StatusContainer statusOf={statusOf}>
                    <p>{statusOf}</p>
                </StatusContainer>
                <p>{description}</p>
            </div>
            <ButtonContainer>
                <li>
                <DeleteButton to="">Excluir</DeleteButton>
                </li>
                <li>
                <EditButton to="">Editar</EditButton>
                </li>
            </ButtonContainer>
            <DateContainer>
                <p>criado em: {createdAt}</p>
                <p>data esperada: {finalDate}</p>
            </DateContainer>
            <TagContainer>
            <p>tag: {tag}</p>
            </TagContainer>
        </CardContainer>
    )
}