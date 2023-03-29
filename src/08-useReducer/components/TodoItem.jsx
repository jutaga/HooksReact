
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {


    return (
        <li className="list-group-item d-flex justify-content-between">
            <div>
                <span style={{userSelect: 'none' }} className="align-self-center fw-bold me-2">{todo.description}</span>
                {
                    <span onDoubleClick={() => onToggleTodo(todo.id)} className={todo.done ? "btn btn-success" : 'btn btn-danger'}>{todo.done ? 'Completada' : 'Pendiente'}</span>
                }
            </div>
            <button onClick={() => onDeleteTodo(todo.id)} className="btn btn-danger ">X</button>
        </li>
    )
}
