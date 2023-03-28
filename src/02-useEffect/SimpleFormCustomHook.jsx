import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";

export const SimpleFormCustomHook = () => {


    const { formState, onResetForm, onInputChange, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });



    // const { username, email, password } = formState;




    return (
        <>
            <h1>Simple Form With Custom Hook</h1>
            <hr />

            <input onChange={onInputChange} value={username} type="text" className="form-control" placeholder="Username" name="username" autoComplete="off" />

            <input onChange={onInputChange} value={email} type="email" placeholder="example123@example.com" className="form-control mt-2" name="email" />

            <input onChange={onInputChange} value={password} type="password" placeholder="Password" className="form-control mt-2" name="password" />

            <button onClick={onResetForm} className="btn btn-primary mt-2">Clean Form</button>


        </>


    )
}
