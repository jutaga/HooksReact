import { TodoList } from "./components/TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodos } from "../hooks";

export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleToggleTodo, handleDeleteTodo, handleNewTodo } = useTodos();

    
    return (
        <>
            <h1>TodoApp: {todosCount} <small>- Pendientes: {pendingTodosCount}</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">

                    <TodoList onToggleTodo={handleToggleTodo} todos={todos} onDeleteTodo={handleDeleteTodo} />

                </div>

                <div className="col-5">

                    <h4 style={{ userSelect: 'none' }}>Agregar TODO</h4>
                    <hr />

                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>

        </>
    )
}
