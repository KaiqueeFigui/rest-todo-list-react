import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TodosPage } from './Pages/TodosPage';

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path="/todos" element={<TodosPage/>}/>
            </Routes>
        </Router>

    );
}