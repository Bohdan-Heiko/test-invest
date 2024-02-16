import { createContext, ReactNode, useContext } from "react"
import { AllRoutes, useRouter, useSegments } from "expo-router"

import { useAppSelector } from "@/store"

export interface AuthContextValue {
  handleReplaceRoute: (route: AllRoutes) => AllRoutes | undefined
  handlePushRoute: (route: AllRoutes) => AllRoutes | undefined
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)

interface ProviderProps {
  children: ReactNode
}

export const AuthProvider = (props: ProviderProps) => {
  const router = useRouter()
  const segments = useSegments()
  const { isAuthenticated } = useAppSelector((state) => state.bober_auth)

  const handleReplaceRoute = (route: AllRoutes): AllRoutes | undefined => {
    if (route !== "/(tabs)" && segments[0] === "(tabs)" && !isAuthenticated) {
      return "/(auth)/signin"
    }
    return route
  }

  const handlePushRoute = (route: AllRoutes) => {
    if (route !== "/(tabs)" && segments[0] === "(tabs)" && !isAuthenticated) {
      return router.replace("/(auth)/signin")
    }
    return router.push(route)
  }

  return (
    <AuthContext.Provider
      value={
        {
          handleReplaceRoute,
          handlePushRoute
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
