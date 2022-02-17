import React from "react";
import { Select } from "./style"

export function SelectStatus(){
    return (
        <Select className="status">
            <option value="A Fazer">A Fazer</option>
            <option value="EM_PROGRESSPO">Em progresso</option>
            <option value="FEITO">Feito</option>
        </Select>
    )
}