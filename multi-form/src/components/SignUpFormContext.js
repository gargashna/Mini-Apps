import React, { createContext, useContext, useState } from 'react'
import SignupForm from './SignupForm'

export const SignUpFormContext = createContext()
export const useSignUpForm = () => useContext(SignUpFormContext)
export function SignUpFormProvider ({ children }) {
  const [profile, setProfile] = useState({})
  const [social, setSocial] = useState({})
  return (
    //when we wrap up file with provider, any mesaage we send will be accessible everywhere
    <SignUpFormContext.Provider
      value={{ profile, setProfile, social, setSocial }}
    >
      {children}
    </SignUpFormContext.Provider>
  )
}
