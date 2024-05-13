import { create } from "zustand";

export const useTaskStore = create((set) => ({
    tasks: [],
    dialog: {
        isOpen: false,
        item: null
    },
    addNewTask: (taskToAdd) => set((state) => ({ tasks: [...state.tasks, taskToAdd] })),
    deleteTask: (id) => set((state) => ({ tasks: state.tasks.filter((item) => item.id !== id) })),
    markDone: (id) => set((state) => ({ tasks: state.tasks.map((task) => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task) })),
    editTask: (id, updatedTask) => set((state) => ({ tasks: state.tasks.map((task) => task.id === id ? { ...task, ...updatedTask } : task) })),
    setDialog: (isOpen, item) => set({ dialog: { isOpen, item } }),
}))