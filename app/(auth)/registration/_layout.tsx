import { Stack } from "expo-router"
import Colors, { colors } from "@/utils/constants/colors"

export default function RegistrationLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: colors.white
        },
        headerTintColor: colors.mine_shaft,
        gestureEnabled: false,
        headerTitleStyle: {
          fontFamily: "Inter500"
        },
        headerTitle: "Реєстрація"
      }}
    />
  )
}
