import styled from "styled-components";
import { geraCorPartindoDoStatus } from "../../utils/StatusUtil";

export const CardStyle = styled.div`
    margin: 15px 0 15px 0;
    padding: 5px;
    border-radius: 2px;

    h3{
        font-size: 1.5em;
        font-weight: 700;
    }

    p{
        font-size: 0.7em;
    }

    :hover{
        background-color: #232628;
    }
`

export const Descricao = styled.div`
    margin: 5px 0 5px 0;
    padding: 5px 0 5px 0;
    p{
        opacity: 80%;
    }
`

export const Status = styled.div`
    width: 80px;
    padding: 5px;
    border-radius: 2px;
    background-color: ${props => geraCorPartindoDoStatus(props.status)};
`

export const BotaoContainer = styled.div`
    margin-top: 15px;
    display: flex;
`

export const TagContainer = styled.div`
    p {
        font-size: 0%.7rem;
        opacity: 70%;
    }
`