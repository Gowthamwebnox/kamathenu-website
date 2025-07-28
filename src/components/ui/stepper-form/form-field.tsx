"use client"

import type { ReactNode } from "react"
import { useStepperForm } from "./context"
import { cn } from "@/lib/utils"
import { AlertCircle } from "lucide-react"

interface FormFieldProps {
  tabIndex: number
  fieldName: string
  children: ReactNode
  className?: string
  errorClassName?: string
}

export function FormField({ tabIndex, fieldName, children, className = "", errorClassName = "" }: FormFieldProps) {
  const { errors } = useStepperForm()
  const error = errors[fieldName]

  return (
    <div className={cn("stepper-form-field mb-4", className)}>
      {children}
      {error && (
        <div className={cn(
          "flex items-center gap-1 text-red-600 text-sm mt-2 font-medium animate-in fade-in-0 slide-in-from-top-1 duration-200", 
          errorClassName
        )}>
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  )
}

