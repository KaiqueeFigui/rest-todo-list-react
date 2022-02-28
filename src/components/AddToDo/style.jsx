import styled from "styled-components";

export const AddToDoContainer = styled.div`
    padding: 30px 0;

    label{
        display: block;
    }

    div{
        margin: 5px 0;
    }
`

export const AddInput = styled.input`
    padding: 3px 6px;
    border: none;
    border-radius: 6px;
    color: #000000;
    width: 25em;
`

export const Description = styled.textarea`
    padding: 3px 6px;
    border: none;
    border-radius: 6px;
    color: #000000; 
    min-width: 25em;
`