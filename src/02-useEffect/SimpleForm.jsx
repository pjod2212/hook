import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setformState] = useState({
    username:'sarasa',
    email:'sarasa@gmail.com'
  })
  const { username, email } = formState;
  const onInputChange = ({target}) => {
    const { name, value } = target;

    setformState({
        ...formState,
        [ name ]:value
    });

  }
  //el use effect se llama cada vez que el form se modifique o renderize nuevamente por ej
  // cada vez q escriba en un input se llama al useEffect
  // esto sucede al no poner el segundo argumento del useEffect
  // este segundo argumento es el que dice cuando llamar por ej, 
  // si paso como argumento un array vacio [] se va a llamar cuando se monta por primera vez
  // esto se llama las dependencias del useEffect
  useEffect( () => {
   // console.log("useEffect called!");
  },[])

  //de esta forma si paso en el array el formState ,
  // esto significa que cada vez que se modifique algo del formState el useEffect
  // se ejecuta nuevamente pero el de arriba solo se ejecuta la primera vez
  useEffect( () => {
   // console.log("formState called!");
  },[formState])

  // ahora por ejemplo si quiero q solo se ejecute cuando el email se modifique
  // se pasa como argumento el email, ojo que el de arriba se va a volver a ejecutar
  // al estar el formState como argumento
  useEffect( () => {
    //console.log("email called!");
  },[email])  

  return (
    <>
        <h1>Formulario simple</h1>

        <hr />
        <input type="text" 
        className="form-control" 
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}/> 

        <input type="email" 
        className="form-control mt-2" 
        placeholder="asd@asd.com"
        name="email"
        value={email}
        onChange={onInputChange}/> 
       { 
       
          (username === 'sarasa2') && <Message/> 
       
       }
    </>
 )
}
