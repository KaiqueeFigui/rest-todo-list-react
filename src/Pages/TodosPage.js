import React from 'react'
import { Header } from '../Components/Header'
import { TodosTable } from '../Components/TodosTable'

export function TodosPage(){
    return (
        <>
            <Header ativo="todo" />
            <TodosTable />
        </>
    )
}