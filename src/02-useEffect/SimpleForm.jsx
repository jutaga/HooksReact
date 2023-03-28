import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'juan',
        email: 'juan@gmail.com',
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        });
    }


    useEffect(() => {
        // console.log('UseEffect called');
    }, []);

    useEffect(() => {
        // console.log('UseEffect called, Username Changed');
    }, [username]);

    useEffect(() => {
        // console.log('UseEffect called, Email Changed');
    }, [email]);

    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input onChange={onInputChange} value={username} type="text" className="form-control" placeholder="Username" name="username" autoComplete="off" />

            <input onChange={onInputChange} value={email} type="email" placeholder="example123@example.com" className="form-control mt-2" name="email" />


            {
                username === 'juan1' && <Message />
            }

        </>


    )
}
