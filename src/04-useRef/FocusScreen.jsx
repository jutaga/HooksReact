import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        console.log(inputRef);

        inputRef.current.select();
    }


    return (
        <>
            <h1>FocusScreen</h1>
            <hr />

            <input  ref={inputRef} type="text" className="form-control" placeholder="Introduce Your Name" />

            <button onClick={onClick} className="btn btn-primary mt-2">Set Focus</button>
        </>
    )
}