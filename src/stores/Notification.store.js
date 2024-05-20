import { create } from 'zustand';

export const useNotificationStore = create((set) => ({
    isOpen: false,
    text: '',
    severity: '',
    setNotification: (isOpen, text, severity) => set({ isOpen, text, severity }),
    setCloseNotification: () => set({ isOpen: false, text: '', severity: '' })
}))