import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserdataInterface{
    userId:string;
    userName:string;
    userEmail:string;
    token:string;
    userRole:string;
    sellerId:string;
}

type userStore={
    userData:UserdataInterface|null;
    setUserData:(userData:UserdataInterface)=>void;
    clearUserData:()=>void;
}

// Helper function to safely get localStorage
const getStorage = () => {
  if (typeof window !== 'undefined') {
    return localStorage;
  }
  return {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
  };
};

const userDataStore=create<userStore>()(
    persist(
        (set)=>({
            userData:null,
            setUserData:(userData:UserdataInterface)=>set({userData}),
            clearUserData:()=>set({userData:null})
        }),
        {
            name:'userData-storage',
            storage:createJSONStorage(()=>getStorage()),
        }
    )
)

export default userDataStore;