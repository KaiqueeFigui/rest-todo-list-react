import { BodyContainer } from "../components/BodyContainer/style";
import { Card } from "../components/Card";
import { Header } from "../components/Header";

export function TodosPage(){
    return (
        <div>
            <Header />
            <BodyContainer>
                <Card title="titulo" description="description" createdAt="2022-02-22" status="A Fazer" finalDate="2022-03-22" tag="Node" />
            </BodyContainer>
        </div>
    )
}