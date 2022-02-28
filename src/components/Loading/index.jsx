import ReactLoading from "react-loading"
import { LoadingContainer } from "./style"

export function Loading(){
    return(
        <LoadingContainer>
            <ReactLoading type="spinningBubbles" />
        </LoadingContainer>
    )
}