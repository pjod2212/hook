import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

// export const initialState = [
//     {
//         id: new Date().getTime(),
//         description : "Recolectar piedra del alma",
//         done : false
//     },
//     {
//         id: new Date().getTime() * 3,
//         description : "Recolectar piedra del alma",
//         done : false
//     }
// ]

export const initialState = [ ] ;

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ));  
  }, [todos])
  

  const handleNewTodo = ( todo ) => {
    const action = {
        type:'Add Todo',
        payload: todo,
    }

    dispatch( action );
  }

  const handleDeleteTodo = ( id ) => {
    const action = {
        type:'Remove Todo',
        payload: id,
    }

    dispatch( action );
  }

  const onToggleTodo = ( id ) => {
    const action = {
        type:'Toggle Todo',
        payload: id,
    }

    dispatch( action );
  }


  return (
    <>
    <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
    <hr />
    <div className="row">
        <div className="col-7">
            
            <TodoList todos={todos} 
            onDeleteTodo={ handleDeleteTodo } 
            onToggleTodo={ onToggleTodo }/>
        
        </div>
        <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr />
            <TodoAdd onNewTodo={handleNewTodo} />
        </div>
    </div>
    </>
  )
}
