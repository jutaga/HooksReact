
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {


    return (
        <li className="list-group-item d-flex justify-content-between">
            <span style={{ cursor: 'pointer', userSelect: 'none' }} onDoubleClick={() => onToggleTodo(todo.id)} className={`align-self-center fw-bold ${(todo.donde) ? 'text-success' : 'text-danger'}`}>{todo.description}</span>
            <button onClick={() => onDeleteTodo(todo.id)} className="btn btn-danger ">X</button>
        </li>
    )
}
