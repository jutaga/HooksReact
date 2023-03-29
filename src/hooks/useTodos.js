import { todoReducer } from "../08-useReducer/todoReducer"
import { useEffect, useReducer, useState } from "react"

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = (initialState = []) => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    const [counter, setcounter] = useState(0);


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    const handleNewTodo = (todo) => {

        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatch(action);
    }


    const handleDeleteTodo = (id) => {

        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        })
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        })

    }

    return {
        ...todos,
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount : todos.length,
        pendingTodosCount : todos.filter( todo => !todo.done).length

    }
}
