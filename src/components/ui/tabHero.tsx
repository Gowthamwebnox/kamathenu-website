"use client"

import * as React from "react"
import { motion, MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

const scrollbarHideStyles = `
  .scrollbar-none {
    -ms-overflow-style: none;
    scrollbar-width: none;
    
  }
  .scrollbar-none::-webkit-scrollbar {
    display: none;
    
  }
`;

function ScrollbarStyles() {
  return <style jsx global>{scrollbarHideStyles}</style>;
}

type TabsContextValue = {
  activeTab: string
  setActiveTab: (id: string) => void
}

const TabsContext = React.createContext<TabsContextValue | undefined>(undefined)

function useTabs() {
  const context = React.useContext(TabsContext)
  if (!context) {
    throw new Error("useTabs must be used within a TabsProvider")
  }
  return context
}

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
}

function Tabs({ defaultValue, value, onValueChange, children, className, ...props }: TabsProps) {
  const [activeTab, setActiveTabInternal] = React.useState(defaultValue || "")

  const setActiveTab = React.useCallback(
    (id: string) => {
      if (onValueChange) {
        onValueChange(id)
      } else {
        setActiveTabInternal(id)
      }
    },
    [onValueChange],
  )

  const contextValue = React.useMemo(
    () => ({
      activeTab: value !== undefined ? value : activeTab,
      setActiveTab,
    }),
    [activeTab, setActiveTab, value],
  )

  return (
    <TabsContext.Provider value={contextValue}>
      <ScrollbarStyles />
      <div className={cn("w-full ", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

function TabsList({ children, className, ...props }: TabsListProps) {
  return (
    <div className="relative w-[30%]">
      <div 
        className={cn(
          "flex  w-full flex-nowrap overflow-x-auto scrollbar-none pt-4 pb-1 ",
          "justify-start gap-4 scroll-smooth",
          className
        )} 
        {...props}
      >
        {children}
        <motion.div
          layoutId="tab-indicator"
          className="absolute bottom-0 h-[14px] bg-[#b01116] rounded-full"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </div>
    </div>
  );
}

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  children: React.ReactNode
}

function TabsTrigger({ value, children, className, ...props }: TabsTriggerProps) {
  const { activeTab, setActiveTab } = useTabs()
  const isActive = activeTab === value

  return (
    <button
      className={cn(
        "relative  px-1 pb-2 text-sm md:text-[1.1rem] tracking-wide transition-colors cursor-pointer font-semibold",
        "whitespace-nowrap flex-shrink-0",
        isActive ? "text-[#D8A526]" : "text-gray-600",
        className,
      )}
      onClick={() => setActiveTab(value)}
      {...props}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute -bottom-1  w-[95%] h-1 bg-[#D8A526]"
          layoutId="tab-indicator"
          transition={{ type: "spring", stiffness: 500, damping: 40 }}
        />
      )}
    </button>
  )
}

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  children: React.ReactNode
}

function TabsContent({ value, children, className, ...props }: TabsContentProps) {
  const { activeTab } = useTabs()
  const isActive = activeTab === value

  return isActive ? (
    <motion.div
      className={cn("m-0", className)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      {...(props as MotionProps)}
    >
      {children}
    </motion.div>
  ) : null
}

export { Tabs, TabsList, TabsTrigger, TabsContent, useTabs }
