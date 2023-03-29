import { TodoList } from "./components/TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodos } from "../hooks/useTodos";

export const TodoApp = () => {

    const { todos, handleToggleTodo, handleDeleteTodo, handleNewTodo } = useTodos();

    return (
        <>
            <h1>TodoApp: 10 <small>- Pendientes: 2</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">

                    <TodoList onToggleTodo={handleToggleTodo} todos={todos} onDeleteTodo={handleDeleteTodo} />

                </div>

                <div className="col-5">

                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>

        </>
    )
}
