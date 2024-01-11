import {createContext,useContext} from 'react'

const TodoContext = createContext({
   todos: [
        {
            id : new Date(),
            todoMsg : "",
            checked : false ,
        }
    ],
   createTodo : (Msg)=>{},
   updateTodo : (id,todoMsg)=>{},
   toggleTodo : (id,todo)=>{},
   removeTodo : (id)=>{},
})

export const TodoContextProvider = TodoContext.Provider

export const useTodo =()=>  useContext(TodoContext);