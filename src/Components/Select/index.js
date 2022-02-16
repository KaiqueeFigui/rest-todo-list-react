import React from "react";
import { Select } from "./style"

export function SelectStatus(){
    return (
        <Select className="status">
            <option status="A_FAZER" value="A Fazer">A Fazer</option>
            <option value="EM_PROGRESSP">Em progresso</option>
            <option value="FEITO">Feito</option>
        </Select>
    )
}