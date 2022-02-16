import React from "react";
import { BotaoMenu, HeaderContainer, LogoContainer } from "./style";

export function Header(props) {
    return (
        <HeaderContainer>
            <LogoContainer>myTodoList</LogoContainer>
            <ul>
                <li><BotaoMenu ativo={props.ativo === "todo" ? true : false}>Todos</BotaoMenu></li>
                <li><BotaoMenu ativo={props.ativo === "lixeira" ? true : false}>Lixeira</BotaoMenu></li>
            </ul>
        </HeaderContainer>
    )
}