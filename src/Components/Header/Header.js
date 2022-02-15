import { BotaoMenu, HeaderContainer, LogoContainer } from "./style";

export function Header() {
    return (
        <HeaderContainer>
            <LogoContainer>myTodoList</LogoContainer>
            <div>
                <ul>
                    <li><BotaoMenu href="https://google.com">todos</BotaoMenu></li>
                    <li><BotaoMenu href="https://google.com">lixeira</BotaoMenu></li>
                </ul>
            </div>
        </HeaderContainer>
    )
}