import { DefaultTheme, ThemeProvider } from "@react-navigation/native"
import { Stack } from "expo-router"
import FontAwesome from "@expo/vector-icons/FontAwesome"

import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Provider as ReduxProvider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import store, { persistor } from "@/store"
import { AuthProvider } from "@/context/auth.context"
import initReactI18next from "@/utils/i18n"
import { useFonts } from "expo-font"

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
  const onBeforeLiftHandler = async (store: any) => {
    await initReactI18next(store)
  }

  const [loaded, error] = useFonts({
    ...FontAwesome.font
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <PersistGate
          persistor={persistor}
          onBeforeLift={async () => await onBeforeLiftHandler(store)}
        >
          <RootLayoutNav />
        </PersistGate>
      </ReduxProvider>
    </SafeAreaProvider>
  )
}

function RootLayoutNav() {
  return (
    <AuthProvider>
      <ThemeProvider value={DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="(auth)/registration" />
          <Stack.Screen name="(auth)/signin" />
          <Stack.Screen name="(auth)/recover-password" />
          <Stack.Screen name="(payment)/payment" />
          <Stack.Screen name="(project)/project" />
          <Stack.Screen name="(report)" />
          <Stack.Screen
            name="(statuses)/payment-status"
            options={{
              gestureEnabled: false
            }}
          />
          <Stack.Screen
            name="confirm-payment"
            options={{
              gestureEnabled: false
            }}
          />
        </Stack>
      </ThemeProvider>
    </AuthProvider>
  )
}
