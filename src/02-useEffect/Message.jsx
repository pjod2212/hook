import { useEffect, useState } from "react"

export const Message = () => {

  const [coords, setCoords] = useState({ x : 0 , y : 0});
  useEffect(() => {

    const onMouseMove = ({ x, y }) => {
      //const coords = { x , y };
      setCoords({ x,y });
    }

    // paso por referencia el metodo, mirar abajo el equivalente 
    // lo q hago es desestructurar el event con los datos que necesito
    // queda mucho mas prolijo
    window.addEventListener('mousemove', onMouseMove);
    
   /* window.addEventListener('mousemove', (event) => {
      console.log(event.x, event.y);
    });
    */
    return () => {      
      window.removeEventListener('mousemove',onMouseMove);
    }
  }, []);
  

  return (
    <>
    <h3>Usuario ya existe</h3>
    { JSON.stringify( coords )}
    </>
  )
}
