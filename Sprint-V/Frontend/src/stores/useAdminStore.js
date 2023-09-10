import { create } from "zustand"

const useAdminStore = create((set) => ({
    isAdminLogged: false,
    setIsAdminLogged: (isAdminLogged) => set({ isAdminLogged }), 
  }))
  
  export { useAdminStore }