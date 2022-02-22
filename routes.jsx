import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import { LixeiraPage } from "./src/pages/LixeiraPage"
import { TodosPage } from "./src/pages/TodosPage"

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TodosPage />} />
                <Route path="/lixeira" element={<LixeiraPage />} />
            </Routes>
        </BrowserRouter>
    )
}
