import { DefaultTheme, ThemeProvider } from "@react-navigation/native"
import { Stack } from "expo-router"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet"

import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Provider as ReduxProvider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import store, { persistor } from "@/store"
import { AuthProvider } from "@/context/auth.context"
import initReactI18next from "@/utils/i18n"
import { useFonts } from "expo-font"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { ModalsProvider } from "@/context/modal.context"
import { Host } from "react-native-portalize"

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
      <BottomSheetModalProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ModalsProvider>
            <ThemeProvider value={DefaultTheme}>
              <Host>
                <Stack screenOptions={{ headerShown: false }}>
                  <Stack.Screen name="(tabs)" />
                  <Stack.Screen name="(public)/(auth)/registration" />
                  <Stack.Screen name="(public)/(auth)/signin" />
                  <Stack.Screen name="(public)/(auth)/recover-password" />
                  <Stack.Screen name="(private)/(payment)/payment" />
                  <Stack.Screen name="(public)/(project)/project" />
                  <Stack.Screen name="(public)/(report)" />
                  <Stack.Screen
                    name="(private)/(statuses)/payment-status"
                    options={{
                      gestureEnabled: false
                    }}
                  />
                  <Stack.Screen
                    name="(private)/confirm-payment"
                    options={{
                      gestureEnabled: false
                    }}
                  />
                </Stack>
              </Host>
            </ThemeProvider>
          </ModalsProvider>
        </GestureHandlerRootView>
      </BottomSheetModalProvider>
    </AuthProvider>
  )
}
