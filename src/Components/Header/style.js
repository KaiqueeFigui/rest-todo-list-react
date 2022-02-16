import styled from "styled-components";

export const HeaderContainer = styled.header`
    margin: 15px 15px 15px 15px;
    ul{
        display: flex;
        margin-top: 15px;
        list-style: none;
        justify-content: space-around;
    }
`

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 600;
`

export const BotaoMenu = styled.a`
    border: solid 1px white;
    padding: 10px;
    border-radius: 20px;
    font-weight: 500;

    color: ${props => props.ativo ? "#2F3437" : "inherit"};
    background-color: ${props => props.ativo ? "#EBEBEB" : "inherit"};

    :visited{
        color: inherit
    }
    
    :link {
        color: inherit;
        text-decoration: none;
    }

    :active, :hover{
        color: #2F3437;
        background-color: #EBEBEB;
    }

`