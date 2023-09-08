import { create } from "zustand"

const useLogStore = create((set) => ({
    isLoggedIn: false,
    toggleIsLoggedIn: () => set(state => ({isLoggedIn: state.isLoggedIn ? false : true}))
}))

export { useLogStore }