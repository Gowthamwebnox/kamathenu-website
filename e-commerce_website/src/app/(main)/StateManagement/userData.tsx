import { create } from "zustand";
import { persist } from "zustand/middleware";

const userData=create( persist(
    (set) => ({
        userData: null,
        setUserData: (userData: string) => set({ userData }),
    }),
    {
        name: "user-data-storage", // name of localStorage key
        storage: localStorage, // or sessionStorage
    }
))

export default userData;