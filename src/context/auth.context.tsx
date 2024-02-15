import { createContext, ReactNode, useContext } from "react"
import { useSegments } from "expo-router"

export interface AuthContextValue {
  // signIn: (e: string, p: string) => Promise<SignInResponse>;
  // signUp: (e: string, p: string, n: string) => Promise<SignInResponse>;
  // signOut: () => Promise<SignOutResponse>;
  // setUserAuthCredential: (
  //   credential: AppleAuthCredential | GoogleAuthCredential | null
  // ) => void;
  // isCredentialChecked: boolean;
  // authCredential: IAuthCredential;
  // user: any;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)

interface ProviderProps {
  children: ReactNode
}

export const AuthProvider = (props: ProviderProps) => {
  const segments = useSegments()
  console.log(segments, "SEG")

  return (
    <AuthContext.Provider
      value={
        {
          // signIn: login,
          // signOut: logout,
          // signUp: createAcount,
          // setUserAuthCredential,
          // authCredential,
          // isCredentialChecked,
          // user,
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
