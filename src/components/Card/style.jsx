import styled from "styled-components";

export const CardContainer = styled.div`
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 15px;
    margin: 15px 0px;
`

export const ButtonContainer = styled.ul`
    margin-top: 15px;
    list-style: none;
    display: flex;

    li{
        margin-right: 5px;
    }
`

export const StatusContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    border-radius: 3px;
    width: max-content;
    opacity: 85%;
    font-weight: 600;
    font-size: 0.8rem;
    margin: 15px 0px;
    background-color: ${props => props.statusOf == "A FAZER" ? "#ff3a3a" : 
                        props.statusOf == "EM PROGRESSO" ? "#9c58fc" :
                        "#00e522"};
`

export const TagContainer = styled.div`
    margin-top: 6px;
    opacity: 80%;
`

export const DateContainer = styled.div`
    margin-top: 12px;
    font-size: 0.9rem;
    opacity: 80%;
`