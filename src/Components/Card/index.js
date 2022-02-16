import React from "react";
import { Excluir, Editar } from "../Botao/style"
import { CardStyle, Status, Descricao, BotaoContainer } from "./style";

function redirect(id){
    window.location.href = "http://www.google.com";    
}

export function Card(props){
    return(
        <CardStyle>
            <div onClick={props => redirect(props.id)}>
                <h3>{props.titulo}</h3>
                <Descricao><p>{props.descricao}</p></Descricao>
                <Status status={props.status}><p>{props.status}</p></Status>
            </div>
            <BotaoContainer>
                <Excluir>Excluir</Excluir>
                <Editar>Editar</Editar>
            </BotaoContainer>
        </CardStyle>
    )
}