import { useState } from "react"
import { UserContext } from "./UserContext"
/*
const user = {
    id:12,
    name:'pepe',
    mail:'asd@asd.com.ar'
}*/

export const UserProvider = ( { children } ) => {
  
  const [user, setUser] = useState();

  return (
    //<UserContext.Provider value={{ hola: 'Mundo',user}}>
    <UserContext.Provider value={{ user:user ,setUser}}>
        { children }
    </UserContext.Provider>
  )
}
