import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {




    return (
        <ul className="list-group">
            {
                todos.map((todo) => (
                    <TodoItem onToggleTodo={onToggleTodo} key={todo.id} todo={todo} onDeleteTodo={id => onDeleteTodo(id)} />
                ))
            }
        </ul>

    )
}
