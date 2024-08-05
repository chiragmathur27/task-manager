import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "tasks",
    initialState:{
        tasks: []
    },
    reducers: {
        getTask : (state, action) => {
            // console.log(state.tasks)
            // console.log(action.payload)
            state.tasks = action.payload.map(task => {
                console.log(task)
                return {id:task._id, name:task.name, description:task.description}
            })
        },
        addTask : (state, action) => {

            state.tasks.push(action.payload)
        },
        updateTask : (state, action) =>{
            console.log(action.payload)
            const index = state.tasks.findIndex(task => task.id === action.payload.id)
            // const index = state.users.map(task => task.id).indexOf(action.payload.id);
            // console.log(state.tasks[0])
            // console.log(state.)
            state.tasks[index] = {
                id:action.payload.id,
                name:action.payload.name,
                description:action.payload.description
            }
        },
        deleteTask : (state, action) => {
            const id = action.payload.id
            state.tasks = state.tasks.filter(task => task.id !== id)
        }
    }
})

export const {getTask, addTask, updateTask, deleteTask} = taskSlice.actions
export default taskSlice.reducer