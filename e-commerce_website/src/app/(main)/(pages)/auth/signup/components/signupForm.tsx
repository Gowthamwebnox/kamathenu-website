"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useRouter } from "next/navigation"
import { Loader2, Mail, Lock, User, Phone, Eye, EyeOff, Shield, Clock, Users } from "lucide-react"
import { FcGoogle } from "react-icons/fc"

interface SignupDetails {
  name: string
  email: string
  password: string
  otp: string
  firstname: string
  lastname: string
  number: string
}

const SignupForm = () => {
  const router = useRouter()

  const [signupDetails, setSignupDetails] = useState<SignupDetails>({
    name: "",
    email: "",
    password: "",
    otp: "",
    firstname: "",
    lastname: "",
    number: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [isOtpLoading, setIsOtpLoading] = useState(false)
  const [otpSent, setOtpSent] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<Partial<SignupDetails>>({})
  const [apiError, setApiError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [generateOTP, setGenerateOTP] = useState("")

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        return value.length < 2 ? "Name must be at least 2 characters" : ""
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return !emailRegex.test(value) ? "Please enter a valid email" : ""
      case "password":
        return value.length < 6 ? "Password must be at least 6 characters" : ""
      case "firstname":
        return value.length < 1 ? "First name is required" : ""
      case "lastname":
        return value.length < 1 ? "Last name is required" : ""
      case "number":
        const phoneRegex = /^\d{10}$/
        return !phoneRegex.test(value.replace(/\D/g, "")) ? "Please enter a valid 10-digit phone number" : ""
      case "otp":
        return value.length !== 6 ? "OTP must be 6 digits" : ""
      default:
        return ""
    }
  }

  const setData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setSignupDetails((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name as keyof SignupDetails]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }

    // Real-time validation
    const error = validateField(name, value)
    if (error) {
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }))
    }
  }

  const optGenerate = async () => {
    // Validate required fields for OTP
    const nameError = validateField("name", signupDetails.name)
    const emailError = validateField("email", signupDetails.email)

    if (nameError || emailError) {
      setErrors({
        name: nameError,
        email: emailError,
      })
      return
    }

    setIsOtpLoading(true)
    setApiError("")

    try {
      const payload = {
        name: signupDetails.name,
        email: signupDetails.email,
      }

      // Simulate API call - replace with your actual API
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Mock response - replace with actual API response
      const mockOtpId = "mock-otp-id-" + Date.now()
      setGenerateOTP(mockOtpId)
      setOtpSent(true)
      setSuccessMessage("OTP sent successfully to your email!")

      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(""), 3000)
    } catch (error) {
      setApiError("Failed to send OTP. Please try again.")
    } finally {
      setIsOtpLoading(false)
    }
  }

  const handleSignup = async () => {
    // Validate all fields
    const newErrors: Partial<SignupDetails> = {}
    Object.keys(signupDetails).forEach((key) => {
      const error = validateField(key, signupDetails[key as keyof SignupDetails])
      if (error) {
        newErrors[key as keyof SignupDetails] = error
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    if (!otpSent) {
      setApiError("Please generate and verify OTP first.")
      return
    }

    setIsLoading(true)
    setApiError("")

    try {
      const payload = {
        signupDetails,
        isEmailValidation: true,
        id: generateOTP,
      }

      // Simulate API call - replace with your actual API
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setSuccessMessage("Account created successfully! Redirecting to login...")

      setTimeout(() => {
        router.push("/auth/login")
      }, 2000)
    } catch (error) {
      setApiError("Failed to create account. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = () => {
    // Implement Google login logic
    console.log("Google login clicked")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto items-center min-h-screen">
          {/* Form Section */}
          <div className="flex items-center justify-center order-2 lg:order-1">
            <Card className="w-full max-w-md shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold text-gray-800">Create Account</CardTitle>
                <p className="text-gray-600 mt-2">Join us today and get started</p>
              </CardHeader>

              <CardContent className="space-y-5">
                {/* Error Alert */}
                {apiError && (
                  <Alert variant="destructive">
                    <AlertDescription>{apiError}</AlertDescription>
                  </Alert>
                )}

                {/* Success Alert */}
                {successMessage && (
                  <Alert className="border-green-200 bg-green-50">
                    <AlertDescription className="text-green-800">{successMessage}</AlertDescription>
                  </Alert>
                )}

                {/* Name Field */}
                <div className="space-y-2">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      type="text"
                      name="name"
                      value={signupDetails.name}
                      placeholder="Full Name"
                      className={`pl-10 h-11 ${errors.name ? "border-red-500" : ""}`}
                      onChange={setData}
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                {/* Email and OTP Section */}
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        type="email"
                        name="email"
                        value={signupDetails.email}
                        placeholder="Email Address"
                        className={`pl-10 h-11 ${errors.email ? "border-red-500" : ""}`}
                        onChange={setData}
                      />
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      className="h-11 px-3 whitespace-nowrap border-[#D8A526] text-[#D8A526] hover:bg-[#D8A526] hover:text-white bg-transparent text-sm"
                      onClick={optGenerate}
                      disabled={isOtpLoading || !signupDetails.name || !signupDetails.email}
                    >
                      {isOtpLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send OTP"}
                    </Button>
                  </div>
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={signupDetails.password}
                      placeholder="Password"
                      className={`pl-10 pr-10 h-11 ${errors.password ? "border-red-500" : ""}`}
                      onChange={setData}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>

                {/* OTP Field */}
                <div className="space-y-2">
                  <div className="text-center">
                    <InputOTP
                      maxLength={6}
                      value={signupDetails.otp}
                      onChange={(value) => setSignupDetails({ ...signupDetails, otp: value })}
                      disabled={!otpSent}
                    >
                      <InputOTPGroup className="gap-2">
                        {[0, 1, 2, 3, 4, 5].map((index) => (
                          <InputOTPSlot
                            key={index}
                            className={`w-10 h-10 text-lg font-semibold ${
                              !otpSent ? "bg-gray-100" : ""
                            } ${errors.otp ? "border-red-500" : ""}`}
                            index={index}
                          />
                        ))}
                      </InputOTPGroup>
                    </InputOTP>
                    <p className="text-sm text-gray-500 mt-2">
                      {otpSent ? "Enter the OTP sent to your email" : "Generate OTP first"}
                    </p>
                  </div>
                  {errors.otp && <p className="text-red-500 text-sm text-center">{errors.otp}</p>}
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      name="firstname"
                      value={signupDetails.firstname}
                      placeholder="First Name"
                      className={`h-11 ${errors.firstname ? "border-red-500" : ""}`}
                      onChange={setData}
                    />
                    {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname}</p>}
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="text"
                      name="lastname"
                      value={signupDetails.lastname}
                      placeholder="Last Name"
                      className={`h-11 ${errors.lastname ? "border-red-500" : ""}`}
                      onChange={setData}
                    />
                    {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname}</p>}
                  </div>
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      type="tel"
                      name="number"
                      value={signupDetails.number}
                      placeholder="Phone Number"
                      className={`pl-10 h-11 ${errors.number ? "border-red-500" : ""}`}
                      onChange={setData}
                    />
                  </div>
                  {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}
                </div>

                {/* Sign Up Button */}
                <Button
                  className="w-full h-11 bg-[#D8A526] hover:bg-[#B8941F] text-white font-semibold"
                  onClick={handleSignup}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </Button>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">or continue with</span>
                  </div>
                </div>

                {/* Google Login */}
                <Button
                  variant="outline"
                  className="w-full h-11 border-gray-300 hover:bg-gray-50 bg-transparent"
                  onClick={handleGoogleLogin}
                >
                  <FcGoogle className="mr-2 h-5 w-5" />
                  Continue with Google
                </Button>

                {/* Login Link */}
                <p className="text-center text-gray-600 text-sm">
                  Already have an account?{" "}
                  <button
                    className="text-[#D8A526] hover:text-[#B8941F] font-semibold"
                    onClick={() => router.push("/auth/login")}
                  >
                    Sign in here
                  </button>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <div className="w-full max-w-lg space-y-6">
              {/* Main Hero Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#D8A526] to-[#B8941F]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D8A526]/90 to-[#B8941F]/90"></div>
                <img
                  src="/placeholder.svg?height=500&width=400"
                  alt="Join our platform"
                  className="w-full h-[500px] object-cover opacity-20"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Welcome to Our Platform</h2>
                  <p className="text-lg opacity-90 leading-relaxed mb-8">
                    Join thousands of users who trust us with their journey. Create your account today and unlock
                    amazing features.
                  </p>

                  {/* Feature Stats */}
                  <div className="grid grid-cols-3 gap-6 w-full max-w-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold">10K+</div>
                      <div className="text-sm opacity-80">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">99%</div>
                      <div className="text-sm opacity-80">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm opacity-80">Support</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-white/20">
                  <Shield className="w-8 h-8 text-[#D8A526] mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800 text-sm">Secure</h4>
                  <p className="text-xs text-gray-600 mt-1">Bank-level security</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-white/20">
                  <Clock className="w-8 h-8 text-[#D8A526] mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800 text-sm">Fast</h4>
                  <p className="text-xs text-gray-600 mt-1">Quick setup</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-white/20">
                  <Users className="w-8 h-8 text-[#D8A526] mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800 text-sm">Trusted</h4>
                  <p className="text-xs text-gray-600 mt-1">By thousands</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupForm
