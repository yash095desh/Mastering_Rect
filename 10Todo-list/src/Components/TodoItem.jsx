import React from "react";
import { useTodo } from "../TodoContext/TodoContext";
import { useState } from "react";


function TodoItem({ todo }) {
    const[todoMsg,setTodoMsg] = useState('')
    const[isTodoEditable,setIsTodoEditable]=useState(false)
    const {updateTodo,removeTodo,toggleTodo} = useTodo()

    const editTodo = (id,Msg)=>{
        updateTodo(id,{...todo,todoMsg : Msg})
        setIsTodoEditable((prev)=>!prev)
    }
    const deleteTodo = (id)=>{
        removeTodo(id)
    }
    const toggleCompleted = ()=>{
        toggleTodo(todo.id,{...todo,checked:!todo.checked})
    }
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.checked? "bg-[#c6e9a7] " : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.checked}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.checked ? "line-through" : ""}`}
                value={isTodoEditable?todoMsg:todo.todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.checked) return;

                    if (isTodoEditable) {
                        editTodo(todo.id,todoMsg);
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
