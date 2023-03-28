import { LoadingMessage, Quote } from '../03-examples/components';
import { useCounter, useFetch } from '../hooks'

const baseUrl = 'https://rickandmortyapi.com/api/character/'

export const Layout = () => {

    const { counter, increment, decrement } = useCounter(1);

    const { data, isLoading } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);


    const { name, status } = !!data && data;

    return (
        <>
            <h1>Rick & Morty Quotes</h1>
            <hr />

            {
                (isLoading)
                    ? <LoadingMessage />
                    : <Quote name={name} status={status} />
            }

            <div>
                <button disabled={counter <= 1} onClick={() => decrement()} className="btn btn-primary">
                    Previous Character
                </button>
                <button disabled={isLoading} onClick={() => increment()} className="btn btn-primary">
                    Next Character
                </button>
            </div>
        </>
    )
}
