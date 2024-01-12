import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {todos:[{
    id : nanoid() ,
    text : "hello"
}]}

export const TodoReducer = createSlice({
    name : 'todo',
    initialState,
    reducers :{
        addTodo : (state,action)=>{
            const todo = {id : nanoid() , text : action.payload}
            state.todos.push(todo)
        },
        removeTodo : (state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        }
    }
})

export const {addTodo, removeTodo} = TodoReducer.actions

export default TodoReducer.reducer