import { DefaultTheme, ThemeProvider } from "@react-navigation/native"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Provider as ReduxProvider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import store, { persistor } from "@/store"
import { AuthProvider } from "@/context/auth.context"
import initReactI18next from "@/utils/i18n"

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from "expo-router"

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)"
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync()
  }, [])

  return (
    <SafeAreaProvider>
      <RootLayoutNav />
    </SafeAreaProvider>
  )
}

function RootLayoutNav() {
  const onBeforeLiftHandler = async (store: any) => {
    await initReactI18next(store)
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <ReduxProvider store={store}>
        <PersistGate
          persistor={persistor}
          onBeforeLift={async () => await onBeforeLiftHandler(store)}
        >
          <AuthProvider>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="(auth)/registration" options={{ headerShown: false }} />
              <Stack.Screen name="(auth)/signin" options={{ headerShown: false }} />
              <Stack.Screen name="(payment)/payment" options={{ headerShown: false }} />
              <Stack.Screen name="(project)/project" options={{ headerShown: false }} />
              <Stack.Screen name="(report)" options={{ headerShown: false }} />
              <Stack.Screen
                name="(statuses)/payment-status"
                options={{ headerShown: false }}
              />
              <Stack.Screen name="confirm-payment" options={{ headerShown: false }} />
            </Stack>
          </AuthProvider>
        </PersistGate>
      </ReduxProvider>
    </ThemeProvider>
  )
}
