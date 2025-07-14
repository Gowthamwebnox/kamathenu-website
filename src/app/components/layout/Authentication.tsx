'use client'
import axiosInstance from "@/app/utils/axiosInstance";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthChecker() {
  const router=useRouter()
  useEffect(() => {
    const checkAuth = async () => {
      // Check if we're on the client side
      if (typeof window !== 'undefined') {
        const token: string | null = localStorage.getItem('jwtToken');
        const payload={Token:token}
        if(payload.Token==null){
          router.push('/auth/signin')
        }
        
        try {
          const response:any = await axiosInstance.post('/me', payload);
          
          console.log("response🎊🎊🎊", response.data);
          if(response.data.status==404){
            router.push('/auth/signin')
          }

        } catch (error) {
          console.error("Auth check failed:", error);
        }
      }
    };

    checkAuth();
  }, [router]);

  return null; // no UI
}
