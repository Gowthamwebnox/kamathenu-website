import { ChangeEvent } from "react";
import { useStepperForm } from "./context";
import { FormField } from "./form-field";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export function CustomInput({
  tabIndex,
  fieldName,
  label,
  type = "text",
  placeholder = "",
  disabled = false,
  className = "",
  showSuccessIndicator = true,
  ...rest
}: {
  tabIndex: number;
  fieldName: string;
  label?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  showSuccessIndicator?: boolean;
  [key: string]: any;
}) {
  const { formState, updateField, errors } = useStepperForm();

  const value = formState[tabIndex]?.fields[fieldName] || "";
  const hasError = !!errors[fieldName];
  const hasValue = type === "checkbox" ? value : (value as string).trim().length > 0;
  const isValid = hasValue && !hasError;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue =
      e.target.type === "checkbox"
        ? e.target.checked
        : type === "number"
        ? Number.parseFloat(e.target.value)
        : e.target.value;
    updateField(tabIndex, fieldName, newValue);
  };

  return (
    <FormField tabIndex={tabIndex} fieldName={fieldName}>
      {label && (
        <label 
          className={cn(
            "mb-2 block text-sm font-medium",
            hasError ? "text-red-600" : isValid ? "text-green-600" : "text-gray-700"
          )}
          htmlFor={fieldName}
        >
          {label}
          {hasError && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        <input
          {...rest}
          id={fieldName}
          type={type}
          disabled={disabled}
          checked={
            type === "checkbox"
              ? (formState[tabIndex].fields[fieldName] as boolean)
              : undefined
          }
          value={
            type !== "checkbox"
              ? (formState[tabIndex].fields[fieldName] as string)
              : undefined
          }
          placeholder={placeholder}
          onChange={handleChange}
          className={cn(
            "w-full rounded-lg border px-4 py-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
            hasError
              ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-500"
              : isValid
              ? "border-green-300 bg-green-50 focus:border-green-500 focus:ring-green-500"
              : "border-gray-300 bg-white focus:border-blue-500 focus:ring-blue-500",
            disabled && "bg-gray-50 text-gray-500 cursor-not-allowed",
            type === "checkbox" && "w-4 h-4 rounded",
            type !== "checkbox" && isValid && showSuccessIndicator && "pr-12",
            className
          )}
        />
        
        {/* Success indicator for text inputs */}
        {type !== "checkbox" && isValid && showSuccessIndicator && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Check className="w-5 h-5 text-green-500" />
          </div>
        )}
      </div>
    </FormField>
  );
}
