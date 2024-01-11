import { useState } from "react";
import { TodoContextProvider } from "./TodoContext/TodoContext";
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/TodoItem";
import { useEffect } from "react";



function App() {
  const [todos,setTodos]=useState([])

  const createTodo=(Msg)=>{
  setTodos((prev)=>[{id: Date.now(),todoMsg : Msg , checked : false},...prev])
    console.log(todos)
  }
  const updateTodo=(id,newtodo)=>{
    setTodos((prev)=>prev.map((todo)=> todo.id === id ? newtodo : todo))
  
  }
  const removeTodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id !== id ))
  }
  const toggleTodo =(id,newtodo)=>{
    setTodos((prev)=>prev.map((todo)=>todo.id === id ? newtodo : todo))
  }
  useEffect(()=>{
    let data = JSON.parse(localStorage.getItem("data"))
    if(data && data.length > 0){
      setTodos(data)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("data",JSON.stringify(todos))
  },[todos])

  return (
    <TodoContextProvider value={{todos,createTodo,updateTodo,removeTodo,toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todoo)=>{
                          return(
                            <div className=" w-full" key={todoo.id}>
                              <TodoItem todo={todoo}/>
                              </div>
                          )
                        })}
                    </div>
                </div>
            </div>
    </TodoContextProvider>

  )
}

export default App;
