import { createContext, ReactNode, useContext, useEffect } from "react"
import { AllRoutes, usePathname, useRouter, useSegments } from "expo-router"

import useActions from "@/hooks/useActions"
import { useAppSelector } from "@/store"
import { useGetMeQuery } from "@/store/services/usersApi"

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
  const pathName = usePathname()
  const segments = useSegments()
  const { setUserData } = useActions()

  const { isAuthenticated } = useAppSelector((state) => state.bober_auth)

  const {
    data: getMeData,
    refetch: refetchGetMeData,
    isFetching: isGetMeFetching
  } = useGetMeQuery()

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

  useEffect(() => {
    if (getMeData) {
      setUserData(getMeData)
    }
  }, [getMeData, isGetMeFetching])

  // IF NEED MAKE REREQUEST
  useEffect(() => {
    if (pathName && isAuthenticated) {
      refetchGetMeData()
    } 
    else if(pathName !== '/signin' && !isAuthenticated) {
      router.replace("/(tabs)/")
    }
  }, [pathName, isAuthenticated])

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
