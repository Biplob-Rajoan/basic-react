import { RootState } from "@/redux/store.";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState{
    tasks : ITask[];
    filter: "all" | "high" | "medium" | "low"
}

const initialState : InitialState = {
    tasks : [
        {
            id: "addfdsf",
            title: "Initialize frontend",
            description: "Create Home page",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "High"
        },
        {
            id: "addfdfffffsf",
            title: "Initialize backend",
            description: "Create Home page",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "Medium",
        },
    ],
    filter: "all"
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}

})

export const selectTasks = (state: RootState) =>{
    return state.todo.tasks;
}

export const selectFilter = (state: RootState) =>{
    return state.todo.filter;
}

export default taskSlice.reducer;