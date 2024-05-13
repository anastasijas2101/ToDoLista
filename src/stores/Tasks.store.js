import { create } from "zustand";

export const useTaskStore = create((set) => ({
    tasks: [
        {
            id: 1,
            title: 'Hello World!',
            isCompleted: false
        },
        {
            id: 2,
            title: 'Hello World2!',
            isCompleted: false
        },
        {
            id: 3,
            title: 'Hello World3!',
            isCompleted: false,
        }
    ],
    addNewTask: (taskToAdd) => set((state) => ({ tasks: [...state.tasks, taskToAdd] })),
    deleteTask: (id) => set((state) => ({ tasks: state.tasks.filter((item) => item.id !== id) })),
    markDone: (id) => set((state) => ({ tasks: state.tasks.map((task) => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task) })),
}))