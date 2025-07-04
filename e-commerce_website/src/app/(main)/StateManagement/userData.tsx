import { create } from "zustand";
import { persist } from "zustand/middleware";

const userData=create( persist(
    (set) => ({
        userData: null,
        userId:null,
        setUserData: (userData: string) => set({ userData }),
        setUserId:(userId:string)=>set({userId}),
    }),
    {
        name: "user-data-storage", // name of localStorage key
        storage: {
            getItem: (name) => {
                const item = sessionStorage.getItem(name);
                return item ? JSON.parse(item) : null;
            },
            setItem: (name, value) => {
                sessionStorage.setItem(name, JSON.stringify(value));
            },
            removeItem: (name) => {
                sessionStorage.removeItem(name);
            },
        },
    }
))

export default userData;