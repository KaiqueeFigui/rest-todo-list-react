import React from "react";
import { Card } from "../Card"
import { SelectStatus } from "../Select";
import { CardContainer, Container } from "./style";

export function TodosTable(){
    return(
        <div>
        <Container>
            <div>
            <SelectStatus className="status">
                <option value="A_FAZER">A Fazer</option>
                <option value="EM_PROGESSO">Em progresso</option>
                <option value="FEITO">Feito</option>
            </SelectStatus>
            </div>
        </Container>
        <CardContainer>
            <Card titulo="Titulo" status="A Fazer" descricao="Task todo" id={1} />
            <Card titulo="Titulo" status="Em Progresso" descricao="Task todo" id={2} />
            <Card titulo="Titulo" status="Feito" descricao="Task todo" id={3} />
        </CardContainer>
        </div>
    )
}   