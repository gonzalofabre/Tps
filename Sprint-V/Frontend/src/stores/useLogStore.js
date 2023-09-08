import { create } from "zustand"

const useLogStore = create((set) => ({
    isLoggedIn: false,
    setIsLoggedIn: (isLoggedIn) => set(() => ({isLoggedIn}))
}))

export { useLogStore }