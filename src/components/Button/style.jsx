import styled from "styled-components";
import { Link } from "react-router-dom"
import { globalVar } from "../../global-style";

const buttonsColors = {
    submit: {
        background: "#83ed65",
        font: "#252525"
    },
    delete: {
        background: "#f94f4f",
    },
    edit: {
        background: "#10efd5",
        font: "#252525"
    },
    menu: {
        background: "#EBEBEB",
        font: "#252525"
    },
    toggle: {
        background: "#04ff00",
        font: "#252525"
    }
}

export const Button = styled(Link)`
    padding: 6px 12px;
    border: none;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 500;
    cursor: ${props => props.disabled ? "default" : "pointer"};
    pointer-events: ${props => props.disabled ? "none" : "auto"};
    opacity: ${props => props.disabled ? "45%" : "100%"};
`

export const SubmitButton = styled(Button)`
    background-color: ${buttonsColors.submit.background};
    color: ${buttonsColors.submit.font};
`

export const DeleteButton = styled(Button)`
    background-color: ${buttonsColors.delete.background};
    color: inherit;
`

export const EditButton = styled(Button)`
    background-color: ${buttonsColors.edit.background};
    color: ${buttonsColors.edit.font};
`

export const MenuButton = styled(Button)`
    background-color: ${buttonsColors.menu.background};
    color: ${buttonsColors.menu.font};
`

export const ToggleButton = styled(Button)`
    background-color: ${buttonsColors.toggle.background};
    color: ${buttonsColors.toggle.font};
`