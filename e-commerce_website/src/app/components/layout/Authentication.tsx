'use client'
import axiosInstance from "@/app/utils/axiosInstance";
import router from "next/router";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthChecker() {
  const router=useRouter()
  useEffect(() => {
    const checkAuth = async () => {
      const token: string | null = localStorage.getItem('jwtToken');
      const payload={Token:token}
      if(payload.Token==null){
        router.push('/auth/signin')
      }
      
      try {
        const response = await axiosInstance.post('/me', payload);
        
        console.log("response🎊🎊🎊", response.data);
        if(response.data.status==401){
          router.push('/auth/signin')
        }

      } catch (error) {
        console.error("Auth check failed:", error);
      }
    };

    checkAuth();
  }, []);

  return null; // no UI
}
