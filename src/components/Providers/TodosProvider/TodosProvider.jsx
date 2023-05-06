import { createContext, useContext, useReducer, useState } from 'react';
import styles from './TodosProvider.module.css'

const TodosContext = createContext();
const TodosContextDispatcher = createContext();

const initialState = [
    {
        id: 16825255501323,
        content: 'First Task',
        createdAt: '2022-04-26T17:16:41.323Z',
        isCompleted: true,
    },
    {
        id: 1682529401323,
        content: 'Second Task',
        createdAt: '2023-04-26T17:16:41.323Z',
        isCompleted: false,
    },
    {
        id: 1855529401323,
        content: 'Third Task',
        createdAt: '2023-06-26T17:16:41.323Z',
        isCompleted: false,
    }
];

const reducer = (state, action) => {
    const date = new Date();
    const todos = [...state];
    let index = 0, todo = {}, content = "";
    switch(action.type){
        case 'add':
            content = action.todo;
            if(!content){
                alert('Please Enter A Todo...');
                return state;
            }
            todos.push({
                id: date.getTime(),
                content,
                createdAt: date.toISOString(),
                isCompleted: false,
            })
            return todos
        case 'delete':
            const filteredTodos = todos.filter(todo => todo.id !== action.todoId);
            return filteredTodos;
        case 'edit':
            content = action.todo;
            console.log(content);
            if(!content){
                alert('Please Enter A Todo...');
                return state;
            }
            index = todos.findIndex(todo => todo.id === action.todoId);
            todo = {...state[index]};
            todo.content = content;
            todo.updatedAt = date.toISOString();
            todos[index] = todo;
            return todos;
            case 'complete':
            index = todos.findIndex(todo => todo.id === action.todoId);
            todo = {...state[index]};
            todo.isCompleted = !todo.isCompleted;
            todos[index] = todo;
            return todos;
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
