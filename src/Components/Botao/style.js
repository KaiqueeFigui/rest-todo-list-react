import styled from "styled-components"

export const Botao = styled.button`
    font-size: 0.75rem;
    padding: 5px;
    border: none;
    border-radius: 2px;
    margin: 5px 5px 5px 0;

    opacity: 40%;

    :hover{
        opacity: 100%;
    }
`

export const Excluir = styled(Botao)`
    background-color: #f21010;
    color: #EBEBEB;
`

export const Editar = styled(Botao)`
    background-color: #10efd5;
    color: #EBEBEB;
`