import { FlexContainer, HeaderContainer, MenuList } from "./style";
import { MenuButton } from "../Button/style"

export function Header(){
    return(
        <HeaderContainer>
            <FlexContainer>
                <h2>myTodoList</h2>
                <MenuList>
                    <li>
                    <MenuButton to="/">To Do</MenuButton>
                    </li>
                    <li>
                    <MenuButton to="/lixeira">Lixeira</MenuButton>
                    </li>
                </MenuList>
            </FlexContainer>
        </HeaderContainer>
    )
}