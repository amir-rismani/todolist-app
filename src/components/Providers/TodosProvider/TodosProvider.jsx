import { createContext, useContext, useReducer, useState } from 'react';
import styles from './TodosProvider.module.css'

const TodosContext = createContext();
const TodosContextDispatcher = createContext();

const initialState = [];
const reducer = (state, action) => {
    const date = new Date();
    switch(action.type){
        case 'add':
            const content = action.todo;
            if(!content){
                alert('Please Enter A Todo...');
                return state;
            }
            const todos = [...state];
            todos.push({
                id: date.getTime(),
                content,
                createdAt: date.toISOString(),
                isCompleted: false,
            })
            return todos
        case 'remove':
            return;
        default:
            return state;
    }
}

const TodosProvider = ({children}) => {
    const [todos, dispatch] = useReducer(reducer, initialState)
    return (
        <div className={styles.todosApp}>
            <TodosContext.Provider value={todos}>
                <TodosContextDispatcher.Provider value={dispatch}>
                    {children}
                </TodosContextDispatcher.Provider>
            </TodosContext.Provider>
        </div>
    );
}

export default TodosProvider;

export const useTodos = () => useContext(TodosContext);
export const useTodosActions = () => useContext(TodosContextDispatcher);