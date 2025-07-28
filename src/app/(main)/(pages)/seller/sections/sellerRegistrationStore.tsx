import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type StepperFormState } from "@/components/ui/stepper-form";
import { z } from "zod";

// Define validation schemas for each step
const isLoginedSchema = z.object({
  loginStatus: z.boolean().refine((val) => val === true, {
    message: "You must Login or Create a New Account",
  }),
});

const accountInfoSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  gstn: z.string().min(15, "GSTN must be 15 characters"),
  storeName: z.string().min(2, "Store name must be at least 2 characters"),
  storeDescription: z.string().optional(),
  address: z.string().min(1, "Please select an address"),
  pincode: z.string().min(6, "Pincode must be 6 characters"),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

const bankDetailsSchema = z.object({
  accountHolderName: z
    .string()
    .min(2, "Account holder name must be at least 2 characters"),
  accountNumber: z
    .string()
    .min(9, "Account number must be at least 9 characters"),
  bankName: z.string().min(2, "Bank name must be at least 2 characters"),
  ifscCode: z.string().min(11, "IFSC code must be 11 characters"),
  branchName: z.string().optional(),
  accountType: z.string().optional(),
  upiId: z.string().optional(),
});

const tabSchemas = [isLoginedSchema, accountInfoSchema, bankDetailsSchema];

// Export schemas for use in components
export { tabSchemas };

interface SellerRegistrationState {
  formState: StepperFormState;
  currentTab: number;
  isSubmitted: boolean;
  autoProgressEnabled: boolean;
  errors: Record<string, string>;
  setFormState: (state: StepperFormState) => void;
  onFormChange: ({
    tabIndex,
    fieldName,
    value,
  }: {
    tabIndex: number;
    fieldName: string;
    value: string | number | boolean | null;
  }) => void;
  setCurrentTab: (tab: number, isManual?: boolean) => void;
  setIsSubmitted: (submitted: boolean) => void;
  resetForm: () => void;
  validateTab: (tabIndex: number) => boolean;
  validateField: (tabIndex: number, fieldName: string, value: any) => void;
  checkAndProgressTab: (tabIndex: number) => void;
  setAutoProgressEnabled: (enabled: boolean) => void;
  clearErrors: () => void;
  setError: (fieldName: string, error: string) => void;
}

const initialFormState: StepperFormState = [
  {
    tabName: "Login",
    fields: {
      loginStatus: false,
    },
  },
  {
    tabName: "Account Information",
    fields: {
      fullName: "",
      email: "",
      gstn: "",
      storeName: "",
      storeDescription: "",
      agreeTerms: false,
      address: "",
      city: "",
      state: "",
      pincode: "",
      mobileNumber: "",
    },
  },
  {
    tabName: "Bank Details",
    fields: {
      accountHolderName: "",
      accountNumber: "",
      bankName: "",
      ifscCode: "",
      branchName: "",
      accountType: "",
      upiId: "",
    },
  },
];

export const useSellerRegistrationStore = create<SellerRegistrationState>()(
  persist(
    (set, get) => ({
      formState: initialFormState,
      currentTab: 0,
      isSubmitted: false,
      autoProgressEnabled: true,
      errors: {},
      
      setFormState: (state) => set({ formState: state }),
      
      validateField: (tabIndex: number, fieldName: string, value: any) => {
        const validationSchema = tabSchemas[tabIndex];
        if (!validationSchema) return;

        try {
          // Validate the entire tab but only show error for specific field
          const { formState } = get();
          const currentTabFields = { ...formState[tabIndex].fields, [fieldName]: value };
          validationSchema.parse(currentTabFields);
          
          // Clear error if validation passes
          const { errors } = get();
          if (errors[fieldName]) {
            const newErrors = { ...errors };
            delete newErrors[fieldName];
            set({ errors: newErrors });
          }
        } catch (error) {
          if (error instanceof z.ZodError) {
            const fieldError = error.issues.find((err: any) => err.path[0] === fieldName);
            if (fieldError) {
              set({ 
                errors: { 
                  ...get().errors, 
                  [fieldName]: fieldError.message 
                } 
              });
            }
          }
        }
      },
      
      validateTab: (tabIndex: number) => {
        const { formState } = get();
        try {
          const currentTabFields = formState[tabIndex].fields;
          const validationSchema = tabSchemas[tabIndex];
          
          if (validationSchema) {
            validationSchema.parse(currentTabFields);
          }
          
          // Clear all errors for this tab if validation passes
          const { errors } = get();
          const tabFieldNames = Object.keys(currentTabFields);
          const newErrors = { ...errors };
          let hasChanges = false;
          
          tabFieldNames.forEach(fieldName => {
            if (newErrors[fieldName]) {
              delete newErrors[fieldName];
              hasChanges = true;
            }
          });
          
          if (hasChanges) {
            set({ errors: newErrors });
          }
          
          return true;
        } catch (error) {
          if (error instanceof z.ZodError) {
            const formattedErrors: Record<string, string> = {};
            error.issues.forEach((err: any) => {
              const fieldName = err.path[0] as string;
              formattedErrors[fieldName] = err.message;
            });
            
            set({ 
              errors: { 
                ...get().errors, 
                ...formattedErrors 
              } 
            });
          }
          return false;
        }
      },
      
      checkAndProgressTab: (tabIndex: number) => {
        const { validateTab, currentTab, autoProgressEnabled } = get();
        
        // Only auto-progress if enabled, we're on the current tab and it's not the last tab
        if (autoProgressEnabled && tabIndex === currentTab && tabIndex < 3) {
          const isValid = validateTab(tabIndex);
          
          if (isValid) {
            // Get tab names for feedback
            const tabNames = ["Login", "Account Information", "Bank Details", "Review & Submit"];
            
            // Add a small delay for better UX and show progression feedback
            setTimeout(() => {
              set({ currentTab: tabIndex + 1 });
              
              // Optional: Add console log for development
              console.log(`✅ ${tabNames[tabIndex]} completed! Moving to ${tabNames[tabIndex + 1]}`);
            }, 500);
          }
        }
      },
      
      onFormChange: ({ tabIndex, fieldName, value }) => {
        set((state) => {
          const updatedState = state.formState.map((tab, index) =>
            index === tabIndex
              ? {
                  ...tab,
                  fields: {
                    ...tab.fields,
                    [fieldName]: value,
                  },
                }
              : tab
          );

          return { formState: updatedState };
        });
        
        // Validate the specific field that changed
        const { validateField, checkAndProgressTab } = get();
        validateField(tabIndex, fieldName, value);
        
        // Check if we should auto-progress to next tab after field update
        checkAndProgressTab(tabIndex);
      },
      
      setCurrentTab: (tab, isManual = false) => {
        if (isManual) {
          // Temporarily disable auto-progress when user manually navigates
          set({ currentTab: tab, autoProgressEnabled: false });
          // Re-enable after a short delay
          setTimeout(() => {
            set({ autoProgressEnabled: true });
          }, 2000);
        } else {
          set({ currentTab: tab });
        }
      },
      
      setIsSubmitted: (submitted) => set({ isSubmitted: submitted }),
      setAutoProgressEnabled: (enabled) => set({ autoProgressEnabled: enabled }),
      clearErrors: () => set({ errors: {} }),
      setError: (fieldName: string, error: string) => set({ 
        errors: { ...get().errors, [fieldName]: error } 
      }),
      
      resetForm: () =>
        set({
          formState: initialFormState,
          currentTab: 0,
          isSubmitted: false,
          autoProgressEnabled: true,
          errors: {},
        }),
    }),
    {
      name: "seller-registration-storage",
    }
  )
);
