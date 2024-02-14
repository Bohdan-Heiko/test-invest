import { colors } from "@/utils/constants/colors"
import { Stack } from "expo-router"

export default function LoginLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "white"
        },
        headerTintColor: colors.mine_shaft,
        gestureEnabled: false,
        headerTitleStyle: {
          fontFamily: "Inter500"
        },
        headerTitle: "Логін"
      }}
    />
  )
}
