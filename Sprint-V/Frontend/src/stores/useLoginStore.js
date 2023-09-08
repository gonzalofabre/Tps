import { create } from "zustand"

const useLoginStore = create((set) => ({
    isLoginShow: false,
    setIsLoginShow: (isLoginShow) => set(() => ({isLoginShow}))
}))

export { useLoginStore }