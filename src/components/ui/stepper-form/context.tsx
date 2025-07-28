"use client"

import { createContext, useContext, useState, type ReactNode, useEffect } from "react"
import { z } from "zod"

export type FormFieldValue = string | number | boolean | null
export type TabFormState = {
  tabName: string
  fields: Record<string, FormFieldValue>
}

export type StepperFormState = TabFormState[]

type StepperFormContextType = {
  activeTabIndex: number
  setActiveTabIndex: (index: number) => void
  formState: StepperFormState
  updateField: (tabIndex: number, fieldName: string, value: FormFieldValue) => void
  schema: z.ZodType<any>
  errors: Record<string, string>
  validateTab: (tabIndex: number) => boolean
  isLastTab: boolean
}

const StepperFormContext = createContext<StepperFormContextType | undefined>(undefined)

export function useStepperForm() {
  const context = useContext(StepperFormContext)
  if (!context) {
    throw new Error("useStepperForm must be used within a StepperFormProvider")
  }
  return context
}

interface StepperFormProviderProps {
  children: ReactNode
  formState: StepperFormState
  schema: z.ZodType<any>
  tabSchemas?: z.ZodType<any>[]
  onFormStateChange: (state: StepperFormState) => void
  currentTab?: number
  onTabChange?: (tab: number) => void
  errors?: Record<string, string>
}

export function StepperFormProvider({ 
  children, 
  formState, 
  schema, 
  tabSchemas,
  onFormStateChange,
  currentTab,
  onTabChange,
  errors: externalErrors = {}
}: StepperFormProviderProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(currentTab ?? 0)
  const [localErrors, setLocalErrors] = useState<Record<string, string>>({})

  // Use external errors if provided, otherwise use local errors
  const errors = Object.keys(externalErrors).length > 0 ? externalErrors : localErrors

  useEffect(() => {
    if (currentTab !== undefined) {
      setActiveTabIndex(currentTab)
    }
  }, [currentTab])

  const handleTabChange = (index: number) => {
    setActiveTabIndex(index)
    onTabChange?.(index)
  }

  const updateField = (tabIndex: number, fieldName: string, value: FormFieldValue) => {
    const newState = [...formState]
    newState[tabIndex] = {
      ...newState[tabIndex],
      fields: {
        ...newState[tabIndex].fields,
        [fieldName]: value,
      },
    }
    onFormStateChange(newState)

    // Only clear local errors if we're not using external errors
    if (Object.keys(externalErrors).length === 0 && localErrors[fieldName]) {
      setLocalErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[fieldName]
        return newErrors
      })
    }
  }

  const validateTab = (tabIndex: number) => {
    try {
      const currentTabFields = formState[tabIndex].fields

      const validationSchema = tabSchemas?.[tabIndex] || schema
      validationSchema.parse(currentTabFields)

      // Only clear local errors if we're not using external errors
      if (Object.keys(externalErrors).length === 0) {
        setLocalErrors({})
      }
      return true
    } catch (error) {
      if (error instanceof z.ZodError && Object.keys(externalErrors).length === 0) {
        const formattedErrors: Record<string, string> = {}
        error.issues.forEach((err: any) => {
          const path = err.path.join(".")
          formattedErrors[path] = err.message
        })
        setLocalErrors(formattedErrors)
      }
      return false
    }
  }

  const isLastTab = activeTabIndex === formState.length

  const value = {
    activeTabIndex,
    setActiveTabIndex: handleTabChange,
    formState,
    updateField,
    schema,
    errors,
    validateTab,
    isLastTab,
  }

  return <StepperFormContext.Provider value={value}>{children}</StepperFormContext.Provider>
}

