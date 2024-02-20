import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './Showincrement';


export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    //el useCallback memoRiza funciones para no renderizar el componente hijo nuevamente
    // pero prestar atencion a esto ((oldValue) => oldValue + newValue , normalmente sería
    // counter + 1 pero no funciona , ya que el counter se guardaria y funcionaria 1 vez , probar!!!
    const incrementFather = useCallback(
      (newValue) => {
        setCounter( (oldValue) => oldValue + newValue );
      },
      [],
    );

    useEffect(() => {
      // incrementFather();
    }, [incrementFather])
    
    
    // const incrementFather = () => {
    //     setCounter( counter + 1);
    // }


    return (
        <>
            <h1>useCallback Hook: { counter } </h1>
            <hr />

            <ShowIncrement increment={ incrementFather } />
        </>
    )
}