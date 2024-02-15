import { createContext, ReactNode, useContext } from "react"
import { AllRoutes, useSegments } from "expo-router"

import { useAppSelector } from "@/store"

export interface AuthContextValue {
  handleReplaceRoute: (route: AllRoutes) => AllRoutes | undefined
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)

interface ProviderProps {
  children: ReactNode
}

export const AuthProvider = (props: ProviderProps) => {
  const segments = useSegments()
  const { isAuthenticated } = useAppSelector((state) => state.bober_auth)

  const handleReplaceRoute = (route: AllRoutes): AllRoutes | undefined => {
    if (route !== "/(tabs)" && segments[0] === "(tabs)" && !isAuthenticated) {
      return "/(auth)/signin"
    }
    return route
  }

  return (
    <AuthContext.Provider
      value={
        {
          handleReplaceRoute
        } as AuthContextValue
      }
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const authContext = useContext(AuthContext)

  return authContext as AuthContextValue
}
