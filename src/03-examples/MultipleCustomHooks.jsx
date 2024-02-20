import { useCounter,useFetch } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {

    const { counter , increment} = useCounter();
    const {data,isLoading,hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    /*
    !!data: La doble negación !! se utiliza para convertir el valor de data a un valor booleano.
     Si data es null, undefined, false, 0 o una cadena vacía, se evaluará como false.
     Si data tiene un valor distinto de los mencionados, se evaluará como true.
    */
    // hago esto por que data puede venir en undefine entonces !undefined es true !!undefined es false
    const {quote,author} = !!data && data[0];

  return (
    <>
        <h1>BreakingBad Quotes</h1>
       { isLoading ?
        <LoadingQuote /> : <Quote author={author} quote={quote}/>
        
      }

        <button onClick={ () => increment() } className="btn btn-primary mt-2">Nex quote</button>

    </>
  )
}
