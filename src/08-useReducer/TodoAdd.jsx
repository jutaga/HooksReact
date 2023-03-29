import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ onNewTodo }) => {


    const {description,  onInputChange, onResetForm } = useForm({
        id: new Date().getTime(),
        description: ''
    });

    const onFormSubmit = (event) => {        
        event.preventDefault();
        if(description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,

        }

        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <>
            <form onSubmit={onFormSubmit}  >
                <input value={description} name='description' onChange={onInputChange} type="text" placeholder="¿Que hay que hacer?" className="form-control" />

                <button type="submit" className="btn btn-outline-primary mt-1">
                    Agregar
                </button>
            </form>
        </>
    )
}
 